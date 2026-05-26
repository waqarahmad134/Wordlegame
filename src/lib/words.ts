import { MIN_LENGTH, MAX_LENGTH } from "./config";

export type WordList = { answers: string[]; valid: Set<string> };

const cache = new Map<string, Promise<WordList>>();

/** Locales that ship their own word data. Others fall back to English. */
const SUPPORTED_DATA_LOCALES = new Set([
  "en",
  "es",
  "fr",
  "de",
  "it",
  "nl",
  "pt",
  "id",
]);

function dataLocale(locale: string): string {
  const base = locale.toLowerCase().split("-")[0];
  return SUPPORTED_DATA_LOCALES.has(base) ? base : "en";
}

export function clampLength(length: number): number {
  return Math.min(MAX_LENGTH, Math.max(MIN_LENGTH, length));
}

/**
 * Load the answer + valid-guess lists for a locale/length. Word data is
 * code-split per length so only the active board's dictionary is fetched.
 */
export function loadWordList(locale: string, length: number): Promise<WordList> {
  const len = clampLength(length);
  const loc = dataLocale(locale);
  const key = `${loc}:${len}`;
  if (!cache.has(key)) {
    cache.set(
      key,
      Promise.all([
        import(`@/data/words/${loc}/${len}.answers.json`),
        import(`@/data/words/${loc}/${len}.valid.json`),
      ]).then(([answers, valid]) => {
        const validArr: string[] = (valid.default ?? valid) as string[];
        const answersArr: string[] = (answers.default ?? answers) as string[];
        const validSet = new Set(validArr);
        // Every answer must be an accepted guess.
        for (const a of answersArr) validSet.add(a);
        return { answers: answersArr, valid: validSet };
      }),
    );
  }
  return cache.get(key)!;
}

export async function isValidGuess(
  locale: string,
  length: number,
  guess: string,
): Promise<boolean> {
  const { valid } = await loadWordList(locale, length);
  return valid.has(guess.toLowerCase());
}
