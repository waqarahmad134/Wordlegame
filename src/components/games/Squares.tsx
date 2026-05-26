"use client";

import { useCallback, useEffect, useState } from "react";
import { isValidGuess } from "@/lib/words";
import { useI18n } from "@/components/i18n/I18nProvider";

const SIZE = 4;
// Letter frequency bag for reasonable, vowel-rich boards.
const BAG =
  "aaaaaaaaaeeeeeeeeeeeeiiiiiiiiioooooooonnnnnnrrrrrrttttttllllssssuuuddddgggbbccmmppffhhvvwwyykjxqz";

function randomGrid(): string[] {
  return Array.from({ length: SIZE * SIZE }, () =>
    BAG[Math.floor(Math.random() * BAG.length)].toUpperCase(),
  );
}

function adjacent(a: number, b: number): boolean {
  const ra = Math.floor(a / SIZE),
    ca = a % SIZE;
  const rb = Math.floor(b / SIZE),
    cb = b % SIZE;
  return Math.abs(ra - rb) <= 1 && Math.abs(ca - cb) <= 1 && a !== b;
}

export function Squares() {
  const { locale } = useI18n();
  const [grid, setGrid] = useState<string[]>([]);
  const [path, setPath] = useState<number[]>([]);
  const [found, setFound] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const newBoard = useCallback(() => {
    setGrid(randomGrid());
    setPath([]);
    setFound([]);
    setScore(0);
    setMessage(null);
  }, []);

  useEffect(() => {
    newBoard();
  }, [newBoard]);

  const word = path.map((i) => grid[i]).join("");

  const clickCell = (i: number) => {
    if (path.includes(i)) {
      // Tapping the last letter removes it; tapping earlier resets to there.
      const idx = path.indexOf(i);
      setPath(path.slice(0, idx + 1));
      return;
    }
    if (path.length === 0 || adjacent(path[path.length - 1], i)) {
      setPath([...path, i]);
    }
  };

  const flash = (m: string) => {
    setMessage(m);
    setTimeout(() => setMessage(null), 1000);
  };

  const submit = async () => {
    const w = word.toLowerCase();
    if (w.length < 4) return flash("Min 4 letters");
    if (found.includes(w)) {
      setPath([]);
      return flash("Already found");
    }
    const ok = await isValidGuess(locale, w.length, w);
    if (!ok) {
      setPath([]);
      return flash("Not a word");
    }
    setFound((f) => [w, ...f]);
    setScore((s) => s + w.length * (w.length - 3)); // longer words score more
    setPath([]);
    flash(`+${w.length * (w.length - 3)}`);
  };

  return (
    <div className="mx-auto w-full max-w-md p-4">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Squares</h1>
        <button
          onClick={newBoard}
          className="rounded border border-[var(--border)] px-3 py-1 text-sm font-bold"
        >
          New Board
        </button>
      </div>
      <p className="mb-3 text-sm text-[var(--muted)]">
        Connect adjacent letters to build words (4+ letters).
      </p>

      <div className="grid grid-cols-4 gap-2">
        {grid.map((ch, i) => {
          const sel = path.includes(i);
          const order = path.indexOf(i);
          return (
            <button
              key={i}
              onClick={() => clickCell(i)}
              className="relative flex aspect-square items-center justify-center rounded text-2xl font-bold"
              style={{
                background: sel ? "var(--correct)" : "var(--border)",
                color: sel ? "#fff" : "var(--fg)",
              }}
            >
              {ch}
              {sel && (
                <span className="absolute right-1 top-0.5 text-[10px] opacity-80">
                  {order + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 rounded border border-[var(--border)] px-3 py-2 text-center text-lg font-bold uppercase tracking-widest">
          {word || "—"}
        </div>
        <button
          onClick={submit}
          className="rounded bg-[var(--correct)] px-4 py-2 font-bold text-white"
        >
          Enter
        </button>
        <button
          onClick={() => setPath([])}
          className="rounded border border-[var(--border)] px-3 py-2 font-bold"
        >
          Clear
        </button>
      </div>
      {message && (
        <p className="mt-2 text-center text-sm font-bold">{message}</p>
      )}

      <div className="mt-4">
        <div className="mb-1 font-bold">Score: {score}</div>
        <div className="flex flex-wrap gap-1.5">
          {found.map((w) => (
            <span
              key={w}
              className="rounded border border-[var(--border)] px-2 py-0.5 text-sm uppercase"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
