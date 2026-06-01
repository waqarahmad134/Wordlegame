import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/terms");
}

export default function TermsPage() {
  return (
    <article className="mx-auto w-full max-w-2xl space-y-4 p-6 leading-relaxed">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p>
        Wordle Game is a free word puzzle you can play in your browser. By using
        the site you agree to these terms.
      </p>
      <h2 className="text-xl font-bold">Use of the site</h2>
      <p>
        You may play the games here for personal, non-commercial enjoyment. The
        site is provided as is, without warranties of any kind, and may change
        or become unavailable at any time.
      </p>
      <h2 className="text-xl font-bold">Intellectual property</h2>
      <p>
        This is a fan-made project created for educational purposes. It is not
        affiliated with, endorsed by, or connected to the original Wordle or its
        owners. Trademarks belong to their respective holders.
      </p>
      <h2 className="text-xl font-bold">Liability</h2>
      <p>
        We are not responsible for any loss or damage arising from the use of
        this site. Play and enjoy at your own discretion.
      </p>
    </article>
  );
}
