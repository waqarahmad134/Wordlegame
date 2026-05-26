/** Two cells in a size×size grid are adjacent (incl. diagonals) and distinct. */
export function adjacent(a: number, b: number, size: number): boolean {
  if (a === b) return false;
  const ra = Math.floor(a / size);
  const ca = a % size;
  const rb = Math.floor(b / size);
  const cb = b % size;
  return Math.abs(ra - rb) <= 1 && Math.abs(ca - cb) <= 1;
}

/** Longer words score more; words under 4 letters score nothing. */
export function wordScore(length: number): number {
  return length < 4 ? 0 : length * (length - 3);
}
