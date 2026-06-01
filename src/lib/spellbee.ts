/**
 * SpellBee puzzle generation.
 *
 * Rules:
 * - The puzzle has 7 distinct letters; one is the centre letter.
 * - A valid word is at least 4 letters long, uses only the 7 letters
 *   (letters may repeat in the word), and must include the centre letter.
 * - A pangram is a word that uses ALL seven letters at least once.
 * - Scoring: 4-letter words = 1 point; longer words = (length) points;
 *   pangrams add a +7 bonus.
 */

import { loadWordList } from "./words";
import { MIN_LENGTH, MAX_LENGTH } from "./config";

export interface SpellBeePuzzle {
  letters: string[];
  center: string;
  /** Sorted by length then alphabetically. */
  solutions: string[];
  solutionSet: Set<string>;
  maxScore: number;
  pangramCount: number;
}

export function isPangram(word: string, letters: string[]): boolean {
  for (const l of letters) {
    if (word.indexOf(l) === -1) return false;
  }
  return true;
}

export function scoreWord(word: string, letters: string[]): number {
  const base = word.length === 4 ? 1 : word.length;
  return base + (isPangram(word, letters) ? 7 : 0);
}

/** Generate a new random SpellBee puzzle for the given locale. */
export async function generatePuzzle(locale: string): Promise<SpellBeePuzzle> {
  // Seed: a 7-letter answer that already has 7 distinct letters guarantees
  // the puzzle has at least one pangram solution.
  const seedList = await loadWordList(locale, 7);
  const seeds = seedList.answers.filter((w) => new Set(w).size === 7);
  if (seeds.length === 0) {
    throw new Error("No pangram seed found for SpellBee");
  }
  const seed = seeds[Math.floor(Math.random() * seeds.length)];
  const letters = Array.from(new Set(seed)).sort();
  const lettersSet = new Set(letters);
  const center = letters[Math.floor(Math.random() * letters.length)];

  // Enumerate valid words from every length bucket.
  const lengths = Array.from(
    { length: MAX_LENGTH - MIN_LENGTH + 1 },
    (_, i) => MIN_LENGTH + i,
  ).filter((n) => n >= 4);
  const lists = await Promise.all(lengths.map((n) => loadWordList(locale, n)));

  const found = new Set<string>();
  for (const list of lists) {
    for (const w of list.valid) {
      if (w.length < 4) continue;
      let ok = true;
      let hasCenter = false;
      for (let i = 0; i < w.length; i++) {
        const ch = w[i];
        if (!lettersSet.has(ch)) {
          ok = false;
          break;
        }
        if (ch === center) hasCenter = true;
      }
      if (ok && hasCenter) found.add(w);
    }
  }

  const solutions = Array.from(found).sort(
    (a, b) => a.length - b.length || a.localeCompare(b),
  );

  let maxScore = 0;
  let pangramCount = 0;
  for (const w of solutions) {
    maxScore += scoreWord(w, letters);
    if (isPangram(w, letters)) pangramCount++;
  }

  return {
    letters,
    center,
    solutions,
    solutionSet: found,
    maxScore,
    pangramCount,
  };
}
