export interface LocaleInfo {
  code: string;
  label: string; // native name shown in the switcher
  dir?: "ltr" | "rtl";
}

/** The full locale set mirrored from wordlegame.org. */
export const LOCALES: LocaleInfo[] = [
  { code: "en", label: "English (US)" },
  { code: "en-gb", label: "English (UK)" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "ru", label: "Русский" },
  { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" },
  { code: "tr", label: "Türkçe" },
  { code: "id", label: "Indonesia" },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);
export const DEFAULT_LOCALE = "en";

export function isLocale(code: string): boolean {
  return LOCALE_CODES.includes(code);
}

export function localeLabel(code: string): string {
  return LOCALES.find((l) => l.code === code)?.label ?? code;
}
