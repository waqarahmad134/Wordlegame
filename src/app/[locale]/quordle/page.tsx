import type { Metadata } from "next";
import { Quordle } from "@/components/games/Quordle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/quordle");
}

export default function QuordlePage() {
  return <Quordle />;
}
