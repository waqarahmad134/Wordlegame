import { loadWordList } from "../words";

const EPOCH = Date.UTC(2024, 0, 1); // reference start date for daily numbering
const DAY_MS = 24 * 60 * 60 * 1000;

/** Local calendar date as YYYY-MM-DD. */
export function todayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Day index since the reference epoch for a YYYY-MM-DD key. */
export function dayNumber(dateKey: string): number {
  const [y, m, d] = dateKey.split("-").map(Number);
  const ts = Date.UTC(y, m - 1, d);
  return Math.floor((ts - EPOCH) / DAY_MS);
}

/**
 * Deterministically select the daily word for a locale/length/date. The same
 * inputs always yield the same word, so every player sees one shared puzzle.
 */
export async function getDailyWord(
  locale: string,
  length: number,
  dateKey: string,
): Promise<{ word: string; dayNumber: number }> {
  const { answers } = await loadWordList(locale, length);
  const n = dayNumber(dateKey);
  // Mix the day number with length so different boards don't share an index.
  const idx = Math.abs((n * 2654435761 + length * 40503) >>> 0) % answers.length;
  return { word: answers[idx], dayNumber: n };
}

/** Pick a pseudo-random answer (for unlimited mode). */
export async function getRandomWord(
  locale: string,
  length: number,
): Promise<string> {
  const { answers } = await loadWordList(locale, length);
  return answers[Math.floor(Math.random() * answers.length)];
}
