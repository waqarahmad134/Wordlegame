import type { Metadata } from "next";
import { Solver } from "@/components/game/Solver";

export const metadata: Metadata = {
  title: "Wordle Solver",
  description:
    "Wordle solver and helper. Enter your green, yellow and gray clues to find all possible answers.",
};

export default function SolverPage() {
  return <Solver />;
}
