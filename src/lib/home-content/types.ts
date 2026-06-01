/**
 * Type definitions for the long-form homepage content. Per-locale data lives in
 * sibling files; the registry and lookup function live in `../home-content.ts`.
 */

export interface HowToStep {
  title: string;
  body: string;
}

export interface Tip {
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export type IconKey =
  | "book"
  | "lightning"
  | "puzzle"
  | "brain"
  | "clock"
  | "share";

export interface Advantage {
  icon: IconKey;
  title: string;
  body: string;
}

export type ThumbKey =
  | "wordle"
  | "dordle"
  | "quordle"
  | "octordle"
  | "sedecordle"
  | "spellbee"
  | "connect"
  | "squares"
  | "custom"
  | "multiplayer"
  | "solver"
  | "archive";

export interface RelatedGame {
  path: string;
  name: string;
  blurb: string;
  thumb: ThumbKey;
}

export interface HomeContent {
  h1: string;
  intro: string;
  howToTitle: string;
  howToSteps: HowToStep[];
  moreGamesTitle: string;
  moreGames: RelatedGame[];
  languageTitle: string;
  languageIntro: string;
  tipsTitle: string;
  tips: Tip[];
  faqTitle: string;
  faq: FaqItem[];
  advantagesTitle: string;
  advantages: Advantage[];
  ratingTitle: string;
  ratingValue: number;
  ratingCount: number;
}
