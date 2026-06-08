import type { Metadata } from "next";
import { MultiplayerLobby } from "@/components/games/MultiplayerLobby";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/multiplayer");
}

export default async function MultiplayerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <MultiplayerLobby />
      <GameArticle slug="multiplayer" locale={locale} />
    </>
  );
}
