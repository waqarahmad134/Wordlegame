import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Game } from "@/components/game/Game";
import { maxGuessesForLength } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; date: string }>;
}): Promise<Metadata> {
  const { locale, date } = await params;
  return buildMetadata({
    locale,
    path: `/archive/${date}`,
    title: `Wordle ${date} - Archive`,
    description: `Replay the daily Wordle puzzle from ${date}.`,
  });
}

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
