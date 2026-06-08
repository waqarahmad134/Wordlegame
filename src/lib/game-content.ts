/**
 * Registry for the long-form, SEO-oriented article shown below each game.
 * Types live in `./game-content/types`; per-game data lives in sibling files
 * under `./game-content/`. Articles are keyed by their route slug (the path
 * after the locale segment, with the leading slash removed), e.g. "quordle".
 *
 * Content is currently authored in English and reused across every locale,
 * mirroring how the game components themselves are locale-agnostic. The lookup
 * is keyed by slug rather than locale so it is ready to grow per-locale later.
 */

import type { GameArticle } from "./game-content/types";
import { unlimited } from "./game-content/unlimited";
import { dordle } from "./game-content/dordle";
import { quordle } from "./game-content/quordle";
import { octordle } from "./game-content/octordle";
import { sedecordle } from "./game-content/sedecordle";
import { spellbee } from "./game-content/spellbee";
import { connect } from "./game-content/connect";
import { squares } from "./game-content/squares";
import { solver } from "./game-content/solver";
import { custom } from "./game-content/custom";
import { multiplayer } from "./game-content/multiplayer";
import { archive } from "./game-content/archive";

export type { GameArticle } from "./game-content/types";

const REGISTRY: Record<string, GameArticle> = {
  unlimited,
  dordle,
  quordle,
  octordle,
  sedecordle,
  spellbee,
  connect,
  squares,
  solver,
  custom,
  multiplayer,
  archive,
};

/** Resolve the article for a game slug, e.g. "quordle". Returns null if none. */
export function getGameArticle(slug: string): GameArticle | null {
  return REGISTRY[slug] ?? null;
}
