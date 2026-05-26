"use client";

import type { LetterState } from "@/lib/wordle/types";

const ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

interface KeyboardProps {
  keyStates: Record<string, LetterState>;
  onKey: (ch: string) => void;
  onEnter: () => void;
  onDelete: () => void;
  enterLabel: string;
}

export function Keyboard({
  keyStates,
  onKey,
  onEnter,
  onDelete,
  enterLabel,
}: KeyboardProps) {
  return (
    <div className="mx-auto w-full max-w-[500px] select-none px-1 pb-3">
      {ROWS.map((row, i) => (
        <div key={i} className="mb-1.5 flex justify-center gap-1.5">
          {i === 2 && (
            <button
              className="key flex-[1.5] text-xs"
              onClick={onEnter}
              aria-label="Enter"
            >
              {enterLabel}
            </button>
          )}
          {row.split("").map((ch) => (
            <button
              key={ch}
              className="key flex-1 text-sm"
              data-state={keyStates[ch]}
              onClick={() => onKey(ch)}
              aria-label={ch}
            >
              {ch}
            </button>
          ))}
          {i === 2 && (
            <button
              className="key flex-[1.5]"
              onClick={onDelete}
              aria-label="Delete"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                <line x1="18" y1="9" x2="12" y2="15" />
                <line x1="12" y1="9" x2="18" y2="15" />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
