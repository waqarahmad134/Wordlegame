import { notFound } from "next/navigation";
import { Game } from "@/components/game/Game";
import { maxGuessesForLength } from "@/lib/config";

export default async function ArchiveDatePage({
  params,
}: {
  params: Promise<{ locale: string; date: string }>;
}) {
  const { date } = await params;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) notFound();
  const length = 5;
  return (
    <Game
      mode="daily"
      length={length}
      maxGuesses={maxGuessesForLength(length)}
      dailyKey={date}
      title={`Wordle ${date}`}
    />
  );
}
