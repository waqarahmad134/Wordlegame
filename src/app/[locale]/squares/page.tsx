import type { Metadata } from "next";
import { Squares } from "@/components/games/Squares";

export const metadata: Metadata = {
  title: "Squares",
  description: "Find as many words as you can in a 4x4 letter grid.",
};

export default function SquaresPage() {
  return <Squares />;
}
