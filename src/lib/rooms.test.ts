import { describe, expect, it } from "vitest";
import {
  __rooms,
  createRoom,
  getState,
  joinRoom,
  submitGuess,
} from "./rooms";

describe("multiplayer rooms", () => {
  it("creates a room with a 5-char code", async () => {
    const code = await createRoom("en", 5);
    expect(code).toMatch(/^[A-Z0-9]{5}$/);
    expect(getState(code)?.length).toBe(5);
  });

  it("lets players join and tracks them", async () => {
    const code = await createRoom("en", 5);
    const pid = joinRoom(code, "Alice");
    expect(pid).toBeTruthy();
    const state = getState(code);
    expect(state?.players[0].nickname).toBe("Alice");
  });

  it("rejects invalid guesses and scores valid ones", async () => {
    const code = await createRoom("en", 5);
    const pid = joinRoom(code, "Bob")!;
    const bad = await submitGuess(code, pid, "zzzzz");
    expect(bad.ok).toBe(false);

    const good = await submitGuess(code, pid, "crane");
    expect(good.ok).toBe(true);
    const state = getState(code);
    expect(state?.players[0].patterns[0]).toHaveLength(5);
  });

  it("marks the solver as the winner", async () => {
    const code = await createRoom("en", 5);
    const pid = joinRoom(code, "Cara")!;
    // Reach into the store to learn the secret word for the test.
    const room = __rooms.get(code)!;
    const result = await submitGuess(code, pid, room.word);
    expect(result.solved).toBe(true);
    expect(getState(code)?.winner).toBe(pid);
  });

  it("returns an error for unknown rooms/players", async () => {
    expect(getState("ZZZZZ")).toBeNull();
    const r = await submitGuess("ZZZZZ", "nobody", "crane");
    expect(r.ok).toBe(false);
  });
});
