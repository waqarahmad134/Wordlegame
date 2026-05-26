"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  checkHardMode,
  deriveKeyStates,
  isWin,
  scoreGuess,
} from "@/lib/wordle/engine";
import type { GameMode, LetterState, ScoredLetter } from "@/lib/wordle/types";
import { getDailyWord, getRandomWord, todayKey } from "@/lib/wordle/daily";
import { isValidGuess, loadWordList } from "@/lib/words";

export interface UseWordleOptions {
  mode: GameMode;
  length: number;
  locale: string;
  maxGuesses: number;
  /** Provided for custom games; otherwise resolved internally. */
  solution?: string;
  /** Stable key used for persistence + daily streak tracking. */
  persistKey?: string;
  dailyKey?: string | null;
}

export interface WordleState {
  solution: string | null;
  rows: ScoredLetter[][];
  current: string;
  status: "loading" | "playing" | "won" | "lost";
  keyStates: Record<string, LetterState>;
  toast: string | null;
  shakeRow: boolean;
  lastRevealedRow: number;
  guessCount: number;
}

interface Persisted {
  solution: string;
  guesses: string[];
  status: "playing" | "won" | "lost";
}

export interface WordleApi extends WordleState {
  type: (ch: string) => void;
  remove: () => void;
  submit: () => void;
  reset: () => void; // new random game (unlimited)
  onResult?: (won: boolean, guesses: number) => void;
}

export function useWordleGame(opts: UseWordleOptions) {
  const { mode, length, locale, maxGuesses, persistKey } = opts;
  const [solution, setSolution] = useState<string | null>(null);
  const [rows, setRows] = useState<ScoredLetter[][]>([]);
  const [current, setCurrent] = useState("");
  const [status, setStatus] = useState<WordleState["status"]>("loading");
  const [toast, setToast] = useState<string | null>(null);
  const [shakeRow, setShakeRow] = useState(false);
  const [lastRevealedRow, setLastRevealedRow] = useState(-1);
  const resultCb = useRef<((won: boolean, guesses: number) => void) | null>(
    null,
  );
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1500);
  }, []);

  const persist = useCallback(
    (sol: string, guesses: string[], st: Persisted["status"]) => {
      if (!persistKey || typeof window === "undefined") return;
      const data: Persisted = { solution: sol, guesses, status: st };
      window.localStorage.setItem(persistKey, JSON.stringify(data));
    },
    [persistKey],
  );

  // Resolve the solution + restore any saved progress.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await loadWordList(locale, length); // warm validation dictionary
      let sol = opts.solution?.toLowerCase() ?? null;

      // Restore persisted game if it matches the current solution.
      if (persistKey && typeof window !== "undefined") {
        const raw = window.localStorage.getItem(persistKey);
        if (raw) {
          try {
            const saved = JSON.parse(raw) as Persisted;
            if (!sol || sol === saved.solution) {
              if (cancelled) return;
              const scored = saved.guesses.map((g) =>
                scoreGuess(g, saved.solution),
              );
              setSolution(saved.solution);
              setRows(scored);
              setStatus(saved.status);
              setLastRevealedRow(scored.length - 1);
              return;
            }
          } catch {
            /* ignore corrupt state */
          }
        }
      }

      if (!sol) {
        if (mode === "daily") {
          const { word } = await getDailyWord(
            locale,
            length,
            opts.dailyKey ?? todayKey(),
          );
          sol = word;
        } else {
          sol = await getRandomWord(locale, length);
        }
      }
      if (cancelled) return;
      setSolution(sol);
      setStatus("playing");
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, length, locale, opts.solution, persistKey, opts.dailyKey]);

  const type = useCallback(
    (ch: string) => {
      if (status !== "playing") return;
      setCurrent((c) => (c.length < length ? c + ch.toLowerCase() : c));
    },
    [status, length],
  );

  const remove = useCallback(() => {
    if (status !== "playing") return;
    setCurrent((c) => c.slice(0, -1));
  }, [status]);

  const submit = useCallback(() => {
    if (status !== "playing" || !solution) return;
    if (current.length < length) {
      showToast("Not enough letters");
      setShakeRow(true);
      setTimeout(() => setShakeRow(false), 600);
      return;
    }
    (async () => {
      const valid = await isValidGuess(locale, length, current);
      if (!valid) {
        showToast("Not in word list");
        setShakeRow(true);
        setTimeout(() => setShakeRow(false), 600);
        return;
      }
      // Hard mode enforcement is opt-in via settings; read from storage.
      const hard = readHardMode();
      if (hard) {
        const violation = checkHardMode(current, rows);
        if (violation) {
          showToast(violation.message);
          setShakeRow(true);
          setTimeout(() => setShakeRow(false), 600);
          return;
        }
      }

      const scored = scoreGuess(current, solution);
      const nextRows = [...rows, scored];
      const guesses = nextRows.map((r) => r.map((c) => c.letter).join(""));
      setRows(nextRows);
      setLastRevealedRow(nextRows.length - 1);
      setCurrent("");

      const won = isWin(scored);
      const lost = !won && nextRows.length >= maxGuesses;
      const nextStatus = won ? "won" : lost ? "lost" : "playing";
      setStatus(nextStatus);
      persist(solution, guesses, nextStatus);

      if (won || lost) {
        // Wait for the flip animation before announcing the result.
        setTimeout(() => {
          resultCb.current?.(won, nextRows.length);
        }, 1600);
      }
    })();
  }, [
    status,
    solution,
    current,
    length,
    locale,
    rows,
    maxGuesses,
    persist,
    showToast,
  ]);

  const reset = useCallback(() => {
    if (persistKey && typeof window !== "undefined") {
      window.localStorage.removeItem(persistKey);
    }
    setRows([]);
    setCurrent("");
    setLastRevealedRow(-1);
    setStatus("loading");
    (async () => {
      const sol = await getRandomWord(locale, length);
      setSolution(sol);
      setStatus("playing");
    })();
  }, [locale, length, persistKey]);

  // Physical keyboard input.
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

  const keyStates = deriveKeyStates(rows);

  const api: WordleApi = {
    solution,
    rows,
    current,
    status,
    keyStates,
    toast,
    shakeRow,
    lastRevealedRow,
    guessCount: rows.length,
    type,
    remove,
    submit,
    reset,
  };

  return {
    ...api,
    setOnResult: (cb: (won: boolean, guesses: number) => void) => {
      resultCb.current = cb;
    },
  };
}

function readHardMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const s = JSON.parse(window.localStorage.getItem("wg:settings") || "{}");
    return !!s.hardMode;
  } catch {
    return false;
  }
}
