/**
 * Long-form homepage content registry. Types live in `./home-content/types`,
 * per-locale data lives in sibling files under `./home-content/`. Unknown
 * locales fall back to their base language, then to English.
 */

import type { HomeContent } from "./home-content/types";
import { en } from "./home-content/en";
import { es } from "./home-content/es";
import { fr } from "./home-content/fr";
import { de } from "./home-content/de";
import { pt } from "./home-content/pt";
import { it } from "./home-content/it";
import { nl } from "./home-content/nl";
import { ru } from "./home-content/ru";
import { pl } from "./home-content/pl";
import { sv } from "./home-content/sv";
import { tr } from "./home-content/tr";
import { id } from "./home-content/id";

export type {
  Advantage,
  FaqItem,
  HomeContent,
  HowToStep,
  IconKey,
  RelatedGame,
  ThumbKey,
  Tip,
} from "./home-content/types";

const REGISTRY: Record<string, HomeContent> = {
  en,
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

/** Resolve homepage content for a locale, falling back to English. */
export function getHomeContent(locale: string): HomeContent {
  const lower = locale.toLowerCase();
  const base = lower.split("-")[0];
  return REGISTRY[lower] ?? REGISTRY[base] ?? en;
}
