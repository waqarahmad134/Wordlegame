import type { GameArticle } from "./types";

export const octordle: GameArticle = {
  path: "/octordle",
  name: "Octordle",
  hero: {
    thumb: "octordle",
    alt: "Octordle game showing eight Wordle boards laid out in a grid with green, yellow and gray tiles",
    caption: "Octordle: eight hidden words solved in parallel within thirteen guesses.",
  },
  appDescription:
    "Play Octordle free online: solve eight Wordle puzzles in parallel in thirteen guesses. Every guess is applied to all eight boards at once.",
  introTitle: "Octordle: solve eight Wordles at once",
  intro: [
    [
      { text: "Octordle", href: "/octordle" },
      " is where the multi-board challenge gets serious. You are solving eight hidden five-letter words at the same time, all sharing one keyboard, and you have thirteen guesses to clear every board. That is barely more than one and a half guesses per word, so there is almost no room for a wasted move.",
    ],
    [
      "If ",
      { text: "Quordle", href: "/quordle" },
      " is the comfortable middle of the multi-board ladder, Octordle is the steep climb just before the summit. It demands real discipline: a fixed opening, ruthless information-gathering, and the patience to leave easy boards alone until the right moment. Clear it and the sixteen-board ",
      { text: "Sedecordle", href: "/sedecordle" },
      " starts to look achievable.",
    ],
  ],
  sections: [
    {
      heading: "How Octordle works",
      body: [
        [
          "Eight Wordle grids are arranged in a tall layout and every word you submit is scored against all eight answers at once. A single guess therefore returns eight separate color patterns, and learning to read them quickly, without confusing one board's clues for another's, is the heart of the game.",
        ],
        [
          "Thirteen guesses for eight words is a deliberately tight budget. It is generous enough that a clear-headed player can finish, but unforgiving of mistakes: throw away two or three early guesses and you will run out before the last boards are solved. Octordle is less about clever single words and more about a sound overall plan.",
        ],
      ],
    },
    {
      heading: "The opening matters more than ever",
      body: [
        [
          "On eight boards, the value of a strong opening compounds. Three carefully chosen opening words can test fifteen different common letters, and on eight grids at once that is an enormous amount of information, often enough to half-solve several boards before you have made a single targeted guess.",
        ],
        [
          "This is why experienced players use the same fixed opening every game. When your first three words are decided in advance, you can spend all of your mental energy reading the eight results instead of agonising over what to type. If you want to lock in that opening through repetition, the ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " mode is the ideal practice ground.",
        ],
      ],
    },
    {
      heading: "Board management under pressure",
      body: [
        [
          "The defining skill in Octordle is restraint. When a board lights up with greens you will want to solve it immediately, but a board you are sure about can wait, because it will still be solvable later. Your scarce guesses are far better spent on the boards that are still hiding their letters.",
        ],
        [
          "Work from least certain to most certain. Use the middle of your guess budget to drag the stubborn boards into focus, and save the boards you have already cracked for the final few turns when you can clear several at once. Players who panic-solve early almost always strand two or three boards at the end with no guesses left.",
        ],
      ],
      list: [
        "Eight boards share one keyboard and one guess counter.",
        "Thirteen total guesses, under two per word.",
        "Every guess is scored against all eight answers at once.",
        "A fixed three-word opening is almost essential.",
        "Free to play, no account or download required.",
      ],
    },
    {
      heading: "Pacing yourself through eight boards",
      body: [
        [
          "Octordle is long enough that how you pace the round matters as much as how you guess. A common failure pattern has nothing to do with vocabulary: a player makes strong opening moves, sees a flood of clues, gets excited, and then burns through the middle of their guess budget solving the four easiest boards in a rush. They reach guess ten feeling great, then discover the four hard boards still have almost nothing on them, with three guesses to share between them.",
        ],
        [
          "The fix is to deliberately stagger your solves. After your fixed opening, resist closing any board you do not have to. Spend the middle third of your guesses pushing information into the stubborn boards while the easy ones sit half-finished but safe. Only in the final stretch do you start cashing in the boards you have been holding, ideally clearing two or three in quick succession at the end.",
        ],
        [
          "It helps to think of your thirteen guesses in three phases: reconnaissance, pressure, and cleanup. The opening is pure reconnaissance, the middle applies pressure to the boards that resist, and the cleanup collects everything you have set up. Players who blur these phases together tend to run out of room; players who keep them distinct almost always finish. The same disciplined pacing carries straight over to the sixteen-board ",
          { text: "Sedecordle", href: "/sedecordle" },
          ".",
        ],
      ],
    },
  ],
  howToTitle: "How to play Octordle",
  howToSteps: [
    {
      title: "Enter your first guess",
      body: "Type any valid five-letter word and press Enter. It is scored on all eight boards at once, returning eight separate sets of clues from one move.",
    },
    {
      title: "Scan every board",
      body: "Read all eight results before deciding your next word. The same letter can be green on one grid and absent on another.",
    },
    {
      title: "Open with information, not answers",
      body: "Use your first three guesses to uncover as many common letters as possible across all boards rather than solving any single one.",
    },
    {
      title: "Finish stubborn boards first",
      body: "Once a board narrows down, close it, but prioritise the boards giving you the least information and leave the certain ones for later.",
    },
    {
      title: "Clear all eight in thirteen guesses",
      body: "You have thirteen guesses for the whole set. The puzzle is won only when every one of the eight boards is fully green.",
    },
  ],
  strategyTitle: "Tips and strategy for Octordle",
  strategy: [
    {
      title: "Commit to a fixed three-word opening",
      body: "Choose three starters that together cover around fifteen common letters with no overlap. Deciding them in advance frees your focus for reading the eight boards.",
    },
    {
      title: "Hunt for the highest-information guess",
      body: "With eight boards in play, the best guess is whichever one advances the most grids at once, not the one that wins a single board.",
    },
    {
      title: "Leave solved boards for the end",
      body: "A board you have already cracked is a guaranteed win you can collect later. Never spend an early guess just to confirm it.",
    },
    {
      title: "Attack the stubborn boards",
      body: "Spend your middle guesses forcing the boards that refuse to reveal letters. They are the ones most likely to strand you if ignored.",
    },
    {
      title: "Keep the eight clue-sets separate",
      body: "The fastest way to lose is to apply one board's green or yellow to another. Read each grid on its own terms.",
    },
    {
      title: "Build up from four boards",
      body: "If eight feels overwhelming, get comfortable on Quordle first. The four-board habits transfer directly and make Octordle far less daunting.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/sedecordle", name: "Sedecordle", thumb: "sedecordle", blurb: "The ultimate test: sixteen boards in twenty-one guesses." },
    { path: "/dordle", name: "Dordle", thumb: "dordle", blurb: "Solve two boards in parallel in seven guesses." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles to warm up." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Enter your clues to reveal every possible answer." },
  ],
  faqTitle: "Octordle: frequently asked questions",
  faq: [
    { q: "What is Octordle?", a: "Octordle is a word game where you solve eight Wordle puzzles at the same time. Every guess is applied to all eight boards, and you have thirteen guesses to crack all eight hidden words." },
    { q: "How many guesses do I get in Octordle?", a: "You get thirteen guesses for the whole set of eight words, under two attempts per board, which is why a strong opening is so important." },
    { q: "Does each guess apply to all eight boards?", a: "Yes. Every word you enter is scored independently against all eight answers at once, returning eight separate color patterns." },
    { q: "Is Octordle harder than Quordle?", a: "Yes. Octordle doubles the boards from four to eight while only adding four extra guesses, so it leaves almost no margin for wasted moves." },
    { q: "What is the best opening for Octordle?", a: "Most strong players use a fixed three-word opening covering around fifteen common letters, decided in advance so they can focus on reading the eight boards." },
    { q: "Should I solve easy boards as soon as I can?", a: "No. A board you are sure of can wait. Spend your scarce guesses on the boards still hiding their letters, and clear the certain ones near the end." },
    { q: "How should I pace a round of Octordle?", a: "Think of your thirteen guesses in three phases: reconnaissance, pressure and cleanup. The opening is pure reconnaissance, the middle applies pressure to the boards that resist, and the cleanup collects the boards you have set up. Players who blur these phases together tend to run out of room, while those who keep them distinct almost always finish." },
    { q: "Why shouldn't I solve the easy boards early?", a: "Because rushing to close the four easiest boards in the middle of the round burns guesses the hard boards need. A board that is nearly solved is a guaranteed win you can collect later, so hold it and spend your scarce middle guesses forcing the stubborn boards to reveal their letters." },
    { q: "Is Octordle free to play?", a: "Yes. Octordle is completely free, with no download, account or sign-up required." },
  ],
  ratingValue: 4.5,
  ratingCount: 3712,
};
