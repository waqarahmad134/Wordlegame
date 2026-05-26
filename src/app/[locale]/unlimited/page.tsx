import type { Metadata } from "next";
import { Game } from "@/components/game/Game";
import { maxGuessesForLength } from "@/lib/config";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/unlimited");
}

export default async function UnlimitedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const length = 5;
  return (
    <Game
      mode="unlimited"
      length={length}
      maxGuesses={maxGuessesForLength(length)}
      title="Wordle Unlimited"
      showNewGame
    />
  );
}
