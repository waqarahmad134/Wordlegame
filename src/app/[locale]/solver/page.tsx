import type { Metadata } from "next";
import { Solver } from "@/components/game/Solver";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/solver");
}

export default async function SolverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Solver />
      <GameArticle slug="solver" locale={locale} />
    </>
  );
}
