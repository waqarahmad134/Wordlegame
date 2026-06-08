import type { HomeContent } from "./types";

export const en: HomeContent = {
  h1: "Wordle: The Ultimate Word Guessing Game",
  intro:
    "Wordle is a daily word puzzle where you have six tries to guess a hidden five-letter word. After every guess the tiles change color to show how close you are: green for a letter in the right place, yellow for a letter in the word but the wrong place, and gray for a letter that is not in the word at all. A brand-new puzzle unlocks every day, and everyone plays the same word.",
  howToTitle: "How to play Wordle",
  howToSteps: [
    {
      title: "Type your first guess",
      body: "Enter any valid five-letter word and press Enter. There is no penalty for guessing, so use your first try to test common letters.",
    },
    {
      title: "Read the colors",
      body: "Green means the letter is correct and in the right spot. Yellow means the letter is in the word but somewhere else. Gray means the letter is not in the word.",
    },
    {
      title: "Refine your next guess",
      body: "Keep the green letters in place, move the yellow letters somewhere new, and avoid the gray letters entirely on your next attempt.",
    },
    {
      title: "Solve it in six tries",
      body: "You have six guesses to find the hidden word. Each guess narrows the possibilities, so think before you commit.",
    },
    {
      title: "Come back tomorrow",
      body: "The daily word resets at midnight. Share your color grid with friends and compare how many tries it took without spoiling the answer.",
    },
  ],
  moreGamesTitle: "More word games",
  moreGames: [
    { path: "/unlimited", name: "Unlimited", thumb: "wordle", blurb: "Play as many random puzzles as you like, no daily limit." },
    { path: "/dordle", name: "Dordle", thumb: "dordle", blurb: "Solve two boards in parallel in seven guesses." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Solve eight boards in parallel in thirteen guesses." },
    { path: "/sedecordle", name: "Sedecordle", thumb: "sedecordle", blurb: "Solve sixteen boards at once in twenty-one guesses." },
    { path: "/spellbee", name: "SpellBee", thumb: "spellbee", blurb: "Make as many words as you can from seven letters." },
    { path: "/connect", name: "Connect", thumb: "connect", blurb: "Sort sixteen words into four hidden groups of four." },
    { path: "/squares", name: "Squares", thumb: "squares", blurb: "Link adjacent letters in a 4×4 grid to spell words." },
    { path: "/custom", name: "Custom Word", thumb: "custom", blurb: "Hide your own word and share a link with friends." },
    { path: "/multiplayer", name: "Multiplayer", thumb: "multiplayer", blurb: "Race a friend in real time inside a private room." },
    { path: "/solver", name: "Solver", thumb: "solver", blurb: "Stuck? Enter your clues and see every possible answer." },
    { path: "/archive", name: "Archive", thumb: "archive", blurb: "Replay past daily puzzles you may have missed." },
  ],
  languageTitle: "Choose a language",
  languageIntro:
    "Wordle is available in many languages. Each version uses its own dictionary and keyboard layout, so you can play in the one you know best.",
  tipsTitle: "Tips for playing Wordle",
  tips: [
    { title: "Open with a strong first word", body: "Pick a word that covers several common letters. A balanced mix of vowels and frequent consonants gives you the most information from one guess." },
    { title: "Pay attention to position", body: "A yellow tile tells you the letter is in the word, just not where you placed it. Try a different slot next time and keep notes in your head." },
    { title: "Do not reuse gray letters", body: "Once a letter is gray you have ruled it out completely. Burning a guess on a word that contains it just wastes a turn." },
    { title: "Look for letter patterns", body: "English has a lot of recurring shapes, such as common endings like -ING, -OUND, and -IGHT. Watching for them often locks in the last two or three tiles." },
    { title: "Try familiar word shapes", body: "When several letters fit, lean toward everyday words you would actually say or read. The answer is almost never obscure." },
    { title: "Rule out groups of letters early", body: "Use your second or third guess to test brand-new letters even if it cannot win the round. Eliminating five more letters is usually worth it." },
    { title: "Stay calm and think it through", body: "There is no clock. Slow down on the last two guesses and run through the remaining candidates in your head before committing." },
    { title: "Use a solver sparingly", body: "A solver is great for learning, but using it every day robs you of the satisfaction. Keep it as a fallback when you are truly stuck." },
    { title: "Practice regularly", body: "The more puzzles you play, the more familiar the patterns become. A short daily round is enough to keep your skills sharp." },
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "How many guesses do I get?", a: "You have six guesses to find the hidden word. Every guess must be a real word of the correct length." },
    { q: "What do the colors mean?", a: "Green marks a letter in the correct position, yellow marks a letter that is in the word but in a different position, and gray marks a letter that is not in the word." },
    { q: "Is there a new word every day?", a: "Yes. The daily puzzle gives everyone the same word, and it changes at midnight. If you want more, the Unlimited mode never runs out." },
    { q: "Can I play more than once a day?", a: "The daily word is once per day, but Unlimited, the word-length variants, and custom games let you play as much as you want." },
    { q: "Can letters repeat in the answer?", a: "Yes. The hidden word can contain the same letter more than once, so do not rule out doubled letters." },
    { q: "What is Hard Mode?", a: "In Hard Mode any clue you have revealed must be used in every later guess: greens stay put and yellows must appear somewhere." },
    { q: "How do I share my result?", a: "After you finish, the share button copies a spoiler-free grid of colored squares showing how many tries it took." },
    { q: "Can I play in other languages?", a: "Yes. Use the language selector to switch the interface and the word list to one of the supported languages." },
  ],
  advantagesTitle: "Advantages of the Wordle game",
  advantages: [
    { icon: "book", title: "Grows your vocabulary", body: "Guessing and reading new words every day is a painless way to pick up spelling and word knowledge." },
    { icon: "lightning", title: "Free and instant", body: "No download, no sign-up, no payment. Open the page and start playing right away." },
    { icon: "puzzle", title: "Sharpens logic", body: "Each clue narrows the field. Working out the answer is a small daily exercise in deduction." },
    { icon: "brain", title: "A gentle brain workout", body: "A few focused minutes of pattern-finding keeps your mind active without feeling like work." },
    { icon: "clock", title: "No time pressure", body: "There is no clock. Take as long as you like to think through each guess." },
    { icon: "share", title: "Fun to share", body: "Compare your color grid with friends and family and see who solved it in the fewest tries." },
  ],
  ratingTitle: "Rate the game",
  ratingValue: 4.3,
  ratingCount: 3847,
};
