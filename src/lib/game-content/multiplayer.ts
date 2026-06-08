import type { GameArticle } from "./types";

export const multiplayer: GameArticle = {
  path: "/multiplayer",
  name: "Multiplayer Wordle",
  hero: {
    thumb: "multiplayer",
    alt: "Multiplayer Wordle showing two players racing head to head with a VS badge between them",
    caption: "Multiplayer Wordle: create or join a room and race friends to guess the word first.",
  },
  appDescription:
    "Play Multiplayer Wordle in real time. Create or join a room with a short code and race your friends to guess the hidden word first.",
  introTitle: "Multiplayer Wordle: race your friends in real time",
  intro: [
    [
      { text: "Multiplayer Wordle", href: "/multiplayer" },
      " turns the quiet solo puzzle into a live race. You create a room, share a short code, and everyone who joins gets the same hidden word at the same moment. From there it is a sprint: the first player to crack the word in the fewest guesses wins, and you can watch the tension build as opponents close in.",
    ],
    [
      "It keeps everything you love about the daily ",
      { text: "Wordle", href: "" },
", from the deduction to the colour clues to the satisfying solve, and adds the one thing the original lacks: an opponent. Whether it is two people in the same household or a whole group chat piling into one room, multiplayer makes every guess feel like it counts.",
    ],
  ],
  sections: [
    {
      heading: "How Multiplayer Wordle works",
      body: [
        [
          "One player creates a room and gets a short code. Everyone else enters that code to join, and once the game starts each player gets their own board with the same secret word. You all guess at the same time, racing to reach the answer first, and the room updates in real time so you can feel the competition unfold.",
        ],
        [
          "Because every player shares the identical word, it is a true test of skill rather than luck. You all face the same puzzle under the same rules. The winner is simply whoever deduces it fastest, which makes a clean head-to-head you can rerun again and again with a fresh word each round.",
        ],
      ],
    },
    {
      heading: "What makes racing so addictive",
      body: [
        [
          "Solo Wordle is a calm, private exercise. Multiplayer flips the mood entirely: now there is a clock in your head, an opponent you cannot see but can feel, and a real reason to push for a bold guess instead of playing it safe. That pressure changes how you play, and it is genuinely thrilling.",
        ],
        [
          "It also rewards a different kind of skill. In a race you sometimes gamble on an aggressive guess to win by a turn, knowing your opponent might be one step ahead. Sharpening that instinct under pressure is great practice, and a few rounds of ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " beforehand will steady your openings so you start every race strong.",
        ],
      ],
      list: [
        "Create a room and share a short join code.",
        "Every player gets the same hidden word at the same time.",
        "Race in real time to solve it first in the fewest guesses.",
        "Play one-on-one or with a whole group.",
        "Free, with no account or download for anyone.",
      ],
    },
    {
      heading: "Setting up a game with friends",
      body: [
        [
          "Getting a game going takes seconds. One person opens the multiplayer lobby and creates a room, then shares the code with everyone they want to play. As friends join, they appear in the room, and when everyone is ready the host starts the round and the same word drops for all of you.",
        ],
        [
          "Because all you need to share is a short code, it works just as well across the world as across the kitchen table. For an asynchronous twist where you set the word rather than the game, the ",
          { text: "Custom Wordle", href: "/custom" },
          " mode lets you hide your own word and send it as a link instead.",
        ],
      ],
    },
    {
      heading: "Hosting a multiplayer session people remember",
      body: [
        [
          "A single race is fun, but a well-run session is what turns multiplayer into a regular fixture. The simplest upgrade is to play a best-of-several rather than a one-and-done. A lone round can hinge on luck, where one player happens to guess a lucky opener; a best-of-five smooths that out and rewards the genuinely sharper solver, which keeps everyone feeling the result was fair.",
        ],
        [
          "Format choices change the mood too. A relaxed group might prefer a casual room where solving feels social and people chat between rounds, while a competitive crew will want to track wins and crown an overall champion. Either way, sharing the room code is the only setup involved, so you can spin a game up in the time it takes to send a message, whether your friends are in the next room or on another continent.",
        ],
        [
          "If you want to push the challenge, agree house rules before you start. Playing in Hard Mode forces everyone to reuse their clues and levels the field, while banning repeated opening words keeps each round fresh. For a change of pace between races, send everyone off to warm up in ",
          { text: "Wordle Unlimited", href: "/unlimited" },
          " or set a themed word through the ",
          { text: "Custom Wordle", href: "/custom" },
          " builder and drop it into the room.",
        ],
      ],
    },
  ],
  howToTitle: "How to play Multiplayer Wordle",
  howToSteps: [
    {
      title: "Create or join a room",
      body: "Open the multiplayer lobby and either create a new room to get a code, or enter a friend's code to join theirs.",
    },
    {
      title: "Share the code",
      body: "If you created the room, send the short code to everyone you want to play. They each enter it to join your game.",
    },
    {
      title: "Start the round together",
      body: "Once everyone has joined, the round begins and every player receives the same hidden word at the same moment.",
    },
    {
      title: "Race to solve it",
      body: "Guess the word on your own board using the usual green, yellow and gray clues, moving as fast as you safely can.",
    },
    {
      title: "First to solve wins",
      body: "Whoever cracks the word first, in the fewest guesses, takes the round. Start a new word and run it back as many times as you like.",
    },
  ],
  strategyTitle: "Tips and strategy for Multiplayer Wordle",
  strategy: [
    {
      title: "Open strong and fast",
      body: "A reliable, well-practised opening word saves precious seconds and gives you a clue-rich start before your opponent settles in.",
    },
    {
      title: "Balance speed against accuracy",
      body: "Racing tempts you to rush, but a wasted guess costs more than a few seconds of thought. Move quickly without throwing away turns.",
    },
    {
      title: "Gamble when you are behind",
      body: "If you sense an opponent is ahead, an aggressive guess straight at a likely answer can steal the win by a single turn.",
    },
    {
      title: "Practise under pressure",
      body: "Warm up with a few timed solo rounds first. Comfort with quick deduction is what separates winners in a close race.",
    },
    {
      title: "Keep a clear opening routine",
      body: "Decide your first one or two words in advance so you are not thinking about how to start while the clock is running.",
    },
    {
      title: "Play multiple rounds",
      body: "A single race can come down to luck. Best-of-several with a fresh word each round rewards the more consistent player.",
    },
  ],
  relatedTitle: "More ways to play",
  related: [
    { path: "/custom", name: "Custom Word", thumb: "custom", blurb: "Hide your own word and share a link with friends." },
    { path: "", name: "Wordle", thumb: "wordle", blurb: "The original daily five-letter puzzle." },
    { path: "/unlimited", name: "Wordle Unlimited", thumb: "wordle", blurb: "Endless single-board puzzles to warm up." },
    { path: "/quordle", name: "Quordle", thumb: "quordle", blurb: "Solve four boards in parallel in nine guesses." },
    { path: "/octordle", name: "Octordle", thumb: "octordle", blurb: "Solve eight boards at once in thirteen guesses." },
    { path: "/solver", name: "Wordle Solver", thumb: "solver", blurb: "Enter your clues to reveal every possible answer." },
  ],
  faqTitle: "Multiplayer Wordle: frequently asked questions",
  faq: [
    { q: "What is Multiplayer Wordle?", a: "Multiplayer Wordle lets you race friends in real time. You create or join a room with a short code, everyone gets the same hidden word at once, and the first to solve it wins." },
    { q: "How do I start a multiplayer game?", a: "Open the multiplayer lobby, create a room to get a short code, and share that code with your friends. When everyone has joined, start the round and the same word drops for all players." },
    { q: "Does everyone get the same word?", a: "Yes. Every player in the room receives the identical secret word at the same moment, so it is a fair test of who can deduce it fastest." },
    { q: "How many people can play?", a: "You can play one-on-one or with a larger group, and anyone with the room code can join the same race." },
    { q: "Do I need an account to play with friends?", a: "No. Neither the host nor the players need an account or download. All you share is a short room code." },
    { q: "How do I win a round?", a: "Be the first player to guess the hidden word, using the fewest guesses. You can then start a fresh word and play as many rounds as you like." },
    { q: "How do I run a fair multiplayer session?", a: "Play a best-of-several rather than a single round. One race can hinge on a lucky opening word, but a best-of-five smooths that out and rewards the genuinely sharper solver, which keeps everyone feeling the result was earned. Sharing the room code is the only setup involved, so you can start a fresh round in seconds." },
    { q: "Can we add house rules to make it harder?", a: "Yes. Agree rules before you start: playing in Hard Mode forces everyone to reuse their clues and levels the field, while banning repeated opening words keeps each round fresh. You can also send everyone to warm up in unlimited mode, or drop a themed word from the custom builder into the room." },
    { q: "Is Multiplayer Wordle free?", a: "Yes. Creating and joining multiplayer rooms is completely free, with no download, account or sign-up required." },
  ],
  ratingValue: 4.5,
  ratingCount: 2914,
};
