import type { Metadata } from "next";
import { MultiplayerLobby } from "@/components/games/MultiplayerLobby";

export const metadata: Metadata = {
  title: "Multiplayer Wordle",
  description: "Play Wordle multiplayer. Create or join a room and race friends.",
};

export default function MultiplayerPage() {
  return <MultiplayerLobby />;
}
