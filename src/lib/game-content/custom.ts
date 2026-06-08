import type { GameArticle } from "./types";

export const custom: GameArticle = {
  path: "/custom",
  name: "Custom Wordle",
  hero: {
    thumb: "custom",
    alt: "Custom Wordle builder showing a secret word being turned into a shareable link",
    caption: "Custom Wordle: hide your own secret word and share a link to challenge friends.",
  },
  appDescription:
    "Create a custom Wordle with your own secret word and share a link to challenge friends. Free, instant, no account needed.",
  introTitle: "Custom Wordle: make your own word",
  intro: [
    [
      { text: "Custom Wordle", href: "/custom" },
      " hands you the keys to the puzzle. Instead of guessing a word the game picked, you choose the secret word yourself, and the builder turns it into a private shareable link. Send that link to a friend, a partner or a group chat, and they get a real Wordle board with your word hidden inside, with the same six guesses and the same green, yellow and gray clues.",
    ],
    [
      "It is the most personal way to play. People use it for inside jokes, surprise messages, marriage proposals, classroom vocabulary, or simply to stump a friend with a word they will never guess. Where the daily ",
      { text: "Wordle", href: "" },
      " connects strangers around one shared word, the custom mode connects the people you actually know around a word that means something to them.",
    ],
  ],
  sections: [
    {
      heading: "How Custom Wordle works",
      body: [
        [
          "The builder is simple: type the word you want to hide, and it generates a unique link that encodes your puzzle. Anyone who opens that link plays a standard Wordle game trying to guess your word. They never see it spelled out, only the colour clues as they guess. You can make the word as easy or as fiendish as you like.",
        ],
        [
          "Because the puzzle lives entirely in the link, there is nothing to install and no account to create. You make a word, you copy a link, you send it. The person on the other end just clicks and plays. It is the fastest way to turn a private word into a real game.",
        ],
      ],
    },
    {
      heading: "Fun ways to use a custom word",
      body: [
        [
          "The custom mode shines whenever the word itself carries meaning. A surprise hidden in a five-letter word lands far better than a plain text message, because the recipient has to work for the reveal, and the moment it clicks is genuinely delightful.",
        ],
        [
          "Teachers use it to drill spelling lists, couples use it to hide pet names and important dates, and friend groups use it to set each other deliberately brutal challenges. If you want to make a whole event of it, you can even race head-to-head in real time using the ",
          { text: "Multiplayer", href: "/multiplayer" },
          " rooms instead.",
        ],
      ],
      list: [
        "Choose any word and hide it behind a shareable link.",
        "Recipients play a standard six-guess Wordle board.",
        "Great for surprises, messages, lessons and challenges.",
        "No account, download or sign-up for you or your friends.",
        "Works on any device straight from the link.",
      ],
    },
    {
      heading: "Tips for choosing a good word",
      body: [
        [
          "A great custom word sits in a sweet spot: hard enough to be a real challenge, but fair enough that the solver has a genuine chance. Words built from common letters give the guesser useful clues; words crammed with rare letters or unusual letter patterns can become almost impossible and stop being fun.",
        ],
        [
          "If your goal is a personal surprise rather than a tough puzzle, lean the other way and pick something the recipient will recognise the instant the greens appear. And if you want to test how guessable your word really is before you send it, run it through the ",
          { text: "Wordle Solver", href: "/solver" },
          " to see how many other words share its clue pattern.",
        ],
      ],
    },
    {
      heading: "Occasions worth a custom word",
      body: [
        [
          "The custom mode really comes alive when you tie it to a moment. A birthday message hidden behind the word CACHE, an anniversary spelled out in a word only the two of you would recognise, a job offer revealed one green tile at a time: the puzzle frames the news in a way a plain message never could, because the recipient earns the reveal instead of just reading it.",
        ],
        [
          "It works just as well for groups as for couples. Teachers turn the week's spelling list into a set of shareable links, running clubs hide the location of the next meetup, and friend groups run a rotating challenge where each person sets the next word. Because there is nothing to install and no account to make, even people who have never played before can join in from a single tap on the link.",
        ],
        [
          "The one rule that keeps it fun is fairness. A meaningful word the recipient will recognise instantly is perfect for a surprise, while a genuinely tough word suits a competitive friend, but a word stuffed with rare letters and no real clues just frustrates. If you are unsure where yours lands, the ",
          { text: "Wordle Solver", href: "/solver" },
          " will show you how guessable it is before you hit send, and for a live showdown you can always move the challenge into a ",
          { text: "Multiplayer", href: "/multiplayer" },
          " room instead.",
        ],
      ],
    },
  ],
  howToTitle: "How to make a Custom Wordle",
  howToSteps: [
    {
      title: "Open the custom builder",
      body: "Go to the custom game page, where you will be asked to enter the secret word you want your friends to guess.",
    },
    {
      title: "Type your secret word",
      body: "Choose any valid word. Make it tricky for a real challenge or meaningful for a personal surprise. It is entirely up to you.",
    },
    {
      title: "Generate the link",
      body: "The builder turns your word into a unique shareable link that encodes the puzzle. Your word stays hidden inside it.",
    },
    {
      title: "Share it anywhere",
      body: "Copy the link and send it by message, email or chat. Anyone who opens it plays your custom puzzle straight away.",
    },
    {
      title: "Watch them guess",
      body: "Your friend gets a standard six-guess board with your word hidden inside, complete with the usual green, yellow and gray clues.",
    },
  ],
  strategyTitle: "Tips for a great Custom Wordle",
  strategy: [
    {
      title: "Aim for a fair challenge",
      body: "Words built from common letters give the guesser real clues. Reserve obscure or rare-letter words for friends who genuinely want a brutal puzzle.",
    },
    {
      title: "Make it personal",
      body: "A pet name, an inside joke or an important date turns the reveal into a moment. The word itself can be the message.",
    },
    {
      title: "Test it before you send",
      body: "Run your word through the Wordle Solver to see how many other words share its clue pattern, a quick gauge of how hard it will be.",
    },
    {
      title: "Match the difficulty to the player",
      body: "A casual friend will enjoy a guessable word; a competitive one will want something that fights back. Choose to fit your audience.",
    },
    {
      title: "Avoid unfair traps",
      body: "Words with lots of repeated letters or very rare letters can be almost impossible to guess. Hard is fun; impossible is frustrating.",
    },
    {
      title: "Turn it into a race",
      body: "If you want live competition rather than a one-off link, set up a multiplayer room and challenge friends to solve the same word in real time.",
    },
  ],
  relatedTitle: "More ways to play",
  related: [
    { path: "/multiplayer", name: "Multiplayer", thumb: "multiplayer", blurb: "Race a friend in real time inside a private room." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles, no daily limit." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Test how guessable your custom word is." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/archive", name: "Wordle Archive", thumb: "archive", blurb: "Replay past daily puzzles you may have missed." },
  ],
  faqTitle: "Custom Wordle: frequently asked questions",
  faq: [
    { q: "What is a Custom Wordle?", a: "A Custom Wordle is a puzzle where you pick the secret word yourself. The builder turns your word into a shareable link, and anyone who opens it plays a standard Wordle board trying to guess it." },
    { q: "How do I share my custom word?", a: "After you enter your word, the builder generates a unique link. Copy it and send it by message, email or chat, and anyone who opens the link plays your puzzle." },
    { q: "Does my friend need an account?", a: "No. Neither you nor your friends need an account, download or sign-up. The whole puzzle lives in the link and works on any device." },
    { q: "Can they see my secret word?", a: "No. The word is encoded in the link and never shown. Players only see the green, yellow and gray clues as they guess, just like a normal game." },
    { q: "What makes a good custom word?", a: "A fair word built from common letters gives the guesser real clues. Choose something meaningful for a personal surprise, or a trickier word for a tougher challenge." },
    { q: "Can I make it a live competition instead?", a: "Yes. If you want to race friends on the same word in real time rather than sharing a one-off link, use the multiplayer rooms instead." },
    { q: "What occasions suit a custom word?", a: "Any moment you want to frame as a small reveal. People hide birthday messages, anniversaries, the location of the next meetup, job news and inside jokes behind a five-letter word, because the recipient earns the reveal one green tile at a time instead of just reading it. Teachers also turn weekly spelling lists into shareable links." },
    { q: "Is Custom Wordle free?", a: "Yes. Creating and sharing custom puzzles is completely free, with no download, account or sign-up required." },
  ],
  ratingValue: 4.5,
  ratingCount: 2638,
};
