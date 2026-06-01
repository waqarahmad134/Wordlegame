import type { Metadata } from "next";
import { buildMetadata } from "./seo";

interface Copy {
  title: string;
  description: string;
}

/** SEO copy per route path (after the locale segment). */
export const SEO_COPY: Record<string, Copy> = {
  "": {
    title: "Wordle - Daily Word Puzzle Game",
    description:
      "Play the daily Wordle online for free. Guess the hidden 5-letter word in 6 tries with color-coded clues. New puzzle every day.",
  },
  "/unlimited": {
    title: "Wordle Unlimited - Play Without Limits",
    description:
      "Play unlimited Wordle puzzles with no daily limit. A fresh random word every game, as many times as you like.",
  },
  "/custom": {
    title: "Custom Wordle - Make Your Own Word",
    description:
      "Create a custom Wordle with your own secret word and share a link to challenge your friends.",
  },
  "/multiplayer": {
    title: "Multiplayer Wordle - Play With Friends",
    description:
      "Play Wordle multiplayer in real time. Create or join a room with a code and race your friends to guess the word first.",
  },
  "/sedecordle": {
    title: "Sedecordle - 16 Wordles at Once",
    description:
      "Solve 16 Wordle puzzles simultaneously in 21 guesses. The ultimate word-guessing challenge.",
  },
  "/dordle": {
    title: "Dordle - Solve 2 Wordles at Once",
    description:
      "Play Dordle and solve two Wordle puzzles at the same time in 7 guesses. Every letter you type lands on both boards.",
  },
  "/quordle": {
    title: "Quordle - Solve 4 Wordles at Once",
    description:
      "Play Quordle and solve four Wordle puzzles in parallel in 9 guesses. A four-board word challenge.",
  },
  "/octordle": {
    title: "Octordle - Solve 8 Wordles at Once",
    description:
      "Play Octordle and solve eight Wordle puzzles in parallel in 13 guesses. An eight-board word challenge.",
  },
  "/spellbee": {
    title: "SpellBee - Make Words From 7 Letters",
    description:
      "Make as many words as you can from the seven puzzle letters. Every word must include the centre letter. Find the pangram for a bonus.",
  },
  "/connect": {
    title: "Connect - Group the Words",
    description:
      "Find groups of four words that share a hidden connection. A daily word association puzzle.",
  },
  "/squares": {
    title: "Squares - 4x4 Word Finder",
    description:
      "Connect adjacent letters in a 4x4 grid to find as many words as you can and score points.",
  },
  "/solver": {
    title: "Wordle Solver & Helper",
    description:
      "Free Wordle solver. Enter your green, yellow and gray clues to instantly find every possible answer.",
  },
  "/archive": {
    title: "Wordle Archive - Play Past Puzzles",
    description:
      "Replay past daily Wordle puzzles from the archive. Catch up on the ones you missed.",
  },
  "/about": {
    title: "About & How to Play Wordle",
    description:
      "Learn how to play Wordle, the rules, the color clues, and all the game modes available on Wordle Game.",
  },
  "/privacy": {
    title: "Privacy Policy - Wordle Game",
    description:
      "How Wordle Game handles your data. Game progress and settings are stored locally in your browser.",
  },
  "/terms": {
    title: "Terms of Use - Wordle Game",
    description:
      "The terms of use for Wordle Game, a free fan-made word puzzle site.",
  },
};

export function pageMetadata(locale: string, path: string): Metadata {
  const copy = SEO_COPY[path] ?? SEO_COPY[""];
  return buildMetadata({ locale, path, ...copy });
}
