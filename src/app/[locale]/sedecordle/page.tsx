import type { Metadata } from "next";
import { Sedecordle } from "@/components/games/Sedecordle";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/sedecordle");
}

export default async function SedecordlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Sedecordle />
      <GameArticle slug="sedecordle" locale={locale} />
    </>
  );
}
