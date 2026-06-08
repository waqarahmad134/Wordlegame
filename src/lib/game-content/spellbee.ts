import type { GameArticle } from "./types";

export const spellbee: GameArticle = {
  path: "/spellbee",
  name: "SpellBee",
  hero: {
    thumb: "spellbee",
    alt: "SpellBee puzzle showing a honeycomb of seven letters with a highlighted centre letter",
    caption: "SpellBee: build as many words as you can from seven letters, using the centre one every time.",
  },
  appDescription:
    "Play SpellBee free online: make as many words as you can from seven letters. Every word must use the centre letter, and finding the pangram earns a bonus.",
  introTitle: "SpellBee: make words from seven letters",
  intro: [
    [
      { text: "SpellBee", href: "/spellbee" },
      " is a different kind of word game from the grid puzzles. Instead of guessing one hidden answer, you are handed seven letters arranged in a honeycomb and challenged to build as many valid words as you can from them. There is one catch that shapes every word: the letter in the centre of the hive must appear in every single answer you submit.",
    ],
    [
      "It is open-ended, relaxing and quietly addictive. There is no six-guess limit and no failure state, just a growing list of words and a rising score. If the grid-based modes like ",
      { text: "Wordle", href: "" },
      " are about deduction, SpellBee is about vocabulary and discovery: how many words are actually hiding in those seven letters?",
    ],
  ],
  sections: [
    {
      heading: "How SpellBee works",
      body: [
        [
          "Seven distinct letters are laid out as a hexagonal hive, with one of them highlighted in the centre. Your task is to spell words at least four letters long, and every word must include that centre letter. Letters can be reused as many times as you like within a single word, so a hive containing the letter T could yield ATTEST even though there is only one T on screen.",
        ],
        [
          "Each valid word adds to your score, with longer words worth more. Hidden somewhere in most puzzles is a pangram, a word that uses all seven letters at least once, and finding it is the satisfying centrepiece of every round, usually worth a generous bonus.",
        ],
      ],
    },
    {
      heading: "The pangram is the prize",
      body: [
        [
          "The single most rewarding moment in SpellBee is spotting the pangram. Because it uses every one of the seven letters, it is worth the most points and it confirms you have understood the full potential of the hive. Many players treat the rest of the round as a warm-up and quietly hunt for the pangram the whole time.",
        ],
        [
          "A good way to find it is to look at the seven letters as a set and ask what theme connects them. Two-vowel hives often hide a single obvious long word; three-vowel hives tend to support several. Once you see one word that uses all seven, you have cracked the heart of the puzzle.",
        ],
      ],
    },
    {
      heading: "Why SpellBee builds vocabulary",
      body: [
        [
          "Because SpellBee rewards quantity, it pushes you to dredge up words you rarely think about: the slightly unusual ones, the longer forms, the words you know but never use. That gentle pressure to keep finding \"just one more\" is exactly what makes it such a good vocabulary workout.",
        ],
        [
          "It also pairs well with the deduction games. The instinct SpellBee builds, seeing which letters combine into real words, is the same instinct that helps you pick smart guesses in ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " or untangle the groupings in ",
          { text: "Connect", href: "/connect" },
          ". Different puzzles, one underlying word sense.",
        ],
      ],
      list: [
        "Seven letters, every word must use the centre one.",
        "Words must be at least four letters long.",
        "Letters can be reused within a single word.",
        "Find the pangram, a word using all seven letters, for a bonus.",
        "No guess limit and no failure state; play at your own pace.",
      ],
    },
    {
      heading: "Scoring, ranks and the joy of one more word",
      body: [
        [
          "What keeps people coming back to SpellBee is the way the score quietly pulls you forward. Each word adds points, longer words add more, and the pangram delivers a satisfying spike, so there is always a reason to look for just one more answer before you stop. Unlike the grid games, there is no single moment of winning or losing. Instead there is a slow, addictive climb as your word list grows.",
        ],
        [
          "That open-ended scoring is also what makes the game so personal. Two players given the same seven letters will rarely find the same set of words, because everyone's vocabulary leans in a different direction. One person spots all the cooking terms, another finds the nautical words, a third stumbles onto a run of plurals nobody else thought to try. The puzzle becomes a quiet mirror of what is in your head.",
        ],
        [
          "The real trap, in the best way, is the feeling that you have surely found everything, only to spot an obvious word you walked straight past. That \"how did I miss that?\" moment is the heart of SpellBee, and it is why stepping away and returning with fresh eyes is such a powerful tactic. If you enjoy that hunt for hidden words, the grid-based ",
          { text: "Squares", href: "/squares" },
          " scratches a very similar itch.",
        ],
      ],
    },
  ],
  howToTitle: "How to play SpellBee",
  howToSteps: [
    {
      title: "Look at the seven letters",
      body: "Study the hive and note the highlighted centre letter. Every word you make has to contain it, so it anchors your whole search.",
    },
    {
      title: "Spell a word of four or more letters",
      body: "Click or type letters to build a word at least four letters long that includes the centre letter, then submit it.",
    },
    {
      title: "Reuse letters freely",
      body: "Any letter can appear multiple times in one word even though it shows only once in the hive, which opens up far more possibilities.",
    },
    {
      title: "Hunt for the pangram",
      body: "Somewhere in the seven letters is a word using all of them. Finding this pangram earns a bonus and is the highlight of each round.",
    },
    {
      title: "Build the longest list you can",
      body: "Keep adding words to raise your score. There is no penalty for trying, so experiment freely until you run dry.",
    },
  ],
  strategyTitle: "Tips and strategy for SpellBee",
  strategy: [
    {
      title: "Start with the common short words",
      body: "Bank the easy four-letter words first to get points on the board, then push toward longer, higher-scoring answers.",
    },
    {
      title: "Try prefixes and suffixes",
      body: "Endings like -ING, -ER, -ED and -IEST and prefixes like RE- and UN- multiply your finds from the same core letters.",
    },
    {
      title: "Always keep the centre letter in mind",
      body: "A word without the centre letter is invalid no matter how clever it is. Build every word around it from the start.",
    },
    {
      title: "Hunt the pangram early",
      body: "Look for one word that uses all seven letters. Finding it early gives you a big score cushion and reveals useful letter combinations.",
    },
    {
      title: "Reuse letters deliberately",
      body: "Remember that letters repeat freely. Doubled-letter words you might otherwise dismiss are often valid and high-scoring.",
    },
    {
      title: "Take your time",
      body: "There is no clock and no limit. Stepping away and coming back with fresh eyes often reveals words you walked straight past.",
    },
  ],
  relatedTitle: "More word games to try",
  related: [
    { path: "/connect", name: "Connect", thumb: "connect", blurb: "Sort sixteen words into four hidden groups of four." },
    { path: "/squares", name: "Squares", thumb: "squares", blurb: "Link adjacent letters in a 4×4 grid to spell words." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board word puzzles." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/archive", name: "Wordle Archive", thumb: "archive", blurb: "Replay past daily puzzles you may have missed." },
  ],
  faqTitle: "SpellBee frequently asked questions",
  faq: [
    { q: "What is SpellBee?", a: "SpellBee is a word game where you make as many words as you can from seven given letters. Every word must contain the highlighted centre letter and be at least four letters long." },
    { q: "What is a pangram in SpellBee?", a: "A pangram is a word that uses all seven of the puzzle's letters at least once. Each round hides at least one, and finding it earns a bonus." },
    { q: "Can I reuse letters in a word?", a: "Yes. Letters can be used more than once in a single word even though each appears only once in the hive, so words with doubled letters are allowed." },
    { q: "Is there a minimum word length?", a: "Yes. Words must be at least four letters long, and every word must include the centre letter." },
    { q: "Is there a time limit in SpellBee?", a: "No. There is no clock and no failure state, so you can take as long as you like to find more words." },
    { q: "How is my score calculated?", a: "Each valid word adds points, with longer words worth more, and the pangram awards a generous bonus on top." },
    { q: "Why do two players find different words?", a: "Because the scoring is open-ended, everyone's vocabulary leans in a different direction. Given the same seven letters, one player finds all the cooking terms, another the nautical words, and a third a run of plurals nobody else tried. The puzzle quietly becomes a mirror of what is in your head, which is part of what makes it so personal." },
    { q: "What should I do when I think I have found everything?", a: "Step away and come back with fresh eyes. The most common SpellBee moment is being sure you have found every word, then instantly spotting an obvious one you walked straight past. Since there is no clock, a short break is one of the most reliable ways to add several more words to your list." },
    { q: "Is SpellBee free to play?", a: "Yes. SpellBee is completely free, with no download, account or sign-up required." },
  ],
  ratingValue: 4.5,
  ratingCount: 3308,
};
