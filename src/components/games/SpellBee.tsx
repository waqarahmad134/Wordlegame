"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Toast } from "@/components/game/Toast";
import {
  generatePuzzle,
  isPangram,
  scoreWord,
  type SpellBeePuzzle,
} from "@/lib/spellbee";

const SIZE = 72;
const HEX_HEIGHT = SIZE * 1.1547; // pointy-top hex aspect
const RADIUS = 78;

function HexButton({
  letter,
  center,
  onClick,
  left,
  top,
}: {
  letter: string;
  center?: boolean;
  onClick: () => void;
  left: number;
  top: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: "absolute",
        left,
        top,
        width: SIZE,
        height: HEX_HEIGHT,
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: center ? "var(--present)" : "var(--key-bg)",
        color: center ? "white" : "var(--fg)",
      }}
      className="flex items-center justify-center text-2xl font-extrabold uppercase transition-transform active:scale-95"
    >
      {letter}
    </button>
  );
}

function Honeycomb({
  center,
  outer,
  onLetter,
}: {
  center: string;
  outer: string[];
  onLetter: (ch: string) => void;
}) {
  const containerSize = 280;
  const cx = containerSize / 2;
  const cy = containerSize / 2;
  const outerPos = [0, 60, 120, 180, 240, 300].map((deg, i) => {
    const rad = (deg * Math.PI) / 180;
    return {
      letter: outer[i] ?? "",
      x: cx + Math.cos(rad) * RADIUS,
      y: cy + Math.sin(rad) * RADIUS,
    };
  });
  return (
    <div
      className="relative"
      style={{ width: containerSize, height: containerSize }}
    >
      {outerPos.map((p, i) => (
        <HexButton
          key={i}
          letter={p.letter}
          onClick={() => onLetter(p.letter)}
          left={p.x - SIZE / 2}
          top={p.y - HEX_HEIGHT / 2}
        />
      ))}
      <HexButton
        letter={center}
        center
        onClick={() => onLetter(center)}
        left={cx - SIZE / 2}
        top={cy - HEX_HEIGHT / 2}
      />
    </div>
  );
}

function rank(percent: number): string {
  if (percent >= 100) return "Queen Bee";
  if (percent >= 70) return "Genius";
  if (percent >= 50) return "Amazing";
  if (percent >= 40) return "Great";
  if (percent >= 25) return "Nice";
  if (percent >= 15) return "Solid";
  if (percent >= 8) return "Good";
  if (percent >= 5) return "Moving Up";
  if (percent >= 2) return "Good Start";
  return "Beginner";
}

export function SpellBee() {
  const { locale, t } = useI18n();
  const [puzzle, setPuzzle] = useState<SpellBeePuzzle | null>(null);
  const [outer, setOuter] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [found, setFound] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((m: string) => {
    setToast(m);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1500);
  }, []);

  const newGame = useCallback(async () => {
    setPuzzle(null);
    setInput("");
    setFound([]);
    setRevealed(false);
    try {
      const p = await generatePuzzle(locale);
      setPuzzle(p);
      setOuter(p.letters.filter((l) => l !== p.center));
    } catch {
      showToast("Could not load puzzle");
    }
  }, [locale, showToast]);

  useEffect(() => {
    newGame();
  }, [newGame]);

  const submit = useCallback(() => {
    if (!puzzle) return;
    const w = input.toLowerCase().trim();
    setInput("");
    if (w.length === 0) return;
    if (w.length < 4) {
      showToast("Too short");
      return;
    }
    if (w.indexOf(puzzle.center) === -1) {
      showToast("Missing centre letter");
      return;
    }
    for (let i = 0; i < w.length; i++) {
      if (!puzzle.letters.includes(w[i])) {
        showToast("Bad letters");
        return;
      }
    }
    if (found.includes(w)) {
      showToast("Already found");
      return;
    }
    if (!puzzle.solutionSet.has(w)) {
      showToast(t.game.notInWordList);
      return;
    }
    const pang = isPangram(w, puzzle.letters);
    setFound((f) => [...f, w]);
    showToast(pang ? "Pangram!" : `+${scoreWord(w, puzzle.letters)}`);
  }, [puzzle, input, found, showToast, t]);

  const type = useCallback(
    (ch: string) => {
      if (!puzzle) return;
      setInput((s) => s + ch);
    },
    [puzzle],
  );
  const backspace = useCallback(() => setInput((s) => s.slice(0, -1)), []);
  const shuffle = useCallback(() => {
    setOuter((arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      } else if (e.key === "Backspace") {
        e.preventDefault();
        backspace();
      } else if (e.key.length === 1) {
        const ch = e.key.toLowerCase();
        if (puzzle?.letters.includes(ch)) {
          e.preventDefault();
          type(ch);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submit, backspace, type, puzzle]);

  const score = useMemo(() => {
    if (!puzzle) return 0;
    let s = 0;
    for (const w of found) s += scoreWord(w, puzzle.letters);
    return s;
  }, [puzzle, found]);

  if (!puzzle) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-[var(--muted)]">Loading puzzle…</p>
      </div>
    );
  }

  const percent =
    puzzle.maxScore > 0
      ? Math.min(100, (score / puzzle.maxScore) * 100)
      : 0;
  const currentRank = rank(percent);
  const pangramsFound = found.filter((w) =>
    isPangram(w, puzzle.letters),
  ).length;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-4 py-4">
      <Toast message={toast} />

      <div className="w-full">
        <div className="mb-1 flex items-baseline justify-between text-sm">
          <span className="font-bold">
            {currentRank} · {score} pts
          </span>
          <span className="text-[var(--muted)]">
            {found.length} / {puzzle.solutions.length} words · {pangramsFound}/
            {puzzle.pangramCount} pangrams
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded bg-[var(--border)]">
          <div
            className="h-full bg-[var(--correct)] transition-[width]"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div
        className="my-4 flex h-10 items-center text-2xl font-extrabold uppercase tracking-[0.25em]"
        aria-live="polite"
      >
        {input.split("").map((ch, i) => (
          <span
            key={i}
            className={ch === puzzle.center ? "text-[var(--present)]" : ""}
          >
            {ch}
          </span>
        ))}
        {input.length === 0 && (
          <span className="text-base font-normal tracking-normal text-[var(--muted)]">
            Type a word
          </span>
        )}
      </div>

      <Honeycomb center={puzzle.center} outer={outer} onLetter={type} />

      <div className="mt-6 flex gap-2">
        <button
          onClick={backspace}
          className="rounded border border-[var(--border)] px-4 py-2 font-semibold hover:bg-[var(--border)]"
        >
          {t.game.delete}
        </button>
        <button
          onClick={shuffle}
          aria-label="Shuffle"
          className="rounded border border-[var(--border)] px-4 py-2 font-semibold hover:bg-[var(--border)]"
        >
          ⟳
        </button>
        <button
          onClick={submit}
          className="rounded bg-[var(--correct)] px-6 py-2 font-bold text-white"
        >
          {t.game.enter}
        </button>
      </div>

      <div className="mt-8 w-full">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="text-sm font-bold uppercase text-[var(--muted)]">
            Found ({found.length})
          </h2>
          <button
            onClick={() => setRevealed((r) => !r)}
            className="text-xs text-[var(--muted)] underline"
          >
            {revealed ? "Hide answers" : "Reveal answers"}
          </button>
        </div>
        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {found.map((w) => (
            <li
              key={w}
              className={
                "text-sm " +
                (isPangram(w, puzzle.letters)
                  ? "font-bold text-[var(--correct)]"
                  : "")
              }
            >
              {w}
            </li>
          ))}
        </ul>

        {revealed && (
          <div className="mt-6">
            <h2 className="mb-2 text-sm font-bold uppercase text-[var(--muted)]">
              All answers
            </h2>
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {puzzle.solutions.map((w) => (
                <li
                  key={w}
                  className={
                    "text-sm " +
                    (found.includes(w)
                      ? "text-[var(--correct)]"
                      : "text-[var(--muted)]") +
                    (isPangram(w, puzzle.letters) ? " font-bold" : "")
                  }
                >
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={newGame}
        className="mt-8 rounded border border-[var(--border)] px-4 py-2 text-sm font-semibold hover:bg-[var(--border)]"
      >
        {t.game.newGame}
      </button>
    </div>
  );
}
