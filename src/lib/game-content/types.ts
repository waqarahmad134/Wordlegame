/**
 * Type definitions for the long-form, SEO-oriented article that sits below each
 * game. Per-game data lives in sibling files; the registry and lookup function
 * live in `../game-content.ts`.
 *
 * Paragraphs are modelled as an array of segments so body copy can carry inline
 * internal links with exact-keyword anchor text (e.g. the word "Octordle"
 * linking to /octordle) without resorting to dangerouslySetInnerHTML.
 */

import type { ThumbKey } from "@/components/home/GameThumbnail";

/** One inline link inside a paragraph: `text` is the visible anchor, `href` the
 * route path (locale prefix is added by the renderer). */
export interface InlineLink {
  text: string;
  href: string;
}

/** A paragraph is a run of plain strings and inline links. */
export type Paragraph = Array<string | InlineLink>;

export interface ArticleSection {
  /** Rendered as an <h2>. */
  heading: string;
  body: Paragraph[];
  /** Optional bulleted list rendered after the paragraphs. */
  list?: string[];
}

export interface HowToStep {
  title: string;
  body: string;
}

export interface StrategyTip {
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedGame {
  path: string;
  /** Exact-keyword anchor text, e.g. "Quordle". */
  name: string;
  blurb: string;
  thumb: ThumbKey;
}

export interface GameArticle {
  /** Route path after the locale segment, e.g. "/quordle". */
  path: string;
  /** Human name used in the breadcrumb trail and schema. */
  name: string;
  /** Hero illustration shown at the top of the article. */
  hero: { thumb: ThumbKey; alt: string; caption: string };
  /** Schema.org WebApplication description for this mode. */
  appDescription: string;

  introTitle: string;
  intro: Paragraph[];

  sections: ArticleSection[];

  howToTitle: string;
  howToSteps: HowToStep[];

  strategyTitle: string;
  strategy: StrategyTip[];

  relatedTitle: string;
  related: RelatedGame[];

  faqTitle: string;
  faq: FaqItem[];

  ratingValue: number;
  ratingCount: number;
}
