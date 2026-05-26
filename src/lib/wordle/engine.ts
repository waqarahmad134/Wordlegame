import type { LetterState, ScoredLetter } from "./types";

/**
 * Score a guess against the solution using standard Wordle rules.
 * Handles duplicate letters correctly: greens are assigned first, then
 * yellows are limited by the remaining count of each letter in the solution.
 */
export function scoreGuess(guess: string, solution: string): ScoredLetter[] {
  const g = guess.toLowerCase();
  const s = solution.toLowerCase();
  const result: LetterState[] = new Array(g.length).fill("absent");

  // Count of each letter still available to match as "present".
  const remaining: Record<string, number> = {};
  for (const ch of s) remaining[ch] = (remaining[ch] ?? 0) + 1;

  // First pass: exact matches (green).
  for (let i = 0; i < g.length; i++) {
    if (g[i] === s[i]) {
      result[i] = "correct";
      remaining[g[i]]--;
    }
  }

  // Second pass: present-but-misplaced (yellow), bounded by remaining counts.
  for (let i = 0; i < g.length; i++) {
    if (result[i] === "correct") continue;
    const ch = g[i];
    if ((remaining[ch] ?? 0) > 0) {
      result[i] = "present";
      remaining[ch]--;
    }
  }

  return g.split("").map((letter, i) => ({ letter, state: result[i] }));
}

/**
 * Merge per-letter states into a keyboard map, keeping the best-known state
 * for each key (correct > present > absent).
 */
export function deriveKeyStates(
  rows: ScoredLetter[][],
): Record<string, LetterState> {
  const rank: Record<string, number> = { correct: 3, present: 2, absent: 1 };
  const map: Record<string, LetterState> = {};
  for (const row of rows) {
    for (const { letter, state } of row) {
      if (state === "empty" || state === "tbd") continue;
      const current = map[letter];
      if (!current || (rank[state] ?? 0) > (rank[current] ?? 0)) {
        map[letter] = state;
      }
    }
  }
  return map;
}

export interface HardModeViolation {
  message: string;
}

/**
 * Validate a guess against hard-mode constraints derived from prior scored rows:
 * every revealed correct letter must stay in place and every present letter
 * must be reused. Returns null when the guess is valid.
 */
export function checkHardMode(
  guess: string,
  previousRows: ScoredLetter[][],
): HardModeViolation | null {
  const g = guess.toLowerCase();
  const ordinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
  };

  for (const row of previousRows) {
    // Correct positions must be preserved.
    for (let i = 0; i < row.length; i++) {
      if (row[i].state === "correct" && g[i] !== row[i].letter) {
        return {
          message: `${ordinal(i + 1)} letter must be ${row[i].letter.toUpperCase()}`,
        };
      }
    }
    // Present letters must appear somewhere in the guess.
    const needed: Record<string, number> = {};
    for (const cell of row) {
      if (cell.state === "present") {
        needed[cell.letter] = (needed[cell.letter] ?? 0) + 1;
      }
    }
    for (const [letter, count] of Object.entries(needed)) {
      const have = g.split("").filter((c) => c === letter).length;
      if (have < count) {
        return { message: `Guess must contain ${letter.toUpperCase()}` };
      }
    }
  }
  return null;
}

export function isWin(scored: ScoredLetter[]): boolean {
  return scored.length > 0 && scored.every((c) => c.state === "correct");
}
