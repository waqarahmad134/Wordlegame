import type { Dictionary } from "./messages/types";
import { en } from "./messages/en";
import { enGb } from "./messages/en-gb";
import { es } from "./messages/es";
import { fr } from "./messages/fr";
import { de } from "./messages/de";
import { pt } from "./messages/pt";
import { it } from "./messages/it";
import { nl } from "./messages/nl";
import { ru } from "./messages/ru";
import { pl } from "./messages/pl";
import { sv } from "./messages/sv";
import { tr } from "./messages/tr";
import { id } from "./messages/id";

export type { Dictionary };

const REGISTRY: Record<string, Dictionary> = {
  en,
  "en-gb": enGb,
  es,
  fr,
  de,
  pt,
  it,
  nl,
  ru,
  pl,
  sv,
  tr,
  id,
};

/** Resolve the full dictionary for a locale, falling back to English. */
export function getDictionary(locale: string): Dictionary {
  return REGISTRY[locale.toLowerCase()] ?? en;
}
