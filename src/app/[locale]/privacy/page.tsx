import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/privacy");
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-2xl space-y-4 p-6 leading-relaxed">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p>
        Wordle Game is designed to respect your privacy. You do not need an
        account to play, and we do not ask you to provide any personal
        information.
      </p>
      <h2 className="text-xl font-bold">What we store</h2>
      <p>
        Your game progress, statistics, and settings (such as dark mode and hard
        mode) are saved only in your browser using local storage. This data
        never leaves your device and is not sent to any server.
      </p>
      <h2 className="text-xl font-bold">Cookies and analytics</h2>
      <p>
        Single-player modes work entirely in your browser. If analytics or
        advertising are added in the future, this page will be updated to
        describe what is collected and how to opt out.
      </p>
      <h2 className="text-xl font-bold">Clearing your data</h2>
      <p>
        You can remove everything this site has stored at any time by clearing
        your browser&apos;s site data for this domain.
      </p>
      <p className="text-sm text-[var(--muted)]">
        This site is a fan-made clone for educational purposes and is not
        affiliated with the original Wordle.
      </p>
    </article>
  );
}
