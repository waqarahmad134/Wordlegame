import type { Metadata } from "next";
import { SpellBee } from "@/components/games/SpellBee";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/spellbee");
}

export default function SpellBeePage() {
  return <SpellBee />;
}
