"use client";

import { MultiWordle } from "./MultiWordle";

export function Quordle() {
  return (
    <MultiWordle
      boards={4}
      maxGuesses={9}
      gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    />
  );
}
