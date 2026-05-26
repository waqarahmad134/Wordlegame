"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LOCALES, isLocale } from "@/lib/i18n/locales";

export function LocaleSwitcher() {
  const { locale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (next: string) => {
    const segments = pathname.split("/");
    // segments[0] is "" because pathname starts with "/"
    if (isLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
  };

  return (
    <select
      aria-label="Language"
      value={locale}
      onChange={(e) => onChange(e.target.value)}
      className="rounded border border-[var(--border)] bg-transparent px-2 py-1 text-sm"
    >
      {LOCALES.map((l) => (
        <option key={l.code} value={l.code} className="text-black">
          {l.label}
        </option>
      ))}
    </select>
  );
}
