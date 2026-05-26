import { describe, expect, it } from "vitest";
import { checkHardMode, deriveKeyStates, isWin, scoreGuess } from "./engine";

const states = (g: string, s: string) => scoreGuess(g, s).map((c) => c.state);

describe("scoreGuess", () => {
  it("marks all correct for an exact match", () => {
    expect(states("crane", "crane")).toEqual([
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ]);
  });

  it("marks present and absent letters", () => {
    // solution "abcde", guess "exxxa": e present, a present, rest absent
    expect(states("eaxxx", "abcde")).toEqual([
      "present",
      "present",
      "absent",
      "absent",
      "absent",
    ]);
  });

  it("handles duplicate letters in the guess (only one match available)", () => {
    // solution has a single 'e'; guess has two 'e's
    const r = states("speed", "abide");
    // s:absent p:absent e:present e:absent(no more e) d:present
    expect(r).toEqual(["absent", "absent", "present", "absent", "present"]);
  });

  it("prefers green over yellow for duplicates", () => {
    // solution "geese", guess "eexxe"
    const r = scoreGuess("eexxe", "geese");
    expect(r[4].state).toBe("correct"); // last e is exact
  });
});

describe("isWin", () => {
  it("is true only when every tile is correct", () => {
    expect(isWin(scoreGuess("crane", "crane"))).toBe(true);
    expect(isWin(scoreGuess("crash", "crane"))).toBe(false);
  });
});

describe("deriveKeyStates", () => {
  it("keeps the best state per key", () => {
    const rows = [scoreGuess("eaxxx", "abcde")];
    const map = deriveKeyStates(rows);
    expect(map.a).toBe("present");
    expect(map.x).toBe("absent");
  });
});

describe("checkHardMode", () => {
  const prev = [scoreGuess("crane", "cyber")]; // c correct, r & e present
  it("rejects guesses that drop a known correct letter", () => {
    const violation = checkHardMode("plumb", prev);
    expect(violation).not.toBeNull();
  });
  it("accepts guesses that satisfy all clues", () => {
    // c must stay first; r and e (present) must be reused
    const violation = checkHardMode("crews", prev);
    expect(violation).toBeNull();
  });
});
