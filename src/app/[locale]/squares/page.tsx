import type { Metadata } from "next";
import { Squares } from "@/components/games/Squares";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/squares");
}

export default function SquaresPage() {
  return <Squares />;
}
