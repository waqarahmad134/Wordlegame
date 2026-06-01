export interface Dictionary {
  tagline: string;
  nav: {
    dailyWordle: string;
    unlimited: string;
    wordLengths: string;
    custom: string;
    multiplayer: string;
    dordle: string;
    quordle: string;
    octordle: string;
    sedecordle: string;
    spellbee: string;
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
    letters: string;
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
