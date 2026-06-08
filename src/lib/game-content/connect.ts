import type { GameArticle } from "./types";

export const connect: GameArticle = {
  path: "/connect",
  name: "Connect",
  hero: {
    thumb: "connect",
    alt: "Connect puzzle showing a four-by-four grid of word tiles in four colored groups",
    caption: "Connect: sort sixteen words into the four hidden groups they belong to.",
  },
  appDescription:
    "Play Connect free online: sort sixteen words into four hidden groups of four that share a connection. A daily word-association puzzle.",
  introTitle: "Connect: group the words",
  intro: [
    [
      { text: "Connect", href: "/connect" },
      " swaps spelling for lateral thinking. You are shown a grid of sixteen words, and your job is to sort them into four secret groups of four, where each group shares some hidden connection. It might be a category, a theme, a wordplay trick, or something you only spot once three of the four words click into place.",
    ],
    [
      "Where ",
      { text: "Wordle", href: "" },
      " tests how you deduce letters, Connect tests how you see relationships between whole words. It is a daily association puzzle that looks easy and routinely is not, because the words are deliberately chosen to fit more than one group at first glance.",
    ],
  ],
  sections: [
    {
      heading: "How Connect works",
      body: [
        [
          "The board is a four-by-four grid of sixteen words. Hidden inside it are four groups of four, each held together by a theme, say \"types of bridge,\" \"words that precede STAR,\" or \"anagrams of body parts.\" You select four words you believe belong together and submit them as a group.",
        ],
        [
          "Get a group right and those four words lock in with their own color. Get it wrong and you lose one of your limited mistakes. The puzzle is solved when all four groups are correctly identified. The real challenge is that several words will look like they fit two or three different groups until you untangle which connection is the intended one.",
        ],
      ],
    },
    {
      heading: "The overlap is the whole trick",
      body: [
        [
          "Connect is designed around misdirection. A word like BASS could belong to a group of fish, a group of musical terms, or a group of voice types. The puzzle deliberately seeds these overlaps so that the obvious grouping is often a trap that steals words from the group where they actually belong.",
        ],
        [
          "This is why the safest move is rarely to start with the group you spot first. Instead, find the four words that can only belong to one group, the ones with no plausible second home, and build outward from that certainty. Solving Connect is as much about ruling words out as it is about spotting connections.",
        ],
      ],
    },
    {
      heading: "Why Connect is so satisfying",
      body: [
        [
          "The pleasure of Connect is the moment a category snaps into focus and three scattered words suddenly make sense together. It rewards general knowledge, wordplay instinct and patience in equal measure, and because there is a fresh puzzle each day it never feels repetitive.",
        ],
        [
          "It also sits nicely alongside the other word games here. If ",
          { text: "SpellBee", href: "/spellbee" },
          " trains your eye for which letters combine, Connect trains your ear for which meanings combine, and a quick round of ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " makes a great warm-up before you tackle the day's grouping.",
        ],
      ],
      list: [
        "Sixteen words hide four secret groups of four.",
        "Each group is held together by a theme or connection.",
        "You have a limited number of mistakes, so guess carefully.",
        "Words are chosen to overlap and mislead between groups.",
        "A fresh puzzle each day; free with no account needed.",
      ],
    },
    {
      heading: "Reading the difficulty of the four groups",
      body: [
        [
          "Part of what makes Connect so clever is that the four groups are rarely the same difficulty, and learning to read that range is a skill in itself. Most puzzles include one fairly obvious group that almost anyone will spot, one or two trickier groups that take some thought, and a final group built on a twist: wordplay, a hidden second meaning, or a connection you only see once everything else is gone.",
        ],
        [
          "Knowing this changes how you play. The obvious group is a trap as often as a gift, because the puzzle deliberately seeds words that look like they belong to it but actually belong to a harder group. So rather than rushing to lock in the easy four, it is often smarter to solve the trickiest group first, since once those words are removed the obvious group can no longer steal them.",
        ],
        [
          "Working from hardest to easiest also protects your limited mistakes. The final group solves itself by elimination once the other three are locked, so every difficult group you crack early makes the rest of the board clearer and safer. It is a puzzle that rewards reading the whole picture before committing, the same patient, see-the-connections instinct that helps with ",
          { text: "SpellBee", href: "/spellbee" },
          " and the daily ",
          { text: "Wordle", href: "" },
          " alike.",
        ],
      ],
    },
  ],
  howToTitle: "How to play Connect",
  howToSteps: [
    {
      title: "Read all sixteen words",
      body: "Before selecting anything, scan the whole grid and note any obvious themes as well as words that could fit more than one group.",
    },
    {
      title: "Find the safest group first",
      body: "Look for four words that can only belong together. Starting from certainty protects you from the puzzle's deliberate overlaps.",
    },
    {
      title: "Select four and submit",
      body: "Tap the four words you think share a connection and submit them as a group to check your answer.",
    },
    {
      title: "Mind your mistakes",
      body: "A wrong group costs you one of your limited guesses, so only submit a group when you are confident, especially early on.",
    },
    {
      title: "Solve all four groups",
      body: "Keep sorting until every word is locked into its correct color group. Solve all four before running out of mistakes to win.",
    },
  ],
  strategyTitle: "Tips and strategy for Connect",
  strategy: [
    {
      title: "Start with the unambiguous words",
      body: "Identify words that can only belong to one group and build from there. The certain connections anchor everything else.",
    },
    {
      title: "Watch for deliberate overlaps",
      body: "If a word seems to fit two groups, the puzzle probably intends it for the less obvious one. Treat easy matches with suspicion.",
    },
    {
      title: "Solve by elimination",
      body: "Once three groups are locked, the last four words form the final group automatically, so nailing three earns you the fourth for free.",
    },
    {
      title: "Look beyond categories",
      body: "Connections are not always topical. Groups can be anagrams, hidden words, or shared prefixes and suffixes, so think about the words themselves too.",
    },
    {
      title: "Don't rush the first submission",
      body: "Your mistakes are limited. It is worth spending extra time confirming a group before you commit, rather than guessing and burning a life.",
    },
    {
      title: "Come back with fresh eyes",
      body: "If you are stuck, stepping away and returning often makes a hidden connection obvious. There is no clock forcing a quick answer.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "/spellbee", name: "SpellBee", thumb: "spellbee", blurb: "Make as many words as you can from seven letters." },
    { path: "/squares", name: "Squares", thumb: "squares", blurb: "Link adjacent letters in a 4×4 grid to spell words." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board word puzzles." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/archive", name: "Wordle Archive", thumb: "archive", blurb: "Replay past daily puzzles you may have missed." },
  ],
  faqTitle: "Connect: frequently asked questions",
  faq: [
    { q: "What is Connect?", a: "Connect is a word-association puzzle where you sort sixteen words into four hidden groups of four. Each group shares a theme or connection that you have to work out." },
    { q: "How many mistakes can I make?", a: "You have a limited number of incorrect guesses, so it pays to submit a group only when you are confident it is right." },
    { q: "Why do some words seem to fit two groups?", a: "The puzzle deliberately includes overlapping words to mislead you. The trick is to find which group each word truly belongs to and resist the obvious trap." },
    { q: "What is the best way to start?", a: "Begin with the four words that can only belong to one group. Anchoring on certainty protects you from the deliberate overlaps elsewhere in the grid." },
    { q: "Is there a new Connect puzzle every day?", a: "Yes. A fresh grouping puzzle is available each day, so there is always a new challenge to solve." },
    { q: "Are the connections always categories?", a: "No. A group might be based on a category, but it can also be anagrams, hidden words, words that all precede or follow the same word, or a shared prefix or suffix. When a themed connection refuses to appear, it is worth looking at the letters and structure of the words themselves rather than only their meanings." },
    { q: "Should I solve the easiest group first?", a: "Not always. The most obvious group is often a trap, because the puzzle seeds words that look like they belong to it but really belong to a harder group. Many experienced players deliberately solve the trickiest group first, so that once those words are removed the obvious group can no longer steal them." },
    { q: "How does the elimination trick work?", a: "Because there are exactly four groups of four, the last group solves itself. Once you have correctly locked in three groups, the four remaining words must form the fourth, so nailing three difficult groups early effectively hands you the final one for free and saves your limited mistakes." },
    { q: "Is Connect free to play?", a: "Yes. Connect is completely free, with no download, account or sign-up required." },
  ],
  ratingValue: 4.4,
  ratingCount: 2756,
};
