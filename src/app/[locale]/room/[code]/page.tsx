import { MultiplayerRoom } from "@/components/games/MultiplayerRoom";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ locale: string; code: string }>;
}) {
  const { code } = await params;
  return <MultiplayerRoom code={code.toUpperCase()} />;
}
