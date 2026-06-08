import type { GameArticle } from "./types";

export const solver: GameArticle = {
  path: "/solver",
  name: "Wordle Solver",
  hero: {
    thumb: "solver",
    alt: "Wordle solver showing a row of clue tiles next to a magnifying glass searching for answers",
    caption: "Wordle Solver: enter your green, yellow and gray clues to reveal every possible answer.",
  },
  appDescription:
    "Free Wordle solver and helper. Enter your green, yellow and gray clues and instantly see every possible five-letter answer that still fits.",
  introTitle: "Wordle Solver: find every possible answer",
  intro: [
    [
      "The ",
      { text: "Wordle Solver", href: "/solver" },
      " is a free helper for when a puzzle has you stuck. You feed it the clues you already have (the green letters in their correct spots, the yellow letters that are present but misplaced, and the gray letters you have ruled out) and it instantly lists every five-letter word that still fits. No more staring at the board hoping the answer appears.",
    ],
    [
      "It works with any version of the game, including the daily ",
      { text: "Wordle", href: "" },
      ", the endless ",
      { text: "Wordle Unlimited", href: "/unlimited" },
      " mode, and even the individual boards inside multi-board games. Think of it less as cheating and more as a way to learn: seeing the full list of candidates teaches you which guesses would have cut the field fastest.",
    ],
  ],
  sections: [
    {
      heading: "How the Wordle Solver works",
      body: [
        [
          "The solver runs your clues through the same dictionary the game uses and filters out every word that contradicts them. A green letter pins a position, a yellow letter forces a letter to be present but excludes the spot you tried it in, and a gray letter removes every word containing it (with careful handling of repeated letters). What is left is the complete set of words that are still possible.",
        ],
        [
          "Because it checks against real, valid words rather than every letter combination, the results are always genuine answers you could actually play. As you add more clues the list shrinks, and watching it narrow from hundreds of options down to a handful is the clearest way to understand how much information each clue really carries.",
        ],
      ],
    },
    {
      heading: "A learning tool, not just a crutch",
      body: [
        [
          "Used well, the solver makes you a better player. When you are genuinely stuck on the last guess, it rescues your streak. But its real value is in review: after a tough round, enter your clues and see how many candidates remained at each step. You will quickly spot the moments where a different guess would have eliminated far more words.",
        ],
        [
          "That feedback loop is hard to get any other way. It turns vague intuition, \"I should have guessed something else there,\" into a concrete lesson about which letters were worth testing. Pair a little solver review with regular practice in ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " and your unaided guess count tends to drop noticeably.",
        ],
      ],
    },
    {
      heading: "Getting the most accurate results",
      body: [
        [
          "The solver is only as good as the clues you give it, so enter them carefully. Place each green letter in its exact column, mark yellow letters in the position where you actually tried them (not where you think they belong), and add every gray letter you have ruled out. The more complete your input, the shorter and more useful the candidate list.",
        ],
        [
          "Repeated letters are the one place people trip up. If a letter shows up as both yellow and gray in the same guess, that usually means the word contains it once but not twice. Enter the clues exactly as the game coloured them and the solver will handle the logic correctly.",
        ],
      ],
      list: [
        "Enter greens in their exact positions.",
        "Enter yellows where you tried them, not where you think they go.",
        "Add every gray letter you have eliminated.",
        "Results are filtered against real, valid words only.",
        "Free, instant, and works for any five-letter Wordle variant.",
      ],
    },
    {
      heading: "Is using a solver fair?",
      body: [
        [
          "It is the question every player eventually asks, and the honest answer is that it depends entirely on what you want from the game. If your goal is to protect a long streak on the daily puzzle, leaning on a solver to win does take something away from the achievement, and most players who care about their streak save it strictly for the moment they would otherwise lose.",
        ],
        [
          "But framing the solver purely as a cheat misses its best use. Treated as a study tool, it is one of the fastest ways to get better. After you finish a round on your own, replaying your clues through the solver shows you exactly how many words remained possible after each guess. Seeing that your third guess left forty candidates when a different word would have left four is a genuine, concrete lesson you can apply tomorrow.",
        ],
        [
          "Used that way, the solver is no different from reviewing a game of chess afterwards with an engine: nobody calls that cheating, because the analysis happens after the contest, not during it. Pair that habit of review with steady practice in ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          ", and the solver becomes a coach rather than a crutch, the version of the tool that actually makes you stronger.",
        ],
      ],
    },
  ],
  howToTitle: "How to use the Wordle Solver",
  howToSteps: [
    {
      title: "Enter your green letters",
      body: "Type each confirmed letter into the exact position where the game showed it green. These pin down the slots you already know.",
    },
    {
      title: "Add your yellow letters",
      body: "Mark the letters that are in the word but misplaced, in the position where you tried them, so the solver knows to exclude that spot.",
    },
    {
      title: "Mark the gray letters",
      body: "List every letter you have ruled out. The solver removes all words containing them, handling repeated letters correctly.",
    },
    {
      title: "Read the candidate list",
      body: "The solver instantly shows every word that still fits your clues. The more clues you add, the shorter the list becomes.",
    },
    {
      title: "Pick your next guess",
      body: "Choose a candidate that tests new letters to narrow things further, or go straight for the answer if only a few remain.",
    },
  ],
  strategyTitle: "Tips for using the Wordle Solver well",
  strategy: [
    {
      title: "Use it to review, not just to win",
      body: "After a hard round, replay your clues step by step to see where a smarter guess would have cut the field fastest. That review is where the real improvement comes from.",
    },
    {
      title: "Enter every clue you have",
      body: "Partial input gives a bloated list. The more greens, yellows and grays you provide, the sharper and shorter the candidate set.",
    },
    {
      title: "Prefer candidates with fresh letters",
      body: "When several answers remain, guess one that tests the most untried letters rather than gambling on a single option.",
    },
    {
      title: "Handle doubled letters carefully",
      body: "Enter clues exactly as the board coloured them. A letter shown both yellow and gray usually means it appears once, not twice.",
    },
    {
      title: "Save it for genuine dead ends",
      body: "Lean on the solver only when you are truly stuck. Solving unaided is more satisfying, and the solver stays more useful as an occasional tool.",
    },
    {
      title: "Apply it to any variant",
      body: "The same clue logic works for the daily puzzle, unlimited play and single boards inside multi-board games, so it is useful everywhere.",
    },
  ],
  relatedTitle: "More word games and tools",
  related: [
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles to practise on." },
    { path: "/archive", name: "Wordle Archive", thumb: "archive", blurb: "Replay past daily puzzles you may have missed." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Solve eight boards at once in thirteen guesses." },
    { path: "/custom", name: "Custom Word", thumb: "custom", blurb: "Hide your own word and share a link with friends." },
  ],
  faqTitle: "Wordle Solver: frequently asked questions",
  faq: [
    { q: "What does the Wordle Solver do?", a: "It takes the clues you already have (green, yellow and gray letters) and instantly lists every valid five-letter word that still fits them, so you can find the answer or your best next guess." },
    { q: "Is using a solver cheating?", a: "That is up to you. Many players use it only when truly stuck, or after a round to review which guesses would have narrowed the answers fastest, treating it as a learning tool rather than a shortcut." },
    { q: "How do I enter my clues?", a: "Put green letters in their exact positions, yellow letters in the spot where you tried them, and list every gray letter you have ruled out. More complete clues give a shorter, sharper list." },
    { q: "Does it work with Wordle Unlimited and other variants?", a: "Yes. The solver works for any five-letter Wordle puzzle, including the daily game, unlimited mode and individual boards inside multi-board games." },
    { q: "How does it handle repeated letters?", a: "Enter the clues exactly as the game coloured them. The solver applies the same duplicate-letter logic the game uses, so it correctly handles letters shown as both yellow and gray." },
    { q: "Are the results always real words?", a: "Yes. The solver filters against the game's dictionary, so every candidate it returns is a genuine word you could actually play." },
    { q: "Is the Wordle Solver free?", a: "Yes. It is completely free and instant, with no download, account or sign-up required." },
  ],
  ratingValue: 4.7,
  ratingCount: 4093,
};
