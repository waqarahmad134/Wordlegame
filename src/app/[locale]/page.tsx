import type { Metadata } from "next";
import { Game } from "@/components/game/Game";
import { HomeContent } from "@/components/home/HomeContent";
import { maxGuessesForLength } from "@/lib/config";
import { pageMetadata } from "@/lib/seo-content";
import { homeJsonLd, faqJsonLd } from "@/lib/jsonld";
import { getHomeContent } from "@/lib/home-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const length = 5;
  const content = getHomeContent(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd(locale)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(content.faq)) }}
      />
      <Game
        mode="daily"
        length={length}
        maxGuesses={maxGuessesForLength(length)}
        title="Wordle"
      />
      <HomeContent locale={locale} />
    </>
  );
}
