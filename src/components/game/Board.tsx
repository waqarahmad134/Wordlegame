"use client";

import type { ScoredLetter } from "@/lib/wordle/types";

interface BoardProps {
  length: number;
  maxGuesses: number;
  rows: ScoredLetter[][];
  current: string;
  status: string;
  shakeRow: boolean;
  lastRevealedRow: number;
}

export function Board({
  length,
  maxGuesses,
  rows,
  current,
  status,
  shakeRow,
  lastRevealedRow,
}: BoardProps) {
  const currentRowIndex = rows.length;

  return (
    <div className="mx-auto w-full max-w-[min(90vw,420px)] px-2">
      <div
        className="grid gap-1.5"
        style={{ gridTemplateRows: `repeat(${maxGuesses}, 1fr)` }}
      >
        {Array.from({ length: maxGuesses }).map((_, r) => {
          const scored = rows[r];
          const isCurrent = r === currentRowIndex && status === "playing";
          const isRevealing = r === lastRevealedRow;
          return (
            <div
              key={r}
              className={`grid gap-1.5 ${isCurrent && shakeRow ? "shake" : ""}`}
              style={{ gridTemplateColumns: `repeat(${length}, 1fr)` }}
            >
              {Array.from({ length }).map((_, c) => {
                let letter = "";
                let state: string | undefined;
                let filled = false;
                if (scored) {
                  letter = scored[c]?.letter ?? "";
                  state = scored[c]?.state;
                  filled = true;
                } else if (isCurrent) {
                  letter = current[c] ?? "";
                  filled = !!current[c];
                }
                return (
                  <div
                    key={c}
                    className="tile aspect-square text-[clamp(1rem,5vw,2rem)]"
                    data-state={state}
                    data-filled={filled || undefined}
                    data-reveal={isRevealing && scored ? "true" : undefined}
                    style={
                      isRevealing && scored
                        ? { animationDelay: `${c * 250}ms` }
                        : undefined
                    }
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
