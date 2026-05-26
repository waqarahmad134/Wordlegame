"use client";

import { useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { encodeCustomWord } from "@/lib/share";
import { clampLength } from "@/lib/words";
import { isValidGuess } from "@/lib/words";
import { MAX_LENGTH, MIN_LENGTH } from "@/lib/config";
import { getAlphabet } from "@/lib/i18n/keyboards";

export function CustomBuilder() {
  const { locale, t } = useI18n();
  const [word, setWord] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const alphabet = getAlphabet(locale);
  const sanitize = (s: string) =>
    [...s.toLowerCase()].filter((ch) => alphabet.has(ch)).join("");

  const create = async () => {
    setError(null);
    setCopied(false);
    const w = sanitize(word.trim());
    if (w.length < MIN_LENGTH || w.length > MAX_LENGTH) {
      setError(t.custom.invalid);
      return;
    }
    // Best-effort dictionary check; allow proper nouns if length is valid.
    const ok = await isValidGuess(locale, clampLength(w.length), w);
    if (!ok && w.length >= MIN_LENGTH) {
      // Not in dictionary: still allow, but warn lightly.
    }
    const token = encodeCustomWord(w);
    const url = `${window.location.origin}/${locale}/play/${token}`;
    setLink(url);
  };

  const copy = async () => {
    if (!link) return;
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto w-full max-w-md p-6">
      <h1 className="mb-2 text-2xl font-bold">{t.custom.title}</h1>
      <p className="mb-4 text-sm text-[var(--muted)]">{t.custom.intro}</p>

      <div className="flex gap-2">
        <input
          value={word}
          onChange={(e) => setWord(sanitize(e.target.value))}
          placeholder={t.custom.placeholder}
          maxLength={MAX_LENGTH}
          className="flex-1 rounded border border-[var(--border)] bg-transparent px-3 py-2 lowercase"
        />
        <button
          onClick={create}
          className="rounded bg-[var(--correct)] px-4 py-2 font-bold text-white"
        >
          {t.custom.create}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      {link && (
        <div className="mt-6">
          <p className="mb-2 text-sm">{t.custom.shareLink}</p>
          <div className="flex gap-2">
            <input
              readOnly
              value={link}
              className="flex-1 rounded border border-[var(--border)] bg-transparent px-3 py-2 text-sm"
              onFocus={(e) => e.currentTarget.select()}
            />
            <button
              onClick={copy}
              className="rounded border border-[var(--border)] px-4 py-2 font-bold"
            >
              {copied ? t.game.copied : t.custom.copyLink}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
