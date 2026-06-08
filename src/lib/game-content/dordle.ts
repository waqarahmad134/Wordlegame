import type { GameArticle } from "./types";

export const dordle: GameArticle = {
  path: "/dordle",
  name: "Dordle",
  hero: {
    thumb: "dordle",
    alt: "Dordle game showing two Wordle boards side by side, each with green, yellow and gray tiles",
    caption: "Dordle: two boards, one keyboard, seven guesses to crack both words.",
  },
  appDescription:
    "Play Dordle free online: solve two Wordle puzzles at the same time in seven guesses. Every letter you type lands on both boards at once.",
  introTitle: "Dordle: solve two Wordles at the same time",
  intro: [
    [
      { text: "Dordle", href: "/dordle" },
      " is the two-board twist on the word game everyone already knows. Instead of one hidden five-letter word, you are chasing two of them at the same time, and there is one rule that changes everything: every guess you type is applied to both boards simultaneously. One word, two sets of clues, side by side.",
    ],
    [
      "You get seven guesses instead of six to make up for the extra board. That single bonus guess sounds generous, but with two answers to find it disappears fast. Dordle is the gateway between the classic single puzzle and the bigger multi-board monsters like ",
      { text: "Quordle", href: "/quordle" },
      " and ",
      { text: "Octordle", href: "/octordle" },
      ". It teaches you how to think on more than one board without overwhelming you.",
    ],
  ],
  sections: [
    {
      heading: "How Dordle works",
      body: [
        [
          "The layout is two Wordle grids placed next to each other. When you enter a word and press Enter, it is scored independently against each hidden answer. The left board might tell you a letter is green while the right board shows the very same letter as gray. Reading those two different results from a single guess is the core skill the game tests.",
        ],
        [
          "Because the two answers are unrelated, a guess that is brilliant for one board can be nearly useless for the other. The challenge is finding words that move you forward on both at once, and knowing when to give up on that balance and commit a guess to finishing a single board before you run out of turns.",
        ],
      ],
    },
    {
      heading: "Why Dordle is the perfect step up",
      body: [
        [
          "Most people who love the daily ",
          { text: "Wordle", href: "" },
          " hit a wall: it ends too quickly. Dordle is the most natural way to add difficulty without changing the rules you already understand. You are not learning a new game; you are learning to split your attention.",
        ],
        [
          "The mental shift is real. In a single-board game you can chase whatever word feels right. In Dordle you have to hold two separate sets of clues in your head and pick guesses that serve a plan, not a hunch. Master that and the jump to four or eight boards stops feeling impossible. If you want endless practice runs first, the ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " mode is a good place to sharpen your opening.",
        ],
      ],
    },
    {
      heading: "Reading two boards at once",
      body: [
        [
          "The trick to Dordle is treating your guesses as a shared resource. Your first two or three words should be high-information openers that test a wide spread of common letters across both grids. Only once each board has narrowed to a handful of candidates do you switch into \"finishing\" mode and aim guesses at one answer at a time.",
        ],
        [
          "A common mistake is solving the easy board immediately and then realising you have burned guesses you needed for the hard one. Resist the urge. The board that is giving you clear greens will usually still be solvable in a turn or two, so spend your scarce early guesses gathering information on the board that is being stubborn.",
        ],
      ],
    },
    {
      heading: "Common Dordle mistakes to avoid",
      body: [
        [
          "Almost everyone who comes to Dordle from the single-board game makes the same handful of errors at first, and recognising them is the fastest way to improve. The most common is tunnel vision: locking onto the board that is going well and pouring guess after guess into it while the second board quietly runs out of road. By the time you look up, you have one guess left for a word you have barely touched.",
        ],
        [
          "The second mistake is mixing up the clues. Because both boards share your keyboard, it is dangerously easy to act on a green from the left board as if it applied to the right. Slow down and confirm which grid a clue belongs to before you build your next word around it. A single crossed wire can cost you the whole game.",
        ],
        [
          "The third is treating the bonus seventh guess as spare change. That extra turn over standard ",
          { text: "Wordle", href: "" },
          " feels generous, so players spend it early and casually, then desperately wish they had it back at the end. Plan as though you have only six guesses and let the seventh be the safety net it is meant to be. Fix these three habits and Dordle stops feeling like luck and starts feeling like a skill you are steadily sharpening.",
        ],
      ],
    },
  ],
  howToTitle: "How to play Dordle",
  howToSteps: [
    {
      title: "Enter your first guess",
      body: "Type any valid five-letter word and press Enter. It is scored on both boards at the same time, giving you two sets of clues from one move.",
    },
    {
      title: "Compare the two results",
      body: "Read each board separately. A letter can be green on one and gray on the other, so check both grids before deciding your next word.",
    },
    {
      title: "Play information first",
      body: "For your opening guesses, choose words that test lots of new common letters rather than trying to win either board straight away.",
    },
    {
      title: "Finish one board at a time",
      body: "Once a board is down to a few options, commit a guess to closing it out before its clues fade from memory.",
    },
    {
      title: "Crack both in seven guesses",
      body: "You have seven guesses total to solve both hidden words. Win only when both boards are green.",
    },
  ],
  strategyTitle: "Tips and strategy for Dordle",
  strategy: [
    {
      title: "Open with two fixed words",
      body: "Many top players use the same two-word opening every game. Together they cover ten different common letters and give both boards a strong start before you adapt.",
    },
    {
      title: "Don't auto-solve the easy board",
      body: "If one board is almost done, it can wait. Spend early guesses on the harder board while you still have turns to spare.",
    },
    {
      title: "Track each board independently",
      body: "Keep the two sets of greens and yellows separate in your mind. The fastest way to fail is to apply one board's clue to the other.",
    },
    {
      title: "Use the seventh guess wisely",
      body: "That extra guess over standard Wordle is your safety net. Plan as if you only have six so the seventh is there when a board fights back.",
    },
    {
      title: "Look for shared letters",
      body: "When both boards still need vowels or a common consonant, a single well-chosen word can advance both at once: pure efficiency.",
    },
    {
      title: "Warm up on single boards",
      body: "If two boards feel like a lot, a few rounds of unlimited single-board play first will steady your openings and make Dordle click faster.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Step up to four boards in nine guesses." },
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Eight boards at once in thirteen guesses." },
    { path: "/sedecordle", name: "Sedecordle", thumb: "sedecordle", blurb: "The ultimate test: sixteen boards in twenty-one guesses." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles to warm up." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Enter your clues to reveal every possible answer." },
  ],
  faqTitle: "Dordle: frequently asked questions",
  faq: [
    { q: "What is Dordle?", a: "Dordle is a word game where you solve two Wordle puzzles at the same time. Every guess you type is applied to both boards, and you have seven guesses to crack both hidden words." },
    { q: "How many guesses do I get in Dordle?", a: "You get seven guesses, one more than standard Wordle, to make up for having two boards to solve instead of one." },
    { q: "Does my guess go on both boards?", a: "Yes. Each word you enter is scored independently against both answers at once, so a single guess can show different colors on each board." },
    { q: "Is Dordle harder than Wordle?", a: "It is more demanding because you must track two separate sets of clues and plan guesses that help both boards, but the underlying rules are identical to Wordle." },
    { q: "Should I solve the easy board first?", a: "Usually no. If one board is nearly solved it can wait a turn. Spend your early guesses gathering clues on the harder board while you still have guesses left." },
    { q: "Is Dordle free to play?", a: "Yes. Dordle is completely free, with no download, account or sign-up required." },
    { q: "What is the most common Dordle mistake?", a: "Tunnel vision. Players lock onto the board that is going well and pour guess after guess into it while the second board quietly runs out of road. The fix is to spend your scarce early guesses gathering information on the harder board and trust that the easy one will still be solvable in a turn or two." },
    { q: "Should I save the bonus seventh guess?", a: "Yes. That extra guess over standard Wordle feels generous, so it is tempting to spend it early and casually, but planning as though you only have six keeps it in reserve as a genuine safety net for when a board fights back at the end." },
    { q: "What comes after Dordle?", a: "Once two boards feel comfortable, try Quordle for four boards, Octordle for eight, or Sedecordle for a sixteen-board marathon." },
  ],
  ratingValue: 4.5,
  ratingCount: 3964,
};
