import type { Metadata } from "next";
import { Octordle } from "@/components/games/Octordle";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/octordle");
}

export default async function OctordlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Octordle />
      <GameArticle slug="octordle" locale={locale} />
    </>
  );
}
