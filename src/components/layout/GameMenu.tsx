"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LENGTHS } from "@/lib/config";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function GameMenu({ onNavigate }: { onNavigate: () => void }) {
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;

  const links: { href: string; label: string }[] = [
    { href: p(""), label: t.nav.dailyWordle },
    { href: p("/unlimited"), label: t.nav.unlimited },
    { href: p("/custom"), label: t.nav.custom },
    { href: p("/multiplayer"), label: t.nav.multiplayer },
    { href: p("/sedecordle"), label: t.nav.sedecordle },
    { href: p("/connect"), label: t.nav.connect },
    { href: p("/squares"), label: t.nav.squares },
    { href: p("/solver"), label: t.nav.solver },
    { href: p("/archive"), label: t.nav.archive },
    { href: p("/about"), label: t.nav.about },
  ];

  return (
    <nav
      className="absolute left-0 top-full z-40 max-h-[80vh] w-72 overflow-y-auto border-r border-b border-[var(--border)] p-4 shadow-lg"
      style={{ background: "var(--modal-bg)" }}
    >
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              onClick={onNavigate}
              className="block rounded px-3 py-2 font-medium hover:bg-[var(--border)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-3 border-t border-[var(--border)] pt-3">
        <div className="mb-2 px-3 text-xs font-bold uppercase text-[var(--muted)]">
          {t.nav.wordLengths}
        </div>
        <div className="flex flex-wrap gap-2 px-3">
          {LENGTHS.map((n) => (
            <Link
              key={n}
              href={p(`/${n}-letters`)}
              onClick={onNavigate}
              className="rounded border border-[var(--border)] px-2 py-1 text-sm hover:bg-[var(--border)]"
            >
              {n}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-3 border-t border-[var(--border)] px-3 pt-3">
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
