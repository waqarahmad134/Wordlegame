export const MIN_LENGTH = 4;
export const MAX_LENGTH = 11;
export const DEFAULT_LENGTH = 5;

export const LENGTHS = Array.from(
  { length: MAX_LENGTH - MIN_LENGTH + 1 },
  (_, i) => MIN_LENGTH + i,
);

/** Number of guesses allowed for a given word length. */
export function maxGuessesForLength(length: number): number {
  return Math.max(6, length);
}

export const SITE_NAME = "Wordle Game";
export const SITE_URL = "https://wordlegame.example";
