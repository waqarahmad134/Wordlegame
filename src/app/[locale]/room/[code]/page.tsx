import type { Metadata } from "next";
import { MultiplayerRoom } from "@/components/games/MultiplayerRoom";

export const metadata: Metadata = {
  title: "Multiplayer Wordle Room",
  description: "Join a live multiplayer Wordle room and race your friends.",
  robots: { index: false, follow: false },
};

export default async function RoomPage({
  params,
}: {
  params: Promise<{ locale: string; code: string }>;
}) {
  const { code } = await params;
  return <MultiplayerRoom code={code.toUpperCase()} />;
}
