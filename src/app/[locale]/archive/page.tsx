import type { Metadata } from "next";
import { ArchiveList } from "@/components/games/ArchiveList";
import { GameArticle } from "@/components/games/GameArticle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/archive");
}

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ArchiveList />
      <GameArticle slug="archive" locale={locale} />
    </>
  );
}
