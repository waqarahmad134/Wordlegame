import type { Metadata } from "next";
import { Game } from "@/components/game/Game";
import { maxGuessesForLength } from "@/lib/config";
import { pageMetadata } from "@/lib/seo-content";
import { homeJsonLd } from "@/lib/jsonld";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd(locale)) }}
      />
      <Game
        mode="daily"
        length={length}
        maxGuesses={maxGuessesForLength(length)}
        title="Wordle"
      />
    </>
  );
}
