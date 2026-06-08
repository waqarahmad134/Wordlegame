import type { Metadata } from "next";
import { SpellBee } from "@/components/games/SpellBee";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/spellbee");
}

export default async function SpellBeePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <SpellBee />
      <GameArticle slug="spellbee" locale={locale} />
    </>
  );
}
