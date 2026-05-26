import type { Metadata } from "next";
import { Solver } from "@/components/game/Solver";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/solver");
}

export default function SolverPage() {
  return <Solver />;
}
