import type { Metadata } from "next";
import { ArchiveList } from "@/components/games/ArchiveList";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/archive");
}

export default function ArchivePage() {
  return <ArchiveList />;
}
