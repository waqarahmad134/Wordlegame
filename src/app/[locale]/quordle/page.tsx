import type { Metadata } from "next";
import { Quordle } from "@/components/games/Quordle";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/quordle");
}

export default async function QuordlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Quordle />
      <GameArticle slug="quordle" locale={locale} />
    </>
  );
}
