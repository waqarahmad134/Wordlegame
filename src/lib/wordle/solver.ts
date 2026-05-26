export interface SolverClues {
  length: number;
  /** Known correct positions; "_" (or any non-letter) means unknown. */
  pattern: string;
  /** Letters known to be present (yellow). */
  present: string;
  /** Letters known to be absent (gray). */
  absent: string;
}

/**
 * Filter a word list by Wordle clues. A letter listed as absent is only
 * excluded when it isn't also a known (green/present) letter, so repeated
 * letters are handled correctly.
 */
export function filterWords(
  words: Iterable<string>,
  clues: SolverClues,
  limit = 1000,
): string[] {
  const { length } = clues;
  const pattern = clues.pattern
    .toLowerCase()
    .replace(/[^a-z_]/g, "_")
    .padEnd(length, "_")
    .slice(0, length);
  const present = clues.present.toLowerCase().replace(/[^a-z]/g, "").split("");
  const absent = new Set(
    clues.absent.toLowerCase().replace(/[^a-z]/g, "").split(""),
  );
  const known = new Set([...pattern.replace(/_/g, ""), ...present]);

  const matches: string[] = [];
  for (const w of words) {
    if (w.length !== length) continue;
    let ok = true;
    for (let i = 0; i < length; i++) {
      if (pattern[i] !== "_" && w[i] !== pattern[i]) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    if (!present.every((l) => w.includes(l))) continue;
    if ([...w].some((l) => absent.has(l) && !known.has(l))) continue;
    matches.push(w);
    if (matches.length >= limit) break;
  }
  return matches;
}
