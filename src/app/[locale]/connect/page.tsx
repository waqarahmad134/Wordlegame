import type { Metadata } from "next";
import { Connect } from "@/components/games/Connect";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/connect");
}

export default function ConnectPage() {
  return <Connect />;
}
