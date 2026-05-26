import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Game } from "@/components/game/Game";
import { maxGuessesForLength } from "@/lib/config";
import { decodeCustomWord } from "@/lib/share";
import { clampLength } from "@/lib/words";

export const metadata: Metadata = {
  title: "Custom Wordle Challenge",
  description: "Someone challenged you to a custom Wordle. Can you guess the word?",
  robots: { index: false, follow: true },
};

export default async function PlayCustomPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const word = decodeCustomWord(id);
  if (!word || !/^[a-z]+$/.test(word)) notFound();
  const length = clampLength(word.length);

  return (
    <Game
      mode="custom"
      length={length}
      maxGuesses={maxGuessesForLength(length)}
      solution={word}
      persistKey={`wg:game:custom:${id}`}
      title="Custom Wordle"
    />
  );
}
