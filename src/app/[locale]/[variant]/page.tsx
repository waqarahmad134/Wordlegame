import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VariantGame } from "@/components/game/VariantGame";
import { LENGTHS } from "@/lib/config";

function parseLength(variant: string): number | null {
  const m = /^(\d+)-letters$/.exec(variant);
  if (!m) return null;
  const n = Number(m[1]);
  return LENGTHS.includes(n) ? n : null;
}

export function generateStaticParams() {
  return LENGTHS.map((n) => ({ variant: `${n}-letters` }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant } = await params;
  const length = parseLength(variant);
  if (!length) return {};
  return {
    title: `${length} Letter Wordle`,
    description: `Play the ${length}-letter Wordle puzzle. Daily and unlimited modes.`,
  };
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ locale: string; variant: string }>;
}) {
  const { variant } = await params;
  const length = parseLength(variant);
  if (!length) notFound();
  return <VariantGame length={length} />;
}
