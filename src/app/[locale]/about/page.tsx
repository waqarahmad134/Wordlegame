import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/about");
}

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-2xl space-y-4 p-6 leading-relaxed">
      <h1 className="text-3xl font-bold">About Wordle Game</h1>
      <p>
        Wordle is a word game where you have six tries to guess a hidden word.
        After each guess, the color of the tiles changes to show how close you
        are to the answer.
      </p>
      <h2 className="text-xl font-bold">How to play</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Type any valid word of the correct length and press Enter.</li>
        <li>
          <b>Green</b> means the letter is correct and in the right spot.
        </li>
        <li>
          <b>Yellow</b> means the letter is in the word but in the wrong spot.
        </li>
        <li>
          <b>Gray</b> means the letter is not in the word.
        </li>
      </ul>
      <h2 className="text-xl font-bold">Game modes</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li><b>Daily</b>: one shared puzzle every day.</li>
        <li><b>Unlimited</b>: play as many random puzzles as you like.</li>
        <li><b>Word Lengths</b>: choose words from 4 to 11 letters.</li>
        <li><b>Custom</b>: create your own word and share it with friends.</li>
        <li><b>Multiplayer</b>: race against friends in a shared room.</li>
        <li><b>Sedecordle, Connect, Squares</b>: fun spin-off word games.</li>
        <li><b>Solver</b>: get help finding possible answers.</li>
      </ul>
      <p className="text-sm text-[var(--muted)]">
        This site is a fan-made clone for educational purposes and is not
        affiliated with the original Wordle.
      </p>
    </article>
  );
}
