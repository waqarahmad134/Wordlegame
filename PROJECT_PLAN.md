# Wordlegame.org Clone — Project Plan & Action Spec

A full-stack, 1:1 recreation of **wordlegame.org** built with Next.js.

## Goal

Recreate the complete wordlegame.org experience: a multi-mode Wordle hub with
daily puzzles, unlimited play, word-length variants, custom/shareable games,
real-time multiplayer, spin-off games, a solver, a daily archive, and full
multi-language support.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS + CSS variables (light / dark / colorblind themes) |
| State | Zustand + `localStorage` persistence |
| i18n | next-intl, locale-prefixed routes (`/[locale]/...`) |
| Database | MySQL |
| ORM | Prisma (`provider = "mysql"`) |
| Realtime | Server-Sent Events (SSE) route handlers |
| Testing | Vitest + React Testing Library, Playwright (e2e) |
| Auth | None — anonymous play (matches competitor); stats in localStorage |

## Features (full clone)

- **Core Wordle** — 6 guesses, green/yellow/gray feedback, physical + on-screen keyboard.
- **Daily** — one shared puzzle per day per word length.
- **Unlimited** — endless random puzzles.
- **Word-length variants** — 4 to 11 letters.
- **Custom Word** — create a word, get a shareable link.
- **Multiplayer** — create/join rooms via short code, race in real time.
- **Spin-offs** — Sedecordle (16 boards), Connect (grouping), Squares (4×4 word find).
- **Solver** — filter candidates by known/present/absent letters.
- **Daily Archive** — replay past daily puzzles.
- **Settings** — Hard Mode, Dark Mode, Colorblind Mode.
- **Stats** — games played, win %, streaks, guess-distribution histogram, emoji-grid share.
- **i18n** — EN-US, EN-UK, ES, FR, DE, PT, IT, NL, RU, PL, SV, TR, ID.
- **Static pages** — About / How to Play / FAQ.

## Routes

```
/[locale]                   Daily 5-letter Wordle (home)
/[locale]/unlimited         Unlimited random Wordle
/[locale]/[length]-letters  4..11 letter variants
/[locale]/custom            Create custom word
/[locale]/play/[id]         Play a shared custom game
/[locale]/multiplayer       Lobby (create/join room)
/[locale]/room/[code]       Live multiplayer room
/[locale]/sedecordle        16-board game
/[locale]/connect           Grouping puzzle
/[locale]/squares           4×4 word-find
/[locale]/solver            Wordle solver
/[locale]/archive           Daily archive
/[locale]/about             About / FAQ
```

## Data Model (Prisma + MySQL)

- `DailyWord(locale, length, date, word)` — unique per (locale, length, date).
- `CustomGame(id, word, locale, plays)` — shareable custom puzzles.
- `Room(code, locale, length, word, status)` + `RoomPlayer(roomCode, nickname, guesses, solved)`.
- `ConnectPuzzle(locale, date, data)` — seeds for spin-off games.

Word lists shipped as static JSON under `src/data/words/{locale}/{len}.{answers|valid}.json`.
Daily words are chosen deterministically from date + length.

## Architecture Principles

- **Single scoring engine** (`src/lib/wordle/engine.ts`) is the source of truth for
  green/yellow/gray + hard-mode validation; every mode consumes it.
- **One parametrized Board + Keyboard** (by length & guess count) powers all modes.
- **One emoji-grid share generator** (`src/lib/share.ts`) reused everywhere.

## Implementation Phases

0. **Scaffold & infra** — Next.js + Tailwind + Prisma + next-intl + Zustand; schema, layout, theme.
1. **Core engine + daily 5-letter** — engine, board, keyboard, modals, stats, daily API.
2. **Unlimited + length variants (4–11)**.
3. **Custom word + shareable games**.
4. **Multiplayer rooms (SSE)**.
5. **Spin-offs** — Sedecordle, Connect, Squares.
6. **Solver + Archive + static pages**.
7. **i18n (13 languages)**.
8. **Polish, SEO, tests, deploy prep**.

## Verification

- Unit: scoring edge cases (duplicate letters), hard-mode, deterministic daily, solver, share string.
- Manual/e2e: play to win + loss, keyboard colors, animations, stats, share; hard mode;
  variant board sizing; custom-link round-trip; two-tab multiplayer via SSE; solver results; locale switch.
- DB: `prisma migrate dev` applies against local MySQL; seed populates word lists.

## Setup

```bash
npm install
cp .env.example .env        # set DATABASE_URL (mysql://...)
npx prisma migrate dev
npm run dev
```
