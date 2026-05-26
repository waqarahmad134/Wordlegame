"use client";

import { useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LENGTHS, DEFAULT_LENGTH } from "@/lib/config";
import { loadWordList } from "@/lib/words";
import { filterWords } from "@/lib/wordle/solver";

export function Solver() {
  const { locale } = useI18n();
  const [length, setLength] = useState(DEFAULT_LENGTH);
  const [pattern, setPattern] = useState(""); // greens, "_" for unknown
  const [present, setPresent] = useState(""); // yellow letters
  const [absent, setAbsent] = useState(""); // gray letters
  const [results, setResults] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const solve = async () => {
    setLoading(true);
    const { valid } = await loadWordList(locale, length);
    const matches = filterWords(
      valid,
      { length, pattern, present, absent },
      500,
    );
    setResults(matches);
    setLoading(false);
  };

  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-2 text-2xl font-bold">Wordle Solver</h1>
      <p className="mb-4 text-sm text-[var(--muted)]">
        Enter the clues you have and find every possible answer.
      </p>

      <div className="space-y-3">
        <label className="block text-sm">
          Word length
          <select
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="ml-2 rounded border border-[var(--border)] bg-transparent px-2 py-1"
          >
            {LENGTHS.map((n) => (
              <option key={n} value={n} className="text-black">
                {n}
              </option>
            ))}
          </select>
        </label>

        <Field
          label={`Correct positions (green) — use _ for unknown, e.g. "c_a_e"`}
          value={pattern}
          onChange={(v) =>
            setPattern(v.toLowerCase().replace(/[^a-z_]/g, "").slice(0, length))
          }
        />
        <Field
          label="Present letters (yellow)"
          value={present}
          onChange={(v) => setPresent(v.toLowerCase().replace(/[^a-z]/g, ""))}
        />
        <Field
          label="Absent letters (gray)"
          value={absent}
          onChange={(v) => setAbsent(v.toLowerCase().replace(/[^a-z]/g, ""))}
        />

        <button
          onClick={solve}
          className="rounded bg-[var(--correct)] px-5 py-2 font-bold text-white"
        >
          {loading ? "Solving…" : "Find Words"}
        </button>
      </div>

      {results && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-bold">
            {results.length} possible word{results.length === 1 ? "" : "s"}
          </p>
          <div className="flex flex-wrap gap-2">
            {results.map((w) => (
              <span
                key={w}
                className="rounded border border-[var(--border)] px-2 py-1 text-sm uppercase"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border border-[var(--border)] bg-transparent px-3 py-2 lowercase"
      />
    </label>
  );
}
