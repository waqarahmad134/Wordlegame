import type { MetadataRoute } from "next";
import { LOCALE_CODES } from "@/lib/i18n/locales";
import { LENGTHS, SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/unlimited",
    "/custom",
    "/multiplayer",
    "/sedecordle",
    "/connect",
    "/squares",
    "/solver",
    "/archive",
    "/about",
    ...LENGTHS.map((n) => `/${n}-letters`),
  ];
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of LOCALE_CODES) {
    for (const path of paths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
