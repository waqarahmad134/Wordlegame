import "server-only";
import { EventEmitter } from "node:events";
import { scoreGuess } from "./wordle/engine";
import type { LetterState } from "./wordle/types";
import { getRandomWord } from "./wordle/daily";
import { loadWordList } from "./words";

export interface PlayerView {
  id: string;
  nickname: string;
  /** Per-guess color patterns (no letters, to avoid leaking the answer). */
  patterns: LetterState[][];
  solved: boolean;
  guessCount: number;
}

export interface RoomState {
  code: string;
  locale: string;
  length: number;
  status: "waiting" | "finished";
  players: PlayerView[];
  winner: string | null;
}

interface Player {
  id: string;
  nickname: string;
  guesses: string[];
  solved: boolean;
}

interface Room {
  code: string;
  locale: string;
  length: number;
  word: string;
  players: Map<string, Player>;
  winner: string | null;
  emitter: EventEmitter;
}

// Persist the store across hot reloads in dev.
const g = globalThis as unknown as { __wgRooms?: Map<string, Room> };
const rooms: Map<string, Room> = (g.__wgRooms ??= new Map());

function code(): string {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let c = "";
  for (let i = 0; i < 5; i++)
    c += chars[Math.floor(Math.random() * chars.length)];
  return c;
}
function id(): string {
  return Math.random().toString(36).slice(2, 10);
}

export async function createRoom(
  locale: string,
  length: number,
): Promise<string> {
  await loadWordList(locale, length);
  const word = await getRandomWord(locale, length);
  let c = code();
  while (rooms.has(c)) c = code();
  rooms.set(c, {
    code: c,
    locale,
    length,
    word,
    players: new Map(),
    winner: null,
    emitter: new EventEmitter(),
  });
  return c;
}

export function joinRoom(c: string, nickname: string): string | null {
  const room = rooms.get(c);
  if (!room) return null;
  const pid = id();
  room.players.set(pid, { id: pid, nickname, guesses: [], solved: false });
  emit(room);
  return pid;
}

export interface GuessResult {
  ok: boolean;
  error?: string;
  solved?: boolean;
}

export async function submitGuess(
  c: string,
  playerId: string,
  guess: string,
): Promise<GuessResult> {
  const room = rooms.get(c);
  if (!room) return { ok: false, error: "Room not found" };
  const player = room.players.get(playerId);
  if (!player) return { ok: false, error: "Player not in room" };
  if (player.solved || room.winner) return { ok: false, error: "Game over" };

  const g = guess.toLowerCase();
  if (g.length !== room.length) return { ok: false, error: "Wrong length" };
  const { valid } = await loadWordList(room.locale, room.length);
  if (!valid.has(g)) return { ok: false, error: "Not in word list" };

  player.guesses.push(g);
  const solved = g === room.word;
  if (solved) {
    player.solved = true;
    if (!room.winner) room.winner = player.id;
  }
  emit(room);
  return { ok: true, solved };
}

function checkFinished(room: Room): boolean {
  return [...room.players.values()].every((p) => p.solved);
}

export function getState(c: string): RoomState | null {
  const room = rooms.get(c);
  if (!room) return null;
  return toState(room);
}

function toState(room: Room): RoomState {
  return {
    code: room.code,
    locale: room.locale,
    length: room.length,
    status: room.winner && checkFinished(room) ? "finished" : "waiting",
    winner: room.winner,
    players: [...room.players.values()].map((p) => ({
      id: p.id,
      nickname: p.nickname,
      patterns: p.guesses.map((gg) =>
        scoreGuess(gg, room.word).map((cell) => cell.state),
      ),
      solved: p.solved,
      guessCount: p.guesses.length,
    })),
  };
}

function emit(room: Room) {
  room.emitter.emit("update", toState(room));
}

export function subscribe(
  c: string,
  cb: (state: RoomState) => void,
): (() => void) | null {
  const room = rooms.get(c);
  if (!room) return null;
  room.emitter.on("update", cb);
  return () => room.emitter.off("update", cb);
}

export { rooms as __rooms };
