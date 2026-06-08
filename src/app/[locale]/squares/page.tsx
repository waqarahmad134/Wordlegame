import type { Metadata } from "next";
import { Squares } from "@/components/games/Squares";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/squares");
}

export default async function SquaresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Squares />
      <GameArticle slug="squares" locale={locale} />
    </>
  );
}
