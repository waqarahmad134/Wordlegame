import { SITE_NAME, SITE_URL } from "./config";

/** Structured data for the home page: WebSite + the game as a WebApplication. */
export function homeJsonLd(locale: string) {
  const url = `${SITE_URL}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: locale,
      },
      {
        "@type": "WebApplication",
        name: SITE_NAME,
        url,
        applicationCategory: "GameApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Play Wordle online for free: daily puzzles, unlimited mode, word lengths 4-11, custom games, multiplayer and more.",
      },
    ],
  };
}

/** FAQPage structured data — feed it the FAQ rendered on the page. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/**
 * Full structured-data graph for a single game/article page: the game as a
 * WebApplication with an AggregateRating, a BreadcrumbList back to the home
 * puzzle, and an FAQPage built from the on-page questions. Feed it the same
 * data that is rendered so the markup and schema stay in sync.
 */
export function gamePageJsonLd(
  locale: string,
  game: {
    name: string;
    path: string;
    description: string;
    ratingValue: number;
    ratingCount: number;
    faq: { q: string; a: string }[];
  },
) {
  const url = `${SITE_URL}/${locale}${game.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: game.name,
        url,
        applicationCategory: "GameApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: game.description,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: game.ratingValue,
          ratingCount: game.ratingCount,
          bestRating: 5,
          worstRating: 1,
        },
      },
      breadcrumbJsonLd(locale, [
        { name: "Wordle", path: "" },
        { name: game.name, path: game.path },
      ]),
      faqJsonLd(game.faq),
    ],
  };
}

/** Breadcrumb structured data for sub-pages. */
export function breadcrumbJsonLd(
  locale: string,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}/${locale}${t.path}`,
    })),
  };
}
