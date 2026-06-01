"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Keyboard } from "@/components/game/Keyboard";
import { Toast } from "@/components/game/Toast";
import { scoreGuess } from "@/lib/wordle/engine";
import { getRandomWord } from "@/lib/wordle/daily";
import { isValidGuess, loadWordList } from "@/lib/words";
import { getKeyboardLayout, isLetterKey } from "@/lib/i18n/keyboards";

export interface MultiWordleProps {
  boards: number;
  maxGuesses: number;
  length?: number;
  /** Tailwind grid-cols-* classes, sized for the board count. */
  gridClass?: string;
}

function MiniBoard({
  solution,
  guesses,
  current,
  solvedAt,
  length,
  maxGuesses,
}: {
  solution: string;
  guesses: string[];
  current: string;
  solvedAt: number;
  length: number;
  maxGuesses: number;
}) {
  const solved = solvedAt !== -1;
  const lastRow = solved ? solvedAt : guesses.length - 1;
  const currentRowIndex = solved ? -1 : guesses.length;

  return (
    <div className={solved ? "opacity-60" : ""}>
      <div className="grid gap-0.5">
        {Array.from({ length: maxGuesses }).map((_, r) => {
          const scored = r <= lastRow ? scoreGuess(guesses[r], solution) : null;
          const isCurrent = r === currentRowIndex;
          return (
            <div
              key={r}
              className="grid gap-0.5"
              style={{ gridTemplateColumns: `repeat(${length}, 1fr)` }}
            >
              {Array.from({ length }).map((_, c) => {
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

export function MultiWordle({
  boards,
  maxGuesses,
  length = 5,
  gridClass = "grid-cols-2 sm:grid-cols-4",
}: MultiWordleProps) {
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
    await loadWordList(locale, length);
    const picked = new Set<string>();
    while (picked.size < boards) {
      picked.add(await getRandomWord(locale, length));
    }
    setSolutions([...picked]);
    setGuesses([]);
    setCurrent("");
    setStatus("playing");
  }, [locale, boards, length]);

  useEffect(() => {
    newGame();
  }, [newGame]);

  const submit = useCallback(async () => {
    if (status !== "playing") return;
    if (current.length < length) {
      showToast(t.game.notEnoughLetters);
      return;
    }
    const valid = await isValidGuess(locale, length, current);
    if (!valid) {
      showToast(t.game.notInWordList);
      return;
    }
    const next = [...guesses, current];
    setGuesses(next);
    setCurrent("");

    const allSolved = solutions.every((s) => next.includes(s));
    if (allSolved) setStatus("won");
    else if (next.length >= maxGuesses) setStatus("lost");
  }, [
    status,
    current,
    guesses,
    solutions,
    locale,
    length,
    maxGuesses,
    showToast,
    t,
  ]);

  const type = useCallback(
    (ch: string) => {
      if (status !== "playing") return;
      setCurrent((c) => (c.length < length ? c + ch.toLowerCase() : c));
    },
    [status, length],
  );
  const remove = useCallback(() => setCurrent((c) => c.slice(0, -1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") submit();
      else if (e.key === "Backspace") remove();
      else if (isLetterKey(locale, e.key)) type(e.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submit, remove, type, locale]);

  const solvedCount = solutions.filter((s) => guesses.includes(s)).length;

  return (
    <div className="flex flex-1 flex-col">
      <Toast message={toast} />
      <div className="flex items-center justify-between px-3 py-2 text-sm">
        <span className="font-bold">
          {solvedCount}/{boards} solved · {guesses.length}/{maxGuesses}
        </span>
        <button
          onClick={newGame}
          className="rounded border border-[var(--border)] px-3 py-1 font-bold"
        >
          {t.game.newGame}
        </button>
      </div>

      {status !== "loading" && (
        <div className={`grid gap-2 px-2 ${gridClass}`}>
          {solutions.map((sol, i) => (
            <MiniBoard
              key={i}
              solution={sol}
              guesses={guesses}
              current={current}
              solvedAt={guesses.indexOf(sol)}
              length={length}
              maxGuesses={maxGuesses}
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
        rows={getKeyboardLayout(locale)}
      />
    </div>
  );
}
