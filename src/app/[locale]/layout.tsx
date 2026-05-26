import { notFound } from "next/navigation";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { AppShell } from "@/components/layout/AppShell";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LOCALE_CODES, isLocale } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <I18nProvider locale={locale} dictionary={dictionary}>
      <AppShell>{children}</AppShell>
    </I18nProvider>
  );
}
