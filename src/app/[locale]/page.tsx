import { Game } from "@/components/game/Game";
import { maxGuessesForLength } from "@/lib/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const length = 5;
  return (
    <Game
      mode="daily"
      length={length}
      maxGuesses={maxGuessesForLength(length)}
      title="Wordle"
    />
  );
}
