"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";
import { todayKey } from "@/lib/wordle/daily";

const DAYS = 30;

export function ArchiveList() {
  const { locale } = useI18n();
  const today = new Date();
  const items = Array.from({ length: DAYS }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    return todayKey(d);
  });

  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-2 text-2xl font-bold">Wordle Archive</h1>
      <p className="mb-4 text-sm text-[var(--muted)]">
        Replay any of the last {DAYS} daily puzzles.
      </p>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {items.map((date, i) => (
          <li key={date}>
            <Link
              href={`/${locale}/archive/${date}`}
              className="block rounded border border-[var(--border)] px-3 py-2 text-center text-sm hover:bg-[var(--border)]"
            >
              {date}
              {i === 0 && " (Today)"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
