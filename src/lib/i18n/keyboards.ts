// Per-locale alphabets (for input validation) and on-screen keyboard layouts.
// Locales not listed here use the default English QWERTY / a-z alphabet.

const EN_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export const KEYBOARD_LAYOUTS: Record<string, string[]> = {
  // Latin a-z locales (accents are normalized away in their word data).
  en: EN_ROWS,
  "en-gb": EN_ROWS,
  es: EN_ROWS,
  fr: EN_ROWS,
  de: EN_ROWS,
  it: EN_ROWS,
  nl: EN_ROWS,
  pt: EN_ROWS,
  id: EN_ROWS,
  // Russian ЙЦУКЕН layout (ё merged into е).
  ru: ["йцукенгшщзхъ", "фывапролджэ", "ячсмитьбю"],
  // Polish 32-letter alphabet (no q/v/x), grouped alphabetically.
  pl: ["aąbcćdeęfg", "hijklłmnńo", "óprsśtuwyz", "źż"],
  // Swedish keyboard (a-z + å ä ö).
  sv: ["qwertyuiopå", "asdfghjklöä", "zxcvbnm"],
  // Turkish 29-letter alphabet (no q/w/x), grouped alphabetically.
  tr: ["abcçdefgğh", "ıijklmnoöp", "rsştuüvyz"],
};

export const ALPHABETS: Record<string, string> = Object.fromEntries(
  Object.entries(KEYBOARD_LAYOUTS).map(([locale, rows]) => [
    locale,
    rows.join(""),
  ]),
);

export function getKeyboardLayout(locale: string): string[] {
  return KEYBOARD_LAYOUTS[locale.toLowerCase()] ?? EN_ROWS;
}

export function getAlphabet(locale: string): Set<string> {
  const letters = ALPHABETS[locale.toLowerCase()] ?? ALPHABETS.en;
  return new Set([...letters]);
}

/** True when a typed key is a single letter in the locale's alphabet. */
export function isLetterKey(locale: string, key: string): boolean {
  if ([...key].length !== 1) return false;
  return getAlphabet(locale).has(key.toLowerCase());
}
