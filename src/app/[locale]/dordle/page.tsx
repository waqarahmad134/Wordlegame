import type { Metadata } from "next";
import { Dordle } from "@/components/games/Dordle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/dordle");
}

export default function DordlePage() {
  return <Dordle />;
}
