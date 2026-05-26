import { DEFAULT_LOCALE } from "./locales";

export interface Dictionary {
  tagline: string;
  nav: {
    dailyWordle: string;
    unlimited: string;
    wordLengths: string;
    custom: string;
    multiplayer: string;
    sedecordle: string;
    connect: string;
    squares: string;
    solver: string;
    archive: string;
    about: string;
  };
  game: {
    notEnoughLetters: string;
    notInWordList: string;
    win: string;
    lose: string;
    newGame: string;
    share: string;
    copied: string;
    nextWordle: string;
    enter: string;
    delete: string;
    letters: string; // used as "{n} Letters"
  };
  stats: {
    title: string;
    played: string;
    winPct: string;
    currentStreak: string;
    maxStreak: string;
    distribution: string;
  };
  settings: {
    title: string;
    hardMode: string;
    hardModeDesc: string;
    darkTheme: string;
    darkThemeDesc: string;
    colorblind: string;
    colorblindDesc: string;
  };
  howTo: {
    title: string;
    intro: string;
    correct: string;
    present: string;
    absent: string;
  };
  custom: {
    title: string;
    intro: string;
    placeholder: string;
    create: string;
    shareLink: string;
    copyLink: string;
    invalid: string;
  };
}

const en: Dictionary = {
  tagline: "Guess the hidden word in 6 tries. A new puzzle every day!",
  nav: {
    dailyWordle: "Daily Wordle",
    unlimited: "Unlimited",
    wordLengths: "Word Lengths",
    custom: "Custom Game",
    multiplayer: "Multiplayer",
    sedecordle: "Sedecordle",
    connect: "Connect",
    squares: "Squares",
    solver: "Solver",
    archive: "Archive",
    about: "About",
  },
  game: {
    notEnoughLetters: "Not enough letters",
    notInWordList: "Not in word list",
    win: "Magnificent!",
    lose: "The word was",
    newGame: "New Game",
    share: "Share",
    copied: "Copied to clipboard",
    nextWordle: "Next Wordle in",
    enter: "Enter",
    delete: "Delete",
    letters: "Letters",
  },
  stats: {
    title: "Statistics",
    played: "Played",
    winPct: "Win %",
    currentStreak: "Current Streak",
    maxStreak: "Max Streak",
    distribution: "Guess Distribution",
  },
  settings: {
    title: "Settings",
    hardMode: "Hard Mode",
    hardModeDesc: "Any revealed hints must be used in subsequent guesses",
    darkTheme: "Dark Theme",
    darkThemeDesc: "Reduce glare and play comfortably at night",
    colorblind: "Color Blind Mode",
    colorblindDesc: "High contrast colors",
  },
  howTo: {
    title: "How To Play",
    intro: "Guess the word in 6 tries. Each guess must be a valid word.",
    correct: "The letter is in the word and in the correct spot.",
    present: "The letter is in the word but in the wrong spot.",
    absent: "The letter is not in the word in any spot.",
  },
  custom: {
    title: "Custom Word",
    intro: "Pick a word and challenge your friends with a shareable link.",
    placeholder: "Enter a word",
    create: "Create Link",
    shareLink: "Share this link with a friend:",
    copyLink: "Copy Link",
    invalid: "Please enter a valid word (letters only).",
  },
};

const es: Partial<Dictionary> = {
  tagline: "Adivina la palabra oculta en 6 intentos. ¡Un nuevo puzzle cada día!",
  nav: {
    dailyWordle: "Wordle Diario",
    unlimited: "Ilimitado",
    wordLengths: "Longitudes",
    custom: "Juego Personalizado",
    multiplayer: "Multijugador",
    sedecordle: "Sedecordle",
    connect: "Conectar",
    squares: "Cuadrados",
    solver: "Solucionador",
    archive: "Archivo",
    about: "Acerca de",
  },
};

const fr: Partial<Dictionary> = {
  tagline: "Devinez le mot caché en 6 essais. Un nouveau puzzle chaque jour !",
  nav: {
    dailyWordle: "Wordle du Jour",
    unlimited: "Illimité",
    wordLengths: "Longueurs",
    custom: "Jeu Personnalisé",
    multiplayer: "Multijoueur",
    sedecordle: "Sedecordle",
    connect: "Connecter",
    squares: "Carrés",
    solver: "Solveur",
    archive: "Archives",
    about: "À propos",
  },
};

const de: Partial<Dictionary> = {
  tagline: "Errate das versteckte Wort in 6 Versuchen. Jeden Tag ein neues Rätsel!",
  nav: {
    dailyWordle: "Tägliches Wordle",
    unlimited: "Unbegrenzt",
    wordLengths: "Wortlängen",
    custom: "Eigenes Spiel",
    multiplayer: "Mehrspieler",
    sedecordle: "Sedecordle",
    connect: "Verbinden",
    squares: "Quadrate",
    solver: "Löser",
    archive: "Archiv",
    about: "Über",
  },
};

const pt: Partial<Dictionary> = {
  tagline: "Adivinhe a palavra oculta em 6 tentativas. Um novo desafio todos os dias!",
  nav: {
    dailyWordle: "Wordle Diário",
    unlimited: "Ilimitado",
    wordLengths: "Comprimentos",
    custom: "Jogo Personalizado",
    multiplayer: "Multijogador",
    sedecordle: "Sedecordle",
    connect: "Conectar",
    squares: "Quadrados",
    solver: "Solucionador",
    archive: "Arquivo",
    about: "Sobre",
  },
};

/**
 * Locale → partial dictionary. Missing keys deep-merge onto English so every
 * registered locale is fully usable while translations are filled in.
 */
const OVERRIDES: Record<string, Partial<Dictionary>> = {
  es,
  fr,
  de,
  pt,
  "en-gb": {},
};

function deepMerge<T>(base: T, override: Partial<T>): T {
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(override ?? {})) {
    const bv = (base as Record<string, unknown>)[k];
    if (
      v &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      bv &&
      typeof bv === "object"
    ) {
      out[k] = deepMerge(bv, v as Record<string, unknown>);
    } else if (v !== undefined) {
      out[k] = v;
    }
  }
  return out as T;
}

export function getDictionary(locale: string): Dictionary {
  const base = locale.toLowerCase();
  const override = OVERRIDES[base];
  if (!override || base === DEFAULT_LOCALE) return en;
  return deepMerge(en, override);
}
