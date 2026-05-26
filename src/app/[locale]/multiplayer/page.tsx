import type { Metadata } from "next";
import { MultiplayerLobby } from "@/components/games/MultiplayerLobby";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/multiplayer");
}

export default function MultiplayerPage() {
  return <MultiplayerLobby />;
}
