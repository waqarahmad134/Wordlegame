"use client";

import { useState } from "react";
import { Game } from "./Game";
import { maxGuessesForLength } from "@/lib/config";

export function VariantGame({ length }: { length: number }) {
  const [mode, setMode] = useState<"daily" | "unlimited">("daily");

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-center gap-2 pt-3">
        {(["daily", "unlimited"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="rounded-full px-4 py-1 text-sm font-bold capitalize"
            style={{
              background: mode === m ? "var(--correct)" : "transparent",
              color: mode === m ? "#fff" : "var(--fg)",
              border: `1px solid ${mode === m ? "var(--correct)" : "var(--border)"}`,
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <Game
        key={mode}
        mode={mode}
        length={length}
        maxGuesses={maxGuessesForLength(length)}
        title={`Wordle ${length}`}
        showNewGame={mode === "unlimited"}
      />
    </div>
  );
}
