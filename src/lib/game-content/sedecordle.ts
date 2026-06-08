import type { GameArticle } from "./types";

export const sedecordle: GameArticle = {
  path: "/sedecordle",
  name: "Sedecordle",
  hero: {
    thumb: "sedecordle",
    alt: "Sedecordle game showing sixteen Wordle boards in a four-by-four grid with green, yellow and gray tiles",
    caption: "Sedecordle: sixteen hidden words, one keyboard, twenty-one guesses.",
  },
  appDescription:
    "Play Sedecordle free online: solve sixteen Wordle puzzles at the same time in twenty-one guesses. The ultimate multi-board word challenge.",
  introTitle: "Sedecordle: solve sixteen Wordles at once",
  intro: [
    [
      { text: "Sedecordle", href: "/sedecordle" },
      " is the summit of the multi-board word game. Sixteen hidden five-letter words, all on screen at the same time, all sharing a single keyboard, with twenty-one guesses to clear every last one. The name comes from the Latin for sixteen, and it is exactly as ambitious as it sounds.",
    ],
    [
      "If you have worked your way up through ",
      { text: "Octordle", href: "/octordle" },
      " and want the biggest test the format offers, this is it. Sedecordle is less a quick puzzle and more a fifteen-minute campaign, a calm and methodical exercise in managing information across sixteen fronts at once. It rewards patience far more than speed.",
    ],
  ],
  sections: [
    {
      heading: "How Sedecordle works",
      body: [
        [
          "Sixteen Wordle grids are arranged in a four-by-four block. Every word you submit is scored against all sixteen answers simultaneously, so a single guess produces sixteen separate color readouts. Most players use a board-by-board scrolling view to keep track, focusing on a few grids at a time while the rest update quietly in the background.",
        ],
        [
          "Twenty-one guesses for sixteen words may sound roomy, but it averages out to just over one guess per word. The cushion exists so that your opening guesses, which cannot possibly solve sixteen boards, do not sink you. Once the openers are done, you are essentially down to one finishing guess per remaining board, so accuracy becomes everything.",
        ],
      ],
    },
    {
      heading: "It is a marathon, not a sprint",
      body: [
        [
          "The mental challenge of Sedecordle is endurance, not difficulty. Each individual board is an ordinary, solvable ",
          { text: "Wordle", href: "" },
          ". The hard part is holding sixteen of them in your head without losing track. The players who finish are the ones who stay organised and refuse to rush.",
        ],
        [
          "There is no clock, and that is the key. Take the puzzle one cluster of boards at a time. Solve a board, set it aside, and move on without trying to keep all sixteen perfectly in focus at once. Treating it as sixteen small wins rather than one giant problem is the difference between finishing and burning out halfway.",
        ],
      ],
    },
    {
      heading: "Building a Sedecordle opening",
      body: [
        [
          "On sixteen boards, opening words are pure reconnaissance. A strong four-word opening can test around twenty different common letters, and across sixteen grids that produces a flood of greens and yellows, usually enough to make several boards nearly solvable straight away.",
        ],
        [
          "Lock that opening in and never vary it. The point of a fixed opening here is to remove all decision-making from the first four turns so you can pour your attention into reading the results. After the opening, work the boards in the order they become solvable, always finishing the ones you are sure of and returning later to the stubborn few. For drilling that opening, the ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " mode is perfect.",
        ],
      ],
      list: [
        "Sixteen boards in a four-by-four grid, one shared keyboard.",
        "Twenty-one total guesses, just over one per word.",
        "Every guess is scored against all sixteen answers at once.",
        "A fixed four-word opening removes early-game guesswork.",
        "Free to play, with no time pressure, account or download.",
      ],
    },
    {
      heading: "Staying organised across sixteen boards",
      body: [
        [
          "The single biggest reason people abandon a Sedecordle run is not difficulty. It is disorganisation. Sixteen boards updating at once is genuinely a lot to hold in your head, and without a system it quickly becomes overwhelming. The players who finish are almost always the ones who impose order on the chaos rather than trying to track everything at once.",
        ],
        [
          "A reliable approach is to work the grid in quadrants. Mentally split the sixteen boards into four groups of four and give each group your full attention in turn. Solve what you can in one quadrant, note which boards there still need work, then move to the next. Because every guess applies to all sixteen anyway, your background progress keeps building even while you focus narrowly, so when you circle back, several boards have often advanced on their own.",
        ],
        [
          "It also pays to physically mark your progress as you go. Treat each solved board as closed and stop looking at it, shrinking the field you have to monitor with every win. By the late game you should be watching only a handful of stubborn boards rather than the full sixteen. Combine that quadrant discipline with the no-clock patience the format allows, and a puzzle that looks impossible becomes a steady, satisfying march. If sixteen still feels like too much, more time on ",
          { text: "Octordle", href: "/octordle" },
          " is the best preparation.",
        ],
      ],
    },
  ],
  howToTitle: "How to play Sedecordle",
  howToSteps: [
    {
      title: "Enter your first guess",
      body: "Type any valid five-letter word and press Enter. It is scored on all sixteen boards at once, returning sixteen separate sets of clues.",
    },
    {
      title: "Work through the boards in clusters",
      body: "You cannot watch all sixteen at once. Focus on a handful of grids at a time and let the rest update in the background.",
    },
    {
      title: "Spend the opening on information",
      body: "Use your first four guesses to uncover as many common letters as possible everywhere. Do not expect to solve anything yet.",
    },
    {
      title: "Finish boards as they become solvable",
      body: "Whenever a board narrows to one answer, close it. Tick them off steadily rather than trying to solve everything in parallel.",
    },
    {
      title: "Clear all sixteen in twenty-one guesses",
      body: "You have twenty-one guesses for the whole grid. The puzzle is won only when every one of the sixteen boards is fully green.",
    },
  ],
  strategyTitle: "Tips and strategy for Sedecordle",
  strategy: [
    {
      title: "Use a fixed four-word opening",
      body: "Four starters covering around twenty common letters give all sixteen boards a flood of early clues. Decide them in advance and never change them.",
    },
    {
      title: "Treat it as sixteen small puzzles",
      body: "Don't try to hold all sixteen boards in focus at once. Solve them one at a time and set each finished board aside.",
    },
    {
      title: "Take advantage of no time limit",
      body: "There is no clock. Slow down, double-check each board's clues, and only commit a finishing guess when you are sure.",
    },
    {
      title: "Finish the certain boards, chase the stubborn ones",
      body: "Always collect a board you are sure of, then spend information-gathering guesses on the few grids still hiding their letters.",
    },
    {
      title: "Keep every board's clues separate",
      body: "With sixteen grids it is easy to mix up clues. Confirm which board you are looking at before acting on a green or yellow.",
    },
    {
      title: "Graduate from Octordle first",
      body: "Sedecordle is far easier once eight boards feel routine. Master Octordle, then add the extra eight.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Solve eight boards in parallel in thirteen guesses." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/dordle", name: "Dordle", thumb: "dordle", blurb: "Solve two boards in parallel in seven guesses." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles to warm up." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Enter your clues to reveal every possible answer." },
  ],
  faqTitle: "Sedecordle frequently asked questions",
  faq: [
    { q: "What is Sedecordle?", a: "Sedecordle is a word game where you solve sixteen Wordle puzzles at the same time. Every guess is applied to all sixteen boards, and you have twenty-one guesses to crack them all." },
    { q: "How many guesses do I get in Sedecordle?", a: "You get twenty-one guesses for the whole set of sixteen words, just over one attempt per board, which is why a long information-gathering opening is essential." },
    { q: "Why is it called Sedecordle?", a: "The name comes from the Latin word for sixteen, reflecting the sixteen boards you solve at once." },
    { q: "Is there a time limit?", a: "No. Sedecordle has no clock, so you can take as long as you need to work methodically through all sixteen boards." },
    { q: "Is Sedecordle the hardest of these games?", a: "It is the largest. Each individual board is an ordinary Wordle, but tracking sixteen at once makes it the ultimate endurance test of the format." },
    { q: "What is a good opening for Sedecordle?", a: "A fixed four-word opening covering around twenty common letters floods all sixteen boards with early clues before you start finishing them off." },
    { q: "How do I keep track of sixteen boards?", a: "Impose order on the chaos by working the grid in quadrants. Split the sixteen boards into four groups of four and give each group your full attention in turn. Because every guess applies to all sixteen anyway, the boards you are not watching keep advancing in the background, so several are often closer to solved by the time you circle back." },
    { q: "Why do people give up on Sedecordle?", a: "Almost always because of disorganisation rather than difficulty. Each individual board is an ordinary, solvable puzzle, but trying to hold all sixteen in focus at once is overwhelming. The players who finish treat solved boards as closed and stop looking at them, shrinking the field they have to monitor with every win." },
    { q: "Is Sedecordle free?", a: "Yes. Sedecordle is completely free to play, with no download, account or sign-up required." },
  ],
  ratingValue: 4.4,
  ratingCount: 2987,
};
