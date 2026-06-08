import type { GameArticle } from "./types";

export const unlimited: GameArticle = {
  path: "/unlimited",
  name: "Wordle Unlimited",
  hero: {
    thumb: "wordle",
    alt: "Wordle Unlimited board showing green, yellow and gray letter tiles after several guesses",
    caption: "Wordle Unlimited gives you a fresh five-letter puzzle every time you hit New Game.",
  },
  appDescription:
    "Play Wordle Unlimited free online. There is no daily limit, so you can solve as many random five-letter word puzzles as you like in six guesses, with green, yellow and gray clues.",
  introTitle: "Wordle Unlimited: play as many puzzles as you want",
  intro: [
    [
      "If one puzzle a day is never enough, ",
      { text: "Wordle Unlimited", href: "/unlimited" },
      " is the mode you have been looking for. It keeps the rules you already know, including six guesses, a hidden five-letter word, and the familiar green, yellow and gray tiles, but strips out the single thing that frustrates everyone about the original game: the wait. The moment you finish one word, you tap New Game and a brand-new answer is ready. There is no countdown to midnight and no \"come back tomorrow\" screen.",
    ],
    [
      "That small change turns a 30-second daily ritual into something you can actually sit down and practise. Whether you have five spare minutes in a queue or you want to grind out twenty rounds in a row to sharpen your opening word, the unlimited format lets the game move at your pace instead of the clock's.",
    ],
  ],
  sections: [
    {
      heading: "What makes Wordle Unlimited different",
      body: [
        [
          "The classic daily game gives everyone on the planet the same word and locks you out until the next day. That shared-word design is what makes the daily fun to talk about, but it is also its biggest limitation. Unlimited flips the model: every game pulls a random answer from the same curated dictionary of common five-letter words, so the puzzles feel exactly like the originals, just without the gate.",
        ],
        [
          "Because the answers are drawn from real, everyday vocabulary rather than obscure terms, you never feel cheated by a word you have never seen. The difficulty comes from deduction, not from trivia. If you enjoy the ",
          { text: "daily Wordle", href: "" },
          " but wish you could keep going, this is the natural next step, and it pairs nicely with the harder multi-board variants once you want a bigger challenge.",
        ],
      ],
    },
    {
      heading: "Why unlimited play helps you improve",
      body: [
        [
          "Skill in word games is mostly pattern recognition, and pattern recognition is built through repetition. One puzzle a day takes weeks to expose you to the common letter shapes English keeps reusing. Twenty puzzles in an afternoon teaches you the same lessons far faster.",
        ],
        [
          "Players who switch to unlimited play almost always report the same progression: their average guess count drops, they stop wasting early turns, and they start recognising likely answers from just two clues. It becomes a genuinely useful warm-up before tackling the harder modes like ",
          { text: "Quordle", href: "/quordle" },
          " or ",
          { text: "Octordle", href: "/octordle" },
          ", where a strong, well-practised opening matters even more.",
        ],
      ],
      list: [
        "No daily limit, so you can start a new word the instant you finish the last one.",
        "The same trusted five-letter dictionary as the daily puzzle.",
        "Perfect for testing and refining your opening word.",
        "Works fully offline once the page has loaded, and your progress lives in your browser.",
        "Free, with no account, no sign-up and no download.",
      ],
    },
    {
      heading: "Hard Mode and accessibility",
      body: [
        [
          "Unlimited respects every setting from the main game. Turn on Hard Mode and any clue you have revealed must be reused in every later guess. Greens stay locked in place and yellows must reappear somewhere. It is the cleanest way to stop yourself from \"wasting\" letters and it forces tighter, more disciplined play.",
        ],
        [
          "Colorblind mode swaps the green-and-yellow palette for a high-contrast blue-and-orange scheme so the clues stay readable for everyone, and dark mode keeps things comfortable for late-night sessions. All of these carry over automatically, so you only set them once.",
        ],
      ],
    },
    {
      heading: "Who Wordle Unlimited is for",
      body: [
        [
          "Unlimited play suits two very different kinds of player. The first is the completionist who simply cannot stand being told to wait. For them, the appeal is obvious: the game ends only when they decide to stop. The second, and arguably the one who benefits most, is the improver who treats each session as deliberate practice rather than idle fun.",
        ],
        [
          "If you fall into the second camp, unlimited mode is the closest thing the format has to a training gym. You can set yourself targets, such as solving ten words in a row in four guesses or fewer, or never letting a board reach the sixth row, and actually measure your progress, because you are not capped at a single attempt a day. That kind of focused repetition is what turns a casual solver into someone who routinely cracks the daily word in three.",
        ],
        [
          "It is also a low-stakes place to experiment. Want to try a wild new opening word, or test how you cope without your favourite starter? In the daily game a failed experiment costs you the whole day. Here it costs you nothing, because you just hit New Game and try again. For players moving up to ",
          { text: "Dordle", href: "/dordle" },
          " and ",
          { text: "Quordle", href: "/quordle" },
          ", that freedom to fail and retry is exactly what makes the harder modes click faster.",
        ],
      ],
    },
  ],
  howToTitle: "How to play Wordle Unlimited",
  howToSteps: [
    {
      title: "Type your first guess",
      body: "Enter any valid five-letter word and press Enter. There is no penalty for guessing, so use the first try to test a spread of common letters.",
    },
    {
      title: "Read the color clues",
      body: "Green means the letter is correct and in the right spot, yellow means it is in the word but in a different position, and gray means it is not in the word at all.",
    },
    {
      title: "Narrow it down",
      body: "Keep your greens in place, move your yellows to new positions, and avoid every gray letter on your next attempt.",
    },
    {
      title: "Solve it in six tries",
      body: "You have six guesses to find the hidden word. Each guess should remove as many remaining candidates as possible.",
    },
    {
      title: "Hit New Game and repeat",
      body: "When you win, or run out of guesses, press New Game for a fresh random word straight away. No waiting, no limit.",
    },
  ],
  strategyTitle: "Tips and strategy for Wordle Unlimited",
  strategy: [
    {
      title: "Lock in a strong opening word",
      body: "Use the unlimited format to test starters like SLATE, CRANE or AUDIO until you find one that consistently lights up clues. A good opener should cover several high-frequency letters at once.",
    },
    {
      title: "Spend a guess on pure information",
      body: "When you are unsure, your second guess does not have to be a real attempt at the answer. Playing a word full of brand-new letters can eliminate five more options in a single move.",
    },
    {
      title: "Mind doubled letters",
      body: "Random answers can repeat a letter, so do not rule out words like LEVEL or MAMMA. If you are stuck with one slot left, a double is often the culprit.",
    },
    {
      title: "Watch common word endings",
      body: "Patterns like -OUND, -IGHT, -ENCE and -ALLY appear constantly. Spotting the tail of a word frequently hands you the last two or three tiles for free.",
    },
    {
      title: "Use repetition to build instinct",
      body: "Play several rounds back-to-back. The more answers you see, the faster you will recognise the likely word from limited clues, and that instinct is the whole point of unlimited play.",
    },
    {
      title: "Turn on Hard Mode once you are comfortable",
      body: "Hard Mode forces you to reuse every clue you uncover. It is the single best way to break the habit of throwing away revealed letters.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle, one shared word a day." },
    { path: "/dordle", name: "Dordle", thumb: "dordle", blurb: "Solve two boards in parallel in seven guesses." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Solve eight boards at once in thirteen guesses." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Enter your clues to reveal every possible answer." },
    { path: "/archive", name: "Wordle Archive", thumb: "archive", blurb: "Replay past daily puzzles you may have missed." },
  ],
  faqTitle: "Wordle Unlimited frequently asked questions",
  faq: [
    { q: "Is Wordle Unlimited free?", a: "Yes. It is completely free with no account, no download and no sign-up. Open the page and start playing immediately." },
    { q: "How many words can I play in a day?", a: "As many as you want. The whole point of the unlimited mode is that there is no daily cap, so a new random word loads the instant you finish the last one." },
    { q: "Are the words different from the daily puzzle?", a: "They come from the same curated dictionary of common five-letter words, so they feel identical to the daily game. The only difference is that the answer is chosen randomly each round instead of being shared by everyone." },
    { q: "Can letters repeat in the answer?", a: "Yes. Just like the original, the hidden word can contain the same letter more than once, so do not rule out doubled letters." },
    { q: "Does Hard Mode work in Unlimited?", a: "Yes. Enable Hard Mode in settings and every clue you reveal must be reused on later guesses, so greens stay fixed and yellows must appear somewhere." },
    { q: "Is my progress saved?", a: "Your settings and stats are stored locally in your browser, so they persist between sessions on the same device without any login." },
    { q: "Can I play offline?", a: "Once the page has loaded, the game runs entirely in your browser, so a brief loss of connection will not interrupt your round." },
  ],
  ratingValue: 4.6,
  ratingCount: 5219,
};
