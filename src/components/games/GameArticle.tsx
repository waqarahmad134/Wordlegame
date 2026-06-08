import Link from "next/link";
import { GameThumbnail } from "@/components/home/GameThumbnail";
import { getGameArticle } from "@/lib/game-content";
import type { Paragraph } from "@/lib/game-content/types";
import { gamePageJsonLd } from "@/lib/jsonld";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative text-2xl leading-none text-[var(--border)]">
            ★
            <span
              className="absolute inset-0 overflow-hidden text-[var(--present)]"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
}

/** Render a paragraph made of plain strings and inline internal links. */
function Para({ parts, locale }: { parts: Paragraph; locale: string }) {
  return (
    <p className="mt-4 text-[var(--muted)] leading-relaxed first:mt-0">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <Link
            key={i}
            href={`/${locale}${part.href}`}
            className="font-medium text-[var(--correct)] underline decoration-[var(--border)] underline-offset-2 hover:decoration-[var(--correct)]"
          >
            {part.text}
          </Link>
        ),
      )}
    </p>
  );
}

export function GameArticle({ slug, locale }: { slug: string; locale: string }) {
  const a = getGameArticle(slug);
  if (!a) return null;
  const p = (path: string) => `/${locale}${path}`;

  const jsonLd = gamePageJsonLd(locale, {
    name: a.name,
    path: a.path,
    description: a.appDescription,
    ratingValue: a.ratingValue,
    ratingCount: a.ratingCount,
    faq: a.faq,
  });

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <article className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10 text-[var(--fg)]">
      {/* Hero image — descriptive alt + caption help image search ranking */}
      <figure className="mb-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto aspect-[2/1] w-full max-w-md">
          <GameThumbnail kind={a.hero.thumb} className="h-full w-full p-6" />
        </div>
        <figcaption className="border-t border-[var(--border)] px-4 py-2 text-center text-sm text-[var(--muted)]">
          {a.hero.caption}
        </figcaption>
      </figure>

      {/* Intro */}
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{a.introTitle}</h2>
      {a.intro.map((para, i) => (
        <Para key={i} parts={para} locale={locale} />
      ))}

      {/* Body sections */}
      {a.sections.map((s, i) => (
        <section key={i} className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">{s.heading}</h2>
          {s.body.map((para, j) => (
            <Para key={j} parts={para} locale={locale} />
          ))}
          {s.list && (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--muted)]">
              {s.list.map((li, k) => (
                <li key={k}>{li}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* How to play */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{a.howToTitle}</h2>
        <ol className="space-y-5">
          {a.howToSteps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--correct)] font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Strategy / tips */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{a.strategyTitle}</h2>
        <ol className="space-y-5">
          {a.strategy.map((tip, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--correct)] font-bold text-[var(--correct)]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{tip.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{tip.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Related games — image cards with exact-keyword internal links */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{a.relatedTitle}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {a.related.map((g) => (
            <Link
              key={g.path}
              href={p(g.path)}
              className="group flex flex-col overflow-hidden rounded-lg border border-[var(--border)] transition-colors hover:border-[var(--correct)]"
            >
              <div className="aspect-[5/3] w-full bg-[var(--bg)]">
                <GameThumbnail
                  kind={g.thumb}
                  className="h-full w-full p-3 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="border-t border-[var(--border)] p-3">
                <span className="font-semibold">{g.name}</span>
                <span className="mt-1 block text-xs text-[var(--muted)]">{g.blurb}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{a.faqTitle}</h2>
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {a.faq.map((item, i) => (
            <details key={i} className="group py-3">
              <summary className="flex cursor-pointer items-center justify-between marker:content-['']">
                <h3 className="text-base font-medium">{item.q}</h3>
                <span className="ml-3 text-[var(--muted)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-[var(--muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Rating */}
      <section className="mt-12 flex flex-col items-center rounded-lg border border-[var(--border)] py-6">
        <h2 className="mb-3 text-xl font-bold">Rate this game</h2>
        <Stars value={a.ratingValue} />
        <p className="mt-2 text-sm text-[var(--muted)]">
          {a.ratingValue.toFixed(1)} / 5 · {a.ratingCount.toLocaleString()} votes
        </p>
      </section>
    </article>
    </>
  );
}
