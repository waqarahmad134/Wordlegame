import type { Metadata } from "next";
import { Dordle } from "@/components/games/Dordle";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/dordle");
}

export default async function DordlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Dordle />
      <GameArticle slug="dordle" locale={locale} />
    </>
  );
}
