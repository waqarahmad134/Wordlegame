"use client";

export interface Stats {
  played: number;
  wins: number;
  currentStreak: number;
  maxStreak: number;
  /** distribution[i] = games won in (i+1) guesses */
  distribution: number[];
  lastDailyKey: string | null;
}

export const EMPTY_STATS: Stats = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
  distribution: [0, 0, 0, 0, 0, 0],
  lastDailyKey: null,
};

/** Stats are tracked per word length so each board keeps its own streak. */
function key(length: number): string {
  return `wg:stats:${length}`;
}

export function loadStats(length: number): Stats {
  if (typeof window === "undefined") return clone(EMPTY_STATS);
  try {
    const raw = window.localStorage.getItem(key(length));
    if (!raw) return clone(EMPTY_STATS);
    return { ...clone(EMPTY_STATS), ...JSON.parse(raw) };
  } catch {
    return clone(EMPTY_STATS);
  }
}

export function saveStats(length: number, stats: Stats): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key(length), JSON.stringify(stats));
}

export interface RecordResultInput {
  length: number;
  won: boolean;
  guessCount: number;
  maxGuesses: number;
  /** For daily mode: the date key, used to maintain streaks. */
  dailyKey?: string | null;
}

export function recordResult(input: RecordResultInput): Stats {
  const { length, won, guessCount, dailyKey } = input;
  const stats = loadStats(length);

  // Avoid double-counting the same daily puzzle.
  if (dailyKey && stats.lastDailyKey === dailyKey) return stats;

  stats.played += 1;
  if (won) {
    stats.wins += 1;
    stats.currentStreak += 1;
    stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
    const idx = Math.min(guessCount - 1, stats.distribution.length - 1);
    if (idx >= 0) stats.distribution[idx] += 1;
  } else {
    stats.currentStreak = 0;
  }
  if (dailyKey) stats.lastDailyKey = dailyKey;

  saveStats(length, stats);
  return stats;
}

export function winPercent(stats: Stats): number {
  return stats.played === 0 ? 0 : Math.round((stats.wins / stats.played) * 100);
}

function clone(s: Stats): Stats {
  return { ...s, distribution: [...s.distribution] };
}
