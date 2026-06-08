import type { GameArticle } from "./types";

export const archive: GameArticle = {
  path: "/archive",
  name: "Wordle Archive",
  hero: {
    thumb: "archive",
    alt: "Wordle Archive shown as a calendar of past daily puzzles ready to replay",
    caption: "Wordle Archive: replay every past daily puzzle you missed, in your own time.",
  },
  appDescription:
    "Play the Wordle Archive free online. Replay past daily Wordle puzzles you missed and catch up on the full back-catalogue of answers.",
  introTitle: "Wordle Archive: play every past daily puzzle",
  intro: [
    [
      "Miss a day? The ",
      { text: "Wordle Archive", href: "/archive" },
      " is where every past daily puzzle lives on, ready to replay whenever you want. Instead of losing a word forever the moment the clock ticks past midnight, you can scroll back through the calendar, pick any previous date, and play that day's exact puzzle as if it were live.",
    ],
    [
      "It is the perfect companion to the daily ",
      { text: "Wordle", href: "" },
      ", which only ever gives you one shot at one word. The archive frees you from that schedule entirely: catch up on the ones you skipped, replay a favourite, or simply binge a streak of puzzles back-to-back when you are in the mood for more than a single round.",
    ],
  ],
  sections: [
    {
      heading: "How the Wordle Archive works",
      body: [
        [
          "The archive presents the full back-catalogue of daily puzzles by date. Choose any past day and you get the same hidden word everyone faced on that date, played on a standard six-guess board with the familiar green, yellow and gray clues. Nothing about the puzzle changes. It is the genuine article, just available on demand.",
        ],
        [
          "That makes it ideal for catching up after a holiday, a busy week, or the day your phone died before you could play. You are never locked out of a word again, and you can work through missed dates at whatever pace suits you, one at a time or a dozen in a sitting.",
        ],
      ],
    },
    {
      heading: "Why replaying past puzzles is worth it",
      body: [
        [
          "Beyond simply catching up, the archive is a fantastic training ground. Because there are so many puzzles available at once, you can play far more words in a session than the once-a-day format ever allows, and volume is exactly what builds the pattern recognition that makes you faster.",
        ],
        [
          "It pairs naturally with the other modes. Work through a run of archive puzzles to warm up, drill openings in ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " for endless random practice, and reach for the ",
          { text: "Wordle Solver", href: "/solver" },
          " afterwards to review any word that stumped you. Together they form a complete practice loop.",
        ],
      ],
      list: [
        "Every past daily puzzle, browsable by date.",
        "Each archived word is the exact puzzle from that day.",
        "Standard six-guess board with the usual colour clues.",
        "Catch up on missed days or replay favourites any time.",
        "Free to play, with no account or download needed.",
      ],
    },
    {
      heading: "Catching up without spoiling yourself",
      body: [
        [
          "One gentle warning when you dive into the archive: it is easy to stumble onto answers for words you have not played yet if you go searching online. The cleanest way to enjoy it is to work forward or backward through dates in order and resist the urge to look anything up. The whole point is the solve.",
        ],
        [
          "If you are using the archive purely to practise rather than to preserve a streak, that pressure disappears and you can play as freely as you like. Either way, the archive turns Wordle from a strict once-a-day habit into something you can dip into on your own schedule.",
        ],
      ],
    },
    {
      heading: "Building a daily practice routine",
      body: [
        [
          "The archive is at its most useful when you stop treating it as a backlog to clear and start treating it as a training plan. Because every past puzzle is available at once, you can build a short, repeatable routine that does far more for your game than a single daily word ever could. A handful of archived puzzles a day, played with intent, compounds quickly into noticeably faster solving.",
        ],
        [
          "A routine that works for many players looks like this: warm up on two or three archived puzzles to get your eye in, then play the live daily for real, then review anything that gave you trouble. The archive supplies the warm-up reps that the once-a-day format simply cannot, so you arrive at the day's puzzle already sharp rather than cold.",
        ],
        [
          "You can also use the archive to drill specific weaknesses. If you always stumble on words with repeated letters, hunt down a run of those and play them back to back until the pattern stops surprising you. Round the session off by feeding any word that beat you into the ",
          { text: "Wordle Solver", href: "/solver" },
          ", and mix in some random ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " play to keep things varied. Together they turn a casual habit into real, measurable improvement.",
        ],
      ],
    },
  ],
  howToTitle: "How to use the Wordle Archive",
  howToSteps: [
    {
      title: "Open the archive",
      body: "Go to the archive page, where past daily puzzles are listed by date for you to browse.",
    },
    {
      title: "Pick a date",
      body: "Scroll to the day you missed, or any day you want to replay, and select it to load that puzzle.",
    },
    {
      title: "Play the puzzle",
      body: "You get the exact hidden word from that date on a standard six-guess board, complete with the usual green, yellow and gray clues.",
    },
    {
      title: "Solve it in six tries",
      body: "Work through the word just as you would the live daily game, using each guess to narrow the possibilities.",
    },
    {
      title: "Move on to the next",
      body: "Finished one? Pick another date and keep going. Catch up on a whole run of missed puzzles in a single sitting.",
    },
  ],
  strategyTitle: "Tips for the Wordle Archive",
  strategy: [
    {
      title: "Use it to practise in volume",
      body: "Play several archived puzzles in a row. The extra reps build the letter-pattern recognition that makes you faster on the live daily.",
    },
    {
      title: "Avoid looking up answers",
      body: "Searching online for an old word risks spoiling puzzles you have not played. Work through dates in order and let yourself solve them honestly.",
    },
    {
      title: "Keep a consistent opening",
      body: "Replaying many puzzles is the perfect chance to test and settle on a strong, reliable first word you can reuse everywhere.",
    },
    {
      title: "Review with the solver",
      body: "When an archived word beats you, enter your clues into the Wordle Solver afterwards to see which guess would have cracked it sooner.",
    },
    {
      title: "Catch up in order",
      body: "Tackling missed days oldest-to-newest keeps things tidy and makes it easy to see how far you have caught up.",
    },
    {
      title: "Mix in other modes",
      body: "Alternate archive runs with unlimited play and the multi-board games to keep practice varied and your skills sharp across formats.",
    },
  ],
  relatedTitle: "More word games and tools",
  related: [
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles, no daily limit." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Enter your clues to reveal every possible answer." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Solve eight boards at once in thirteen guesses." },
    { path: "/custom", name: "Custom Word", thumb: "custom", blurb: "Hide your own word and share a link with friends." },
  ],
  faqTitle: "Wordle Archive: frequently asked questions",
  faq: [
    { q: "What is the Wordle Archive?", a: "The Wordle Archive is a collection of every past daily puzzle, browsable by date. You can replay any previous day's exact word whenever you like, even after the live puzzle has moved on." },
    { q: "Can I play puzzles I missed?", a: "Yes. That is exactly what the archive is for. Pick any date you skipped and play that day's puzzle as if it were live." },
    { q: "Are archived puzzles the same as the originals?", a: "Yes. Each archived word is the genuine puzzle from that date, played on a standard six-guess board with the usual green, yellow and gray clues." },
    { q: "How many past puzzles can I play?", a: "You can work through the full back-catalogue, one at a time or many in a row, and there is no daily limit on archive play." },
    { q: "Will the archive spoil future answers?", a: "Only if you search online for old words. If you simply play through dates in order without looking anything up, there is nothing to spoil." },
    { q: "Is the archive good for practice?", a: "Very. Because so many puzzles are available at once, it lets you play far more words per session than the once-a-day format, which is great for building speed." },
    { q: "How can I use the archive to improve?", a: "Treat it as a training plan rather than a backlog. A good routine is to warm up on two or three archived puzzles, then play the live daily for real, then review anything that gave you trouble. The archive supplies the warm-up repetitions that a single daily word never can, so you arrive at the real puzzle already sharp." },
    { q: "Can I drill specific weaknesses?", a: "Yes. If you always stumble on words with repeated letters, for example, find a run of those in the archive and play them back to back until the pattern stops surprising you. Because so many puzzles are available at once, you can target exactly the kind of word you find hardest." },
    { q: "Is the Wordle Archive free?", a: "Yes. The archive is completely free to play, with no download, account or sign-up required." },
  ],
  ratingValue: 4.5,
  ratingCount: 2522,
};
