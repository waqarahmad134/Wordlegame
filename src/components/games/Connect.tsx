"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CONNECT_PUZZLES, type ConnectPuzzle } from "@/data/connect";
import { evaluateSelection } from "@/lib/games/connect";

const GROUP_COLORS = ["#f9df6d", "#a0c35a", "#b0c4ef", "#ba81c5"];
const MAX_MISTAKES = 4;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface SolvedGroup {
  name: string;
  words: string[];
  colorIndex: number;
}

export function Connect() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const puzzle: ConnectPuzzle = CONNECT_PUZZLES[puzzleIndex];

  const [remaining, setRemaining] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [solved, setSolved] = useState<SolvedGroup[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const start = useCallback(() => {
    setRemaining(shuffle(puzzle.groups.flatMap((g) => g.words)));
    setSelected([]);
    setSolved([]);
    setMistakes(0);
    setMessage(null);
  }, [puzzle]);

  useEffect(() => {
    start();
  }, [start]);

  const groupOf = useMemo(() => {
    const map: Record<string, number> = {};
    puzzle.groups.forEach((g, i) =>
      g.words.forEach((w) => {
        map[w] = i;
      }),
    );
    return map;
  }, [puzzle]);

  const lost = mistakes >= MAX_MISTAKES;
  const won = solved.length === 4;
  const over = lost || won;

  const toggle = (word: string) => {
    if (over) return;
    setSelected((sel) =>
      sel.includes(word)
        ? sel.filter((w) => w !== word)
        : sel.length < 4
          ? [...sel, word]
          : sel,
    );
  };

  const submit = () => {
    if (selected.length !== 4) return;
    const groups = selected.map((w) => groupOf[w]);
    const { correct, oneAway } = evaluateSelection(groups);
    if (correct) {
      const gi = groups[0];
      const grp = puzzle.groups[gi];
      setSolved((s) => [
        ...s,
        { name: grp.name, words: grp.words, colorIndex: s.length },
      ]);
      setRemaining((r) => r.filter((w) => !selected.includes(w)));
      setSelected([]);
      if (solved.length + 1 === 4) setMessage("Solved!");
    } else {
      setMistakes((m) => m + 1);
      setMessage(oneAway ? "One away…" : "Not a group");
      setTimeout(() => setMessage(null), 1200);
      if (mistakes + 1 >= MAX_MISTAKES) {
        // Reveal remaining groups on loss.
        const shown = solved.map((s) => s.name);
        const rest = puzzle.groups
          .filter((g) => !shown.includes(g.name))
          .map((g, i) => ({
            name: g.name,
            words: g.words,
            colorIndex: solved.length + i,
          }));
        setSolved((s) => [...s, ...rest]);
        setRemaining([]);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl p-4">
      <h1 className="mb-1 text-2xl font-bold">Connect</h1>
      <p className="mb-3 text-sm text-[var(--muted)]">
        Find groups of four words that share a connection.
      </p>

      <div className="space-y-1.5">
        {solved.map((g) => (
          <div
            key={g.name}
            className="rounded p-2 text-center"
            style={{ background: GROUP_COLORS[g.colorIndex % 4], color: "#000" }}
          >
            <div className="text-xs font-bold uppercase">{g.name}</div>
            <div className="text-sm">{g.words.join(", ")}</div>
          </div>
        ))}

        {remaining.length > 0 && (
          <div className="grid grid-cols-4 gap-1.5">
            {remaining.map((word) => {
              const isSel = selected.includes(word);
              return (
                <button
                  key={word}
                  onClick={() => toggle(word)}
                  className="flex aspect-square items-center justify-center rounded p-1 text-center text-[10px] font-bold uppercase sm:text-xs"
                  style={{
                    background: isSel ? "var(--fg)" : "var(--border)",
                    color: isSel ? "var(--bg)" : "var(--fg)",
                  }}
                >
                  {word}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm">
          Mistakes: {Math.min(mistakes, MAX_MISTAKES)}/{MAX_MISTAKES}
        </span>
        {message && <span className="text-sm font-bold">{message}</span>}
        {!over ? (
          <button
            onClick={submit}
            disabled={selected.length !== 4}
            className="rounded bg-[var(--correct)] px-4 py-1.5 font-bold text-white disabled:opacity-40"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => {
              const next = (puzzleIndex + 1) % CONNECT_PUZZLES.length;
              setPuzzleIndex(next);
            }}
            className="rounded border border-[var(--border)] px-4 py-1.5 font-bold"
          >
            Next Puzzle
          </button>
        )}
      </div>
      {won && <p className="mt-2 text-center font-bold">You won! 🎉</p>}
      {lost && !won && (
        <p className="mt-2 text-center font-bold">Out of guesses.</p>
      )}
    </div>
  );
}
