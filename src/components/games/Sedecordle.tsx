"use client";

import { MultiWordle } from "./MultiWordle";

export function Sedecordle() {
  return (
    <MultiWordle
      boards={16}
      maxGuesses={21}
      gridClass="grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8"
    />
  );
}
