import type { Metadata } from "next";
import { Sedecordle } from "@/components/games/Sedecordle";

export const metadata: Metadata = {
  title: "Sedecordle",
  description: "Solve 16 Wordle puzzles at the same time in 21 guesses.",
};

export default function SedecordlePage() {
  return <Sedecordle />;
}
