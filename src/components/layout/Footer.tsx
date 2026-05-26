"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Footer() {
  const { locale, t } = useI18n();
  const p = (path: string) => `/${locale}${path}`;
  return (
    <footer className="mt-auto border-t border-[var(--border)] px-4 py-6 text-center text-sm text-[var(--muted)]">
      <nav className="mb-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
        <Link href={p("")} className="hover:underline">
          {t.nav.dailyWordle}
        </Link>
        <Link href={p("/unlimited")} className="hover:underline">
          {t.nav.unlimited}
        </Link>
        <Link href={p("/custom")} className="hover:underline">
          {t.nav.custom}
        </Link>
        <Link href={p("/solver")} className="hover:underline">
          {t.nav.solver}
        </Link>
        <Link href={p("/about")} className="hover:underline">
          {t.nav.about}
        </Link>
      </nav>
      <p>© {new Date().getFullYear()} Wordle Game. Inspired by the classic word puzzle.</p>
    </footer>
  );
}
