import type { Metadata } from "next";
import { Octordle } from "@/components/games/Octordle";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/octordle");
}

export default function OctordlePage() {
  return <Octordle />;
}
