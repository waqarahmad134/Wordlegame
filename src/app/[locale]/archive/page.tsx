import type { Metadata } from "next";
import { ArchiveList } from "@/components/games/ArchiveList";

export const metadata: Metadata = {
  title: "Wordle Archive",
  description: "Play past daily Wordle puzzles from the archive.",
};

export default function ArchivePage() {
  return <ArchiveList />;
}
