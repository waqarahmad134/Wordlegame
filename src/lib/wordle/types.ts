export type LetterState = "correct" | "present" | "absent" | "empty" | "tbd";

export interface ScoredLetter {
  letter: string;
  state: LetterState;
}

export type GameStatus = "playing" | "won" | "lost";

export type GameMode = "daily" | "unlimited" | "custom" | "multiplayer";

export interface GameConfig {
  length: number;
  maxGuesses: number;
  mode: GameMode;
  locale: string;
  /** The solution word (lowercase). May be absent on the client for daily until revealed. */
  solution: string;
}
