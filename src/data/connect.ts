export interface ConnectGroup {
  name: string;
  words: string[]; // exactly 4
}
export interface ConnectPuzzle {
  groups: ConnectGroup[]; // exactly 4
}

export const CONNECT_PUZZLES: ConnectPuzzle[] = [
  {
    groups: [
      { name: "Citrus Fruits", words: ["LEMON", "LIME", "ORANGE", "CITRON"] },
      { name: "Card Games", words: ["POKER", "HEARTS", "BRIDGE", "RUMMY"] },
      { name: "Planets", words: ["MARS", "VENUS", "SATURN", "NEPTUNE"] },
      { name: "Dog Breeds", words: ["BOXER", "BEAGLE", "POODLE", "HUSKY"] },
    ],
  },
  {
    groups: [
      { name: "Colors", words: ["AMBER", "CORAL", "IVORY", "OLIVE"] },
      { name: "Shapes", words: ["CIRCLE", "SQUARE", "OVAL", "STAR"] },
      { name: "Birds", words: ["ROBIN", "FINCH", "RAVEN", "WREN"] },
      { name: "Rivers", words: ["NILE", "AMAZON", "THAMES", "DANUBE"] },
    ],
  },
  {
    groups: [
      { name: "Metals", words: ["IRON", "GOLD", "SILVER", "COPPER"] },
      { name: "Weather", words: ["RAIN", "SNOW", "WIND", "HAIL"] },
      { name: "Chess Pieces", words: ["KING", "QUEEN", "ROOK", "KNIGHT"] },
      { name: "Trees", words: ["OAK", "PINE", "MAPLE", "BIRCH"] },
    ],
  },
];
