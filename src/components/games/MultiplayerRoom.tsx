"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Keyboard } from "@/components/game/Keyboard";
import { Toast } from "@/components/game/Toast";
import { deriveKeyStates } from "@/lib/wordle/engine";
import type { LetterState, ScoredLetter } from "@/lib/wordle/types";
import { maxGuessesForLength } from "@/lib/config";

interface PlayerView {
  id: string;
  nickname: string;
  patterns: LetterState[][];
  solved: boolean;
  guessCount: number;
}
interface RoomState {
  code: string;
  length: number;
  status: string;
  winner: string | null;
  players: PlayerView[];
}

function OpponentBoard({
  player,
  length,
  maxGuesses,
}: {
  player: PlayerView;
  length: number;
  maxGuesses: number;
}) {
  return (
    <div className="text-center">
      <div className="mb-1 truncate text-xs font-bold">
        {player.nickname} {player.solved ? "✅" : ""}
      </div>
      <div className="grid gap-0.5">
        {Array.from({ length: maxGuesses }).map((_, r) => (
          <div
            key={r}
            className="grid gap-0.5"
            style={{ gridTemplateColumns: `repeat(${length}, 1fr)` }}
          >
            {Array.from({ length }).map((_, c) => (
              <div
                key={c}
                className="aspect-square rounded-[2px]"
                style={{
                  background: stateColor(player.patterns[r]?.[c]),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function stateColor(s?: LetterState): string {
  if (s === "correct") return "var(--correct)";
  if (s === "present") return "var(--present)";
  if (s === "absent") return "var(--absent)";
  return "var(--border)";
}

export function MultiplayerRoom({ code }: { code: string }) {
  const { t } = useI18n();
  const [nickname, setNickname] = useState("");
  const [joined, setJoined] = useState(false);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [state, setState] = useState<RoomState | null>(null);
  const [myGuesses, setMyGuesses] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const length = state?.length ?? 5;
  const maxGuesses = maxGuessesForLength(length);
  const me = state?.players.find((p) => p.id === playerId);
  const myPatterns = me?.patterns ?? [];
  const over = !!me?.solved || myGuesses.length >= maxGuesses || !!state?.winner;

  const showToast = useCallback((m: string) => {
    setToast(m);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1500);
  }, []);

  const join = async () => {
    const res = await fetch(`/api/room/${code}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: nickname || "Player" }),
    });
    if (res.status === 404) return setNotFound(true);
    const data = await res.json();
    setPlayerId(data.playerId);
    setState(data.state);
    setJoined(true);
  };

  // Subscribe to live room updates once joined.
  useEffect(() => {
    if (!joined) return;
    const es = new EventSource(`/api/room/${code}/stream`);
    es.onmessage = (e) => {
      try {
        setState(JSON.parse(e.data));
      } catch {
        /* ignore */
      }
    };
    return () => es.close();
  }, [joined, code]);

  const submit = useCallback(async () => {
    if (over) return;
    if (current.length < length) return showToast(t.game.notEnoughLetters);
    const res = await fetch(`/api/room/${code}/guess`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId, guess: current }),
    });
    const data = await res.json();
    if (!data.ok) return showToast(data.error || t.game.notInWordList);
    setMyGuesses((g) => [...g, current.toLowerCase()]);
    setCurrent("");
    if (data.state) setState(data.state);
  }, [over, current, length, code, playerId, showToast, t]);

  const type = useCallback(
    (ch: string) => {
      if (over) return;
      setCurrent((c) => (c.length < length ? c + ch.toLowerCase() : c));
    },
    [over, length],
  );
  const remove = useCallback(() => setCurrent((c) => c.slice(0, -1)), []);

  useEffect(() => {
    if (!joined) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") submit();
      else if (e.key === "Backspace") remove();
      else if (/^[a-zA-Z]$/.test(e.key)) type(e.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [joined, submit, remove, type]);

  if (notFound) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-bold">Room not found</h1>
        <p className="text-[var(--muted)]">Check the code and try again.</p>
      </div>
    );
  }

  if (!joined) {
    return (
      <div className="mx-auto w-full max-w-sm p-6">
        <h1 className="mb-2 text-2xl font-bold">Join Room {code}</h1>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Your name"
          className="mb-3 w-full rounded border border-[var(--border)] bg-transparent px-3 py-2"
        />
        <button
          onClick={join}
          className="w-full rounded bg-[var(--correct)] px-4 py-2 font-bold text-white"
        >
          Join
        </button>
      </div>
    );
  }

  // Build my colored rows from guessed letters + server patterns.
  const myRows: ScoredLetter[][] = myGuesses.map((word, i) =>
    word
      .split("")
      .map((letter, j) => ({ letter, state: myPatterns[i]?.[j] ?? "absent" })),
  );
  const keyStates = deriveKeyStates(myRows);
  const opponents = state?.players.filter((p) => p.id !== playerId) ?? [];

  return (
    <div className="flex flex-1 flex-col">
      <Toast message={toast} />
      <div className="flex items-center justify-between px-3 py-2 text-sm">
        <span className="font-bold">Room {code}</span>
        <span className="text-[var(--muted)]">
          {state?.players.length ?? 1} player(s)
        </span>
      </div>

      {state?.winner && (
        <p className="py-1 text-center font-bold">
          {state.winner === playerId
            ? "You won! 🎉"
            : `${state.players.find((p) => p.id === state.winner)?.nickname} won`}
        </p>
      )}

      <div className="flex flex-col gap-4 px-2 md:flex-row md:justify-center">
        <div className="mx-auto w-full max-w-[340px]">
          <div className="mb-1 text-center text-xs font-bold">You</div>
          <div className="grid gap-1">
            {Array.from({ length: maxGuesses }).map((_, r) => {
              const isCurrent = r === myGuesses.length && !over;
              return (
                <div
                  key={r}
                  className="grid gap-1"
                  style={{ gridTemplateColumns: `repeat(${length}, 1fr)` }}
                >
                  {Array.from({ length }).map((_, c) => {
                    const cell = myRows[r]?.[c];
                    const letter = cell?.letter ?? (isCurrent ? current[c] : "");
                    return (
                      <div
                        key={c}
                        className="tile aspect-square text-lg"
                        data-state={cell?.state}
                        data-filled={letter ? "true" : undefined}
                      >
                        {letter ?? ""}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {opponents.length > 0 && (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:content-start">
            {opponents.map((p) => (
              <div key={p.id} className="w-28">
                <OpponentBoard
                  player={p}
                  length={length}
                  maxGuesses={maxGuesses}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-auto">
        <Keyboard
          keyStates={keyStates}
          onKey={type}
          onEnter={submit}
          onDelete={remove}
          enterLabel={t.game.enter}
        />
      </div>
    </div>
  );
}
