# Wordle Game

A full-stack clone of [wordlegame.org](https://wordlegame.org) built with Next.js.
Daily and unlimited Wordle, word-length variants (4–11), custom shareable words,
real-time multiplayer, spin-off games (Sedecordle, Connect, Squares), a solver,
a daily archive, and multi-language support — all anonymous, no sign-in.

See [`PROJECT_PLAN.md`](./PROJECT_PLAN.md) for the full design spec.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with CSS-variable theming (light / dark / colorblind)
- **Prisma** ORM targeting **MySQL** (daily words, custom games, multiplayer rooms)
- Locale-prefixed routing (`/[locale]/...`) for 13 languages
- Server-Sent Events for live multiplayer
- **Vitest** unit tests

## Getting started

```bash
npm install
cp .env.example .env          # set DATABASE_URL for MySQL (optional for single-player)
npm run dev                   # http://localhost:3000  (redirects to /en)
```

Single-player modes (daily, unlimited, variants, custom, solver, spin-offs)
work entirely client-side and need no database. Multiplayer runs on an
in-memory room store in development; the Prisma/MySQL schema in
[`prisma/schema.prisma`](./prisma/schema.prisma) is provided for production
persistence.

### Database (optional)

```bash
npm run db:generate           # prisma generate
npm run db:migrate            # prisma migrate dev (needs a running MySQL)
```

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run test` | Run Vitest unit + component tests |
| `npm run smoke` | Hit every route + SEO endpoint against a running server |
| `npm run e2e` | Playwright browser tests (run `npx playwright install` first) |

## Routes

```
/[locale]                   Daily 5-letter Wordle
/[locale]/unlimited         Unlimited random Wordle
/[locale]/N-letters         Word-length variants (4..11), daily + unlimited
/[locale]/custom            Create a custom word
/[locale]/play/[id]         Play a shared custom game
/[locale]/multiplayer       Create / join a room
/[locale]/room/[code]       Live multiplayer room
/[locale]/sedecordle        16 boards at once
/[locale]/connect           Grouping puzzle
/[locale]/squares           4x4 word finder
/[locale]/solver            Wordle solver
/[locale]/archive           Replay past dailies
/[locale]/about             About / how to play
```

## Architecture notes

- **Single scoring engine** (`src/lib/wordle/engine.ts`) is the source of truth
  for green/yellow/gray feedback and hard-mode validation; every mode and the
  multiplayer server consume it.
- **Word data** lives in `src/data/words/en/{len}.{answers,valid}.json` and is
  code-split per length so only the active board's dictionary loads.
- **Stats & settings** persist per-browser in `localStorage`.

## Testing

- **Unit + component** (`npm run test`, Vitest): scoring engine, daily-word
  determinism, share output, solver, spin-off logic, multiplayer room store, and
  a JSDOM component test that renders the real game and simulates typing,
  scoring, an invalid-word toast, and a win that records stats.
- **Route + SEO smoke** (`npm run smoke`): every page, all 13 locale homes, all
  length variants, custom/archive/multiplayer flows, and the SEO endpoints.
- **Browser e2e** (`npm run e2e`, Playwright): gameplay, dark-mode toggle,
  language switcher, and multiplayer in a real browser.

## Localization

All 13 locales ship **complete UI translations** (EN-US, EN-UK, ES, FR, DE, PT,
IT, NL, RU, PL, SV, TR, ID) under `src/lib/i18n/messages/`. Each page emits
localized metadata plus `hreflang` alternates for every locale.

Native word **lists ship for all 13 locales** under `src/data/words/<locale>/`
(valid-guess + frequency-ranked answer lists per length). Latin a-z locales
(EN, ES, FR, DE, IT, NL, PT, ID) normalize accents to a-z; the others keep their
native alphabets and get dedicated on-screen **keyboards + letter sets** defined
in `src/lib/i18n/keyboards.ts`:

- **RU** — Cyrillic ЙЦУКЕН layout (ё merged into е)
- **PL** — 32-letter Polish alphabet (ą ć ę ł ń ó ś ź ż, no q/v/x)
- **SV** — Swedish QWERTY with å ä ö
- **TR** — 29-letter Turkish alphabet (ç ğ ı ş ö ü, no q/w/x)

A test (`keyboards.test.ts`) asserts every answer-word letter exists on its
locale's keyboard.
