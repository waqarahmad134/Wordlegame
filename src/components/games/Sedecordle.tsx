"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Keyboard } from "@/components/game/Keyboard";
import { Toast } from "@/components/game/Toast";
import { scoreGuess } from "@/lib/wordle/engine";
import type { ScoredLetter } from "@/lib/wordle/types";
import { getRandomWord } from "@/lib/wordle/daily";
import { isValidGuess, loadWordList } from "@/lib/words";

const BOARDS = 16;
const LENGTH = 5;
const MAX_GUESSES = 21;

function MiniBoard({
  solution,
  guesses,
  current,
  solvedAt,
}: {
  solution: string;
  guesses: string[];
  current: string;
  solvedAt: number;
}) {
  const solved = solvedAt !== -1;
  // Submitted guesses up to (and including) the solving guess are scored.
  const lastRow = solved ? solvedAt : guesses.length - 1;
  const currentRowIndex = solved ? -1 : guesses.length;

  return (
    <div className={solved ? "opacity-60" : ""}>
      <div className="grid gap-0.5">
        {Array.from({ length: MAX_GUESSES }).map((_, r) => {
          const scored = r <= lastRow ? scoreGuess(guesses[r], solution) : null;
          const isCurrent = r === currentRowIndex;
          return (
            <div
              key={r}
              className="grid gap-0.5"
              style={{ gridTemplateColumns: `repeat(${LENGTH}, 1fr)` }}
            >
              {Array.from({ length: LENGTH }).map((_, c) => {
                const letter = scored
                  ? scored[c].letter
                  : isCurrent
                    ? (current[c] ?? "")
                    : "";
                return (
                  <div
                    key={c}
                    className="tile aspect-square text-[10px]"
                    data-state={scored?.[c]?.state}
                    data-filled={letter ? "true" : undefined}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Sedecordle() {
  const { locale, t } = useI18n();
  const [solutions, setSolutions] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "playing" | "won" | "lost">(
    "loading",
  );
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((m: string) => {
    setToast(m);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1500);
  }, []);

  const newGame = useCallback(async () => {
    setStatus("loading");
    await loadWordList(locale, LENGTH);
    const picked = new Set<string>();
    while (picked.size < BOARDS) {
      picked.add(await getRandomWord(locale, LENGTH));
    }
    setSolutions([...picked]);
    setGuesses([]);
    setCurrent("");
    setStatus("playing");
  }, [locale]);

  useEffect(() => {
    newGame();
  }, [newGame]);

  const solvedAt = (sol: string): number => {
    const idx = guesses.indexOf(sol);
    return idx;
  };

  const submit = useCallback(async () => {
    if (status !== "playing") return;
    if (current.length < LENGTH) {
      showToast(t.game.notEnoughLetters);
      return;
    }
    const valid = await isValidGuess(locale, LENGTH, current);
    if (!valid) {
      showToast(t.game.notInWordList);
      return;
    }
    const next = [...guesses, current];
    setGuesses(next);
    setCurrent("");

    const allSolved = solutions.every((s) => next.includes(s));
    if (allSolved) setStatus("won");
    else if (next.length >= MAX_GUESSES) setStatus("lost");
  }, [status, current, guesses, solutions, locale, showToast, t]);

  const type = useCallback(
    (ch: string) => {
      if (status !== "playing") return;
      setCurrent((c) => (c.length < LENGTH ? c + ch.toLowerCase() : c));
    },
    [status],
  );
  const remove = useCallback(() => setCurrent((c) => c.slice(0, -1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") submit();
      else if (e.key === "Backspace") remove();
      else if (/^[a-zA-Z]$/.test(e.key)) type(e.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submit, remove, type]);

  const solvedCount = solutions.filter((s) => guesses.includes(s)).length;

  return (
    <div className="flex flex-1 flex-col">
      <Toast message={toast} />
      <div className="flex items-center justify-between px-3 py-2 text-sm">
        <span className="font-bold">
          {solvedCount}/{BOARDS} solved · {guesses.length}/{MAX_GUESSES}
        </span>
        <button
          onClick={newGame}
          className="rounded border border-[var(--border)] px-3 py-1 font-bold"
        >
          {t.game.newGame}
        </button>
      </div>

      {status !== "loading" && (
        <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
          {solutions.map((sol, i) => (
            <MiniBoard
              key={i}
              solution={sol}
              guesses={guesses}
              current={current}
              solvedAt={solvedAt(sol)}
            />
          ))}
        </div>
      )}

      {(status === "won" || status === "lost") && (
        <p className="py-2 text-center text-lg font-bold">
          {status === "won" ? t.game.win : t.game.lose}
        </p>
      )}

      <Keyboard
        keyStates={{}}
        onKey={type}
        onEnter={submit}
        onDelete={remove}
        enterLabel={t.game.enter}
      />
    </div>
  );
}
