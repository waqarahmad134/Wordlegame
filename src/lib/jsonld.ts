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
