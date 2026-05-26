export interface SelectionResult {
  correct: boolean;
  /** True when 3 of the 4 selected words belong to a single group. */
  oneAway: boolean;
}

/**
 * Evaluate four selected words given each word's group index.
 * `correct` when all four share a group; `oneAway` when exactly three do.
 */
export function evaluateSelection(groupIndices: number[]): SelectionResult {
  if (groupIndices.length !== 4) return { correct: false, oneAway: false };
  const counts: Record<number, number> = {};
  for (const g of groupIndices) counts[g] = (counts[g] ?? 0) + 1;
  const max = Math.max(...Object.values(counts));
  return { correct: max === 4, oneAway: max === 3 };
}
