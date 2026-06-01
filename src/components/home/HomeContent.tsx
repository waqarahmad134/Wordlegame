import Link from "next/link";
import { getHomeContent, type IconKey } from "@/lib/home-content";
import { LOCALES } from "@/lib/i18n/locales";
import { GameThumbnail } from "./GameThumbnail";

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

function AdvantageIcon({ name }: { name: IconKey }) {
  const common =
    "h-8 w-8 shrink-0 stroke-[var(--correct)]" as const;
  switch (name) {
    case "book":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4z" />
          <path d="M4 17a3 3 0 0 1 3-3h12" />
        </svg>
      );
    case "lightning":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case "puzzle":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 4a2 2 0 0 1 4 0v2h4v4a2 2 0 0 0 0 4v4h-4v-2a2 2 0 0 1-4 0v2H5v-4a2 2 0 0 0 0-4V6h4V4z" />
        </svg>
      );
    case "brain":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3V4z" />
          <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3V4z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "share":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="m8.5 10.5 7-3M8.5 13.5l7 3" />
        </svg>
      );
  }
}

export function HomeContent({ locale }: { locale: string }) {
  const c = getHomeContent(locale);
  const p = (path: string) => `/${locale}${path}`;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10 text-[var(--fg)]">
      <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">{c.h1}</h1>
      <p className="text-base leading-relaxed text-[var(--muted)]">{c.intro}</p>

      {/* How to play */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{c.howToTitle}</h2>
        <ol className="space-y-5">
          {c.howToSteps.map((step, i) => (
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

      {/* More games */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{c.moreGamesTitle}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {c.moreGames.map((g) => (
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
                <span className="mt-1 block text-xs text-[var(--muted)]">
                  {g.blurb}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Language selector */}
      <section className="mt-12">
        <h2 className="mb-3 text-2xl font-bold">{c.languageTitle}</h2>
        <p className="mb-5 text-[var(--muted)]">{c.languageIntro}</p>
        <ul className="flex flex-wrap gap-2">
          {LOCALES.map((l) => {
            const active = l.code === locale;
            return (
              <li key={l.code}>
                <Link
                  href={`/${l.code}`}
                  aria-current={active ? "page" : undefined}
                  className={
                    "inline-block rounded border px-3 py-1.5 text-sm transition-colors " +
                    (active
                      ? "border-[var(--correct)] bg-[var(--correct)] font-semibold text-white"
                      : "border-[var(--border)] hover:bg-[var(--border)]")
                  }
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Tips */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{c.tipsTitle}</h2>
        <ol className="space-y-5">
          {c.tips.map((tip, i) => (
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

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{c.faqTitle}</h2>
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {c.faq.map((item, i) => (
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

      {/* Advantages */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">{c.advantagesTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.advantages.map((a, i) => (
            <div key={i} className="flex gap-3 rounded-lg border border-[var(--border)] p-4">
              <AdvantageIcon name={a.icon} />
              <div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rating */}
      <section className="mt-12 flex flex-col items-center rounded-lg border border-[var(--border)] py-6">
        <h2 className="mb-3 text-xl font-bold">{c.ratingTitle}</h2>
        <Stars value={c.ratingValue} />
        <p className="mt-2 text-sm text-[var(--muted)]">
          {c.ratingValue.toFixed(1)} / 5 · {c.ratingCount.toLocaleString()} votes
        </p>
      </section>
    </div>
  );
}
