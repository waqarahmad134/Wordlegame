import type { Metadata } from "next";
import { Game } from "@/components/game/Game";
import { maxGuessesForLength } from "@/lib/config";

export const metadata: Metadata = {
  title: "Wordle Unlimited",
  description:
    "Play unlimited Wordle puzzles with no daily limit. A fresh random word every game.",
};

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
