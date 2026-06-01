"use client";

import { MultiWordle } from "./MultiWordle";

export function Octordle() {
  return (
    <MultiWordle
      boards={8}
      maxGuesses={13}
      gridClass="grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8"
    />
  );
}
