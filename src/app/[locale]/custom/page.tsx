import type { Metadata } from "next";
import { CustomBuilder } from "@/components/game/CustomBuilder";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/custom");
}

export default function CustomPage() {
  return <CustomBuilder />;
}
