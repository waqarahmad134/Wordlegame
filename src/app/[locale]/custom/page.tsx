import type { Metadata } from "next";
import { CustomBuilder } from "@/components/game/CustomBuilder";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/custom");
}

export default async function CustomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <CustomBuilder />
      <GameArticle slug="custom" locale={locale} />
    </>
  );
}
