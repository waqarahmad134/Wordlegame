import type { ScoredLetter } from "./wordle/types";

const EMOJI: Record<string, string> = {
  correct: "🟩",
  present: "🟨",
  absent: "⬜",
  // Colorblind / high-contrast variants
  correctCB: "🟧",
  presentCB: "🟦",
};

export interface ShareOptions {
  title: string;
  guesses: number | "X";
  maxGuesses: number;
  rows: ScoredLetter[][];
  colorblind?: boolean;
  hardMode?: boolean;
}

/** Build the spoiler-free emoji grid players copy to share results. */
export function buildShareText({
  title,
  guesses,
  maxGuesses,
  rows,
  colorblind = false,
  hardMode = false,
}: ShareOptions): string {
  const grid = rows
    .map((row) =>
      row
        .map((cell) => {
          if (cell.state === "correct")
            return colorblind ? EMOJI.correctCB : EMOJI.correct;
          if (cell.state === "present")
            return colorblind ? EMOJI.presentCB : EMOJI.present;
          return EMOJI.absent;
        })
        .join(""),
    )
    .join("\n");
  const header = `${title} ${guesses}/${maxGuesses}${hardMode ? "*" : ""}`;
  return `${header}\n\n${grid}`;
}

/** Encode a custom word into a URL-safe token (no DB required). */
export function encodeCustomWord(word: string): string {
  const json = JSON.stringify({ w: word.toLowerCase() });
  if (typeof btoa !== "undefined") {
    return btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }
  return Buffer.from(json, "utf8").toString("base64url");
}

export function decodeCustomWord(token: string): string | null {
  try {
    const b64 = token.replace(/-/g, "+").replace(/_/g, "/");
    const json =
      typeof atob !== "undefined"
        ? decodeURIComponent(escape(atob(b64)))
        : Buffer.from(token, "base64url").toString("utf8");
    const parsed = JSON.parse(json) as { w?: string };
    return typeof parsed.w === "string" ? parsed.w : null;
  } catch {
    return null;
  }
}
