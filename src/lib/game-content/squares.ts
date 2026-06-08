import type { GameArticle } from "./types";

export const squares: GameArticle = {
  path: "/squares",
  name: "Squares",
  hero: {
    thumb: "squares",
    alt: "Squares game showing a four-by-four grid of letters with a path traced through adjacent tiles spelling a word",
    caption: "Squares: link adjacent letters across a 4×4 grid to spell as many words as you can.",
  },
  appDescription:
    "Play Squares free online: connect adjacent letters in a 4×4 grid to spell words and score points. The more words you find, the higher your score.",
  introTitle: "Squares: the 4×4 word finder",
  intro: [
    [
      { text: "Squares", href: "/squares" },
      " is a fast, free-form word hunt played on a four-by-four grid of letters. Rather than guessing a hidden answer, you trace paths through neighbouring tiles to spell words, and every valid word you find adds to your score. One small grid can hide dozens of words, and the fun is in squeezing out as many as you can.",
    ],
    [
      "It is the most action-oriented of the word games here. Where ",
      { text: "Wordle", href: "" },
      " is a slow, deliberate deduction, Squares is quick and exploratory. Your eyes dart around the grid spotting chains of letters, and a good round is a steadily growing list of discoveries.",
    ],
  ],
  sections: [
    {
      heading: "How Squares works",
      body: [
        [
          "Sixteen letters fill a four-by-four grid. To spell a word you connect letters that are next to each other, horizontally, vertically or diagonally, moving from one adjacent tile to the next without lifting between them. Each tile can be used once per word, so the path can twist around the grid but never cross back over itself.",
        ],
        [
          "Every valid word you trace earns points, and longer words are worth more. The same grid can usually produce a long list of answers, from simple three- and four-letter words to the occasional six- or seven-letter gem hiding in plain sight. Your goal is to find as many as you can before the round ends.",
        ],
      ],
    },
    {
      heading: "Seeing the words in the grid",
      body: [
        [
          "The skill in Squares is training your eye to spot chains of adjacent letters. At first you will only see the obvious short words, but with practice your brain starts to recognise common pairings such as TH, ER, ING and QU, and you begin following those threads across the grid almost automatically.",
        ],
        [
          "A useful habit is to anchor on a less common letter and ask what can be built around it. High-value letters like the ones worth chasing often sit at the start or end of the best words on the board, so spotting where they connect to vowels frequently unlocks several answers at once.",
        ],
      ],
    },
    {
      heading: "Why Squares is great for quick play",
      body: [
        [
          "Because a round is short and there is no single answer to fail on, Squares is the ideal pick-up-and-play word game. You are always making progress, since every word found is a small win, and there is no frustrating dead end where you are simply stuck.",
        ],
        [
          "It also sharpens the same letter-pattern sense that helps everywhere else on the site. The grid-scanning instinct Squares builds feeds directly into spotting answers in ",
          { text: "SpellBee", href: "/spellbee" },
          " and picking smart guesses in ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          ". A few rounds make a surprisingly good warm-up.",
        ],
      ],
      list: [
        "A 4×4 grid of sixteen letters to explore.",
        "Connect adjacent tiles, including diagonals, to spell words.",
        "Each tile can be used once per word.",
        "Longer words score more points.",
        "Free to play with no account or download required.",
      ],
    },
    {
      heading: "Chasing the long words that win rounds",
      body: [
        [
          "In Squares the easy short words are where you start, but the long words are where rounds are won. Because score climbs steeply with length, a single six- or seven-letter find can be worth more than a dozen three-letter answers. The players who post the biggest scores are not the ones who find the most words; they are the ones who keep hunting for the long ones hiding in the grid.",
        ],
        [
          "The way to find them is to think in stems rather than whole words. Spot a common base like CARE, PLAN or STORM, then look at the surrounding tiles to see whether you can extend it: CARE into CARES into SCARES, or PLAN into PLANT into PLANTS. Each added letter, if it is adjacent, lifts your score and often reveals yet another extension you had not noticed.",
        ],
        [
          "It also helps to treat the grid as a map you re-scan from different starting points. The same sixteen letters look completely different depending on which tile your eye begins from, and a long word that was invisible from one corner often jumps out when you start from another. That habit of looking again from a fresh angle is exactly what turns a decent round into a great one, and it is the same instinct that pays off in ",
          { text: "SpellBee", href: "/spellbee" },
          ".",
        ],
      ],
    },
  ],
  howToTitle: "How to play Squares",
  howToSteps: [
    {
      title: "Scan the grid",
      body: "Look over the sixteen letters and pick out promising pairings and clusters before you start tracing.",
    },
    {
      title: "Connect adjacent letters",
      body: "Trace a path through neighbouring tiles, horizontally, vertically or diagonally, to spell a word, moving from each letter to a touching one.",
    },
    {
      title: "Use each tile once per word",
      body: "Within a single word you cannot reuse the same tile, so plan a path that never crosses back over itself.",
    },
    {
      title: "Submit and score",
      body: "Complete a valid word to bank its points. Longer words are worth more, so push past the easy short ones when you can.",
    },
    {
      title: "Find as many words as possible",
      body: "Keep hunting for new paths to grow your score. One grid hides far more words than you will spot at first glance.",
    },
  ],
  strategyTitle: "Tips and strategy for Squares",
  strategy: [
    {
      title: "Bank the short words first",
      body: "Lock in the easy three- and four-letter words to build a base score, then go hunting for the longer, higher-value finds.",
    },
    {
      title: "Follow common letter pairs",
      body: "Train your eye on pairings like TH, ER, IN and QU. Following these threads across the grid quickly reveals chains of words.",
    },
    {
      title: "Reuse word stems",
      body: "If you find a word, check whether adding a neighbouring letter extends it, turning CAR into CART into CARTS, for extra points from the same path.",
    },
    {
      title: "Use diagonals",
      body: "Beginners forget that diagonal moves count. Letters that look unconnected are often one diagonal step apart, opening up new words.",
    },
    {
      title: "Anchor on rare letters",
      body: "Build around less common letters, since they tend to appear in the highest-scoring words on the board and narrow your search.",
    },
    {
      title: "Keep scanning to the end",
      body: "There is always one more word. Re-sweep the grid for paths you missed before the round closes.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "/spellbee", name: "SpellBee", thumb: "spellbee", blurb: "Make as many words as you can from seven letters." },
    { path: "/connect", name: "Connect", thumb: "connect", blurb: "Sort sixteen words into four hidden groups of four." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board word puzzles." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/archive", name: "Wordle Archive", thumb: "archive", blurb: "Replay past daily puzzles you may have missed." },
  ],
  faqTitle: "Squares: frequently asked questions",
  faq: [
    { q: "What is Squares?", a: "Squares is a word-finding game played on a 4×4 grid of letters. You connect adjacent letters to spell words and score points, finding as many words as you can in each grid." },
    { q: "How do I connect letters?", a: "Trace a path between letters that are next to each other, horizontally, vertically or diagonally, moving from each tile to a touching one to spell a word." },
    { q: "Can I use the same letter twice?", a: "Each tile can be used only once within a single word, so your path cannot cross back over a tile it has already used. Different words can reuse the same tiles." },
    { q: "How is my score calculated?", a: "Every valid word adds points, and longer words are worth more, so finding a few long words can outscore many short ones." },
    { q: "Do diagonal connections count?", a: "Yes. Letters that touch diagonally are considered adjacent, which opens up many more words than horizontal and vertical moves alone." },
    { q: "Is there a single correct answer?", a: "No. Squares has many possible words in each grid, so there is no single solution. The goal is to find as many as you can." },
    { q: "How do I find the longest words?", a: "Think in stems rather than whole words. Spot a common base such as CARE or PLAN, then check the surrounding tiles to see whether you can extend it, turning CARE into CARES into SCARES. Because score climbs steeply with length, one long word can be worth more than a dozen short ones." },
    { q: "Why should I re-scan the same grid?", a: "The sixteen letters look completely different depending on which tile your eye starts from. A long word that is invisible from one corner often jumps out when you begin from another, so sweeping the grid again from a fresh starting point is the fastest way to lift your score before the round ends." },
    { q: "Is Squares free to play?", a: "Yes. Squares is completely free, with no download, account or sign-up required." },
  ],
  ratingValue: 4.3,
  ratingCount: 2401,
};
