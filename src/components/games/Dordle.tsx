"use client";

import { MultiWordle } from "./MultiWordle";

export function Dordle() {
  return (
    <MultiWordle
      boards={2}
      maxGuesses={7}
      gridClass="grid-cols-1 sm:grid-cols-2"
    />
  );
}
