import type { Metadata } from "next";
import { Sedecordle } from "@/components/games/Sedecordle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/sedecordle");
}

export default function SedecordlePage() {
  return <Sedecordle />;
}
