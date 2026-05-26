import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./config";
import { DEFAULT_LOCALE, LOCALE_CODES } from "./i18n/locales";

export interface SeoInput {
  locale: string;
  /** Path after the locale segment, e.g. "/unlimited" or "" for home. */
  path?: string;
  title: string;
  description: string;
}

/** Map a Wordle locale code to a BCP-47 language tag for hreflang/og:locale. */
const BCP47: Record<string, string> = {
  en: "en-US",
  "en-gb": "en-GB",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  pt: "pt-PT",
  it: "it-IT",
  nl: "nl-NL",
  ru: "ru-RU",
  pl: "pl-PL",
  sv: "sv-SE",
  tr: "tr-TR",
  id: "id-ID",
};

export function bcp47(locale: string): string {
  return BCP47[locale] ?? "en-US";
}

/**
 * Build a complete metadata block for a page: title, description, canonical +
 * hreflang alternates, Open Graph, and Twitter card. The OG/Twitter image is
 * supplied by the `opengraph-image` route automatically.
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
}: SeoInput): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;

  // hreflang map: every locale variant of this path, plus x-default.
  const languages: Record<string, string> = {};
  for (const code of LOCALE_CODES) {
    languages[bcp47(code)] = `${SITE_URL}/${code}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/${DEFAULT_LOCALE}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: bcp47(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}
