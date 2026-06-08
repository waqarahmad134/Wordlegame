import type { GameArticle } from "./types";

export const quordle: GameArticle = {
  path: "/quordle",
  name: "Quordle",
  hero: {
    thumb: "quordle",
    alt: "Quordle game showing four Wordle boards in a two-by-two grid with green, yellow and gray tiles",
    caption: "Quordle: four hidden words, four boards, nine guesses shared between them.",
  },
  appDescription:
    "Play Quordle free online: solve four Wordle puzzles in parallel in nine guesses. Every guess is applied to all four boards at once.",
  introTitle: "Quordle: solve four Wordles in parallel",
  intro: [
    [
      { text: "Quordle", href: "/quordle" },
      " takes the two-board idea and doubles it. You are now hunting four hidden five-letter words at the same time, laid out in a two-by-two grid, and every guess you type lands on all four boards at once. You get nine guesses to clear the whole set, which works out to barely more than two attempts per word.",
    ],
    [
      "That tight guess budget is what makes Quordle so addictive. It is comfortably harder than ",
      { text: "Dordle", href: "/dordle" },
      ", but still far more forgiving than ",
      { text: "Octordle", href: "/octordle" },
      ". For most players it lands in the sweet spot: a real puzzle that rewards planning, without the exhausting marathon feel of the bigger boards.",
    ],
  ],
  sections: [
    {
      heading: "How Quordle works",
      body: [
        [
          "Four independent Wordle grids share one keyboard and one guess counter. When you submit a word it is scored separately against each of the four answers, so a single guess produces four different color patterns. Your job is to read all four at once and decide which word best serves your overall plan.",
        ],
        [
          "With only nine guesses for four words, you cannot afford to chase each board one at a time. The math forces a particular rhythm: spend your opening guesses uncovering as many letters as possible across all four grids, then close out each board with a precise finishing guess once it is narrowed down. Waste two early guesses and you will almost certainly leave at least one board unsolved.",
        ],
      ],
    },
    {
      heading: "Why nine guesses changes everything",
      body: [
        [
          "In standard ",
          { text: "Wordle", href: "" },
          " you have six guesses for one word, a comfortable cushion. In Quordle you have just over two guesses per word, and they are shared. That scarcity is the entire game. You are not really trying to solve four puzzles; you are trying to extract the maximum information from every single guess.",
        ],
        [
          "This is why a disciplined opening matters so much more here. Two strong, non-overlapping opening words can reveal ten different letters across all four boards before you have committed to anything. From there you are usually finishing boards rather than searching for them. If you want to drill that opening, the ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " mode gives you endless single-board reps.",
        ],
      ],
    },
    {
      heading: "Managing four boards without panicking",
      body: [
        [
          "The biggest mental hurdle in Quordle is the urge to solve the first board you can. It feels productive, but jumping on an easy board early often wastes a guess you needed elsewhere. The better instinct is to ask, before every word: \"which guess advances the most boards at once?\"",
        ],
        [
          "Order your finishing moves by certainty. Solve the board you are surest about last, because it will still be solvable later, and spend your scarce middle guesses on the boards that are giving you the least information. Good Quordle players are calm board-managers, not fast guessers.",
        ],
      ],
      list: [
        "Four boards, one shared keyboard and one shared guess count.",
        "Nine total guesses, just over two per word.",
        "Every guess is scored against all four answers at once.",
        "Win only when all four boards turn green.",
        "Free to play, no account or download needed.",
      ],
    },
    {
      heading: "Quordle versus Wordle: what really changes",
      body: [
        [
          "On the surface Quordle is just four Wordles stacked together, but the experience is genuinely different, and understanding why helps you adjust. In standard ",
          { text: "Wordle", href: "" },
          " you have the luxury of chasing the answer. Once you have a few clues you can spend your remaining guesses zeroing in on one specific word. In Quordle that luxury is gone. Four boards and nine shared guesses mean you can almost never afford a guess that only helps a single grid.",
        ],
        [
          "This changes what a \"good guess\" even means. In Wordle the best guess is often the one most likely to be the answer. In Quordle the best guess is usually the one that reveals the most letters across the most boards, even if it has no chance of solving any of them outright. Players who keep playing Quordle like Wordle, hunting for the answer too early, are the ones who routinely strand a board with no guesses left.",
        ],
        [
          "The emotional shift matters too. Quordle rewards patience and calm over speed and instinct. You are managing a portfolio of four puzzles, not racing to a single finish line, and the winning mindset is closer to that of a planner than a sprinter. Get comfortable with that and the jump up to ",
          { text: "Octordle", href: "/octordle" },
          " feels like a natural extension rather than a wall.",
        ],
      ],
    },
  ],
  howToTitle: "How to play Quordle",
  howToSteps: [
    {
      title: "Enter your first guess",
      body: "Type any valid five-letter word and press Enter. It is scored on all four boards at the same time, giving you four sets of clues from one move.",
    },
    {
      title: "Read all four results",
      body: "Each board reacts independently, so the same letter can be green on one grid and gray on another. Scan all four before choosing your next word.",
    },
    {
      title: "Front-load your information",
      body: "Use your first two or three guesses to uncover as many common letters as possible across every board rather than solving any single one.",
    },
    {
      title: "Close boards one by one",
      body: "Once a board narrows to a couple of options, commit a guess to finishing it, but tackle the least certain boards first.",
    },
    {
      title: "Clear all four in nine guesses",
      body: "You have nine guesses for the whole set. The puzzle is solved only when every board is fully green.",
    },
  ],
  strategyTitle: "Tips and strategy for Quordle",
  strategy: [
    {
      title: "Use a fixed two-word opening",
      body: "Pick two starters that share no letters and cover ten common ones between them. A reliable opening removes guesswork and gives all four boards a head start.",
    },
    {
      title: "Always ask which guess helps most boards",
      body: "Before every word, look for the guess that advances the largest number of grids at once. Information that serves four boards beats a clever guess that only helps one.",
    },
    {
      title: "Finish the certain board last",
      body: "If you already know a board's answer, it can wait. It will still be there in two guesses. Spend your scarce turns on the boards that are still resisting.",
    },
    {
      title: "Don't waste guesses on solved boards",
      body: "Never spend a whole guess just to confirm something you already know. Every word should pull its weight on the boards that remain.",
    },
    {
      title: "Watch for shared letters and endings",
      body: "Common tails like -OUND, -IGHT and -ALLY repeat across boards. Spotting one pattern can unlock two grids in a single move.",
    },
    {
      title: "Step up from Dordle",
      body: "If four boards feel chaotic, spend time on Dordle first. Two boards build the split-attention habit that makes Quordle click.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "/dordle", name: "Dordle", thumb: "dordle", blurb: "Solve two boards in parallel in seven guesses." },
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Step up to eight boards in thirteen guesses." },
    { path: "/sedecordle", name: "Sedecordle", thumb: "sedecordle", blurb: "Sixteen boards at once in twenty-one guesses." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles to warm up." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Enter your clues to reveal every possible answer." },
  ],
  faqTitle: "Quordle: frequently asked questions",
  faq: [
    { q: "What is Quordle?", a: "Quordle is a word game where you solve four Wordle puzzles at the same time. Every guess is applied to all four boards, and you have nine guesses to crack all four hidden words." },
    { q: "How many guesses do I get in Quordle?", a: "You get nine guesses for the whole set of four words, just over two attempts per board, which is what makes the puzzle so tight." },
    { q: "Does my guess apply to all four boards?", a: "Yes. Each word you enter is scored independently against all four answers at once, so one guess can show four different color patterns." },
    { q: "Is Quordle harder than Dordle?", a: "Yes. Quordle has twice as many boards as Dordle and a tighter guess-per-board ratio, so it rewards planning and information-first openings far more." },
    { q: "What is the best opening strategy?", a: "Most strong players use two fixed opening words that share no letters, covering ten common letters between them before adapting to what each board reveals." },
    { q: "Should I solve the easiest board first?", a: "Usually no. A board you are sure about can wait, so spend your scarce guesses on the boards giving you the least information first." },
    { q: "How is Quordle different from playing Wordle four times?", a: "The guesses are shared, which changes everything. In standard Wordle the best guess is often the one most likely to be the answer, but in Quordle the best guess is usually the one that reveals the most letters across the most boards, even if it cannot win any of them outright. You are managing four puzzles at once, not solving them in sequence." },
    { q: "What mindset works best for Quordle?", a: "Patience over speed. Quordle rewards calm board-management rather than fast guessing, so the winning approach is closer to that of a planner than a sprinter. Get comfortable with that and the jump up to Octordle and Sedecordle feels like a natural extension rather than a wall." },
    { q: "Is Quordle free?", a: "Yes. Quordle is completely free to play with no download, account or sign-up required." },
  ],
  ratingValue: 4.6,
  ratingCount: 4471,
};
