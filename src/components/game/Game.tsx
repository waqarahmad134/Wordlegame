"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { useUI } from "@/components/layout/ui-context";
import { useSettings } from "@/components/settings/SettingsProvider";
import type { GameMode } from "@/lib/wordle/types";
import { todayKey } from "@/lib/wordle/daily";
import { recordResult } from "@/lib/stats";
import { buildShareText } from "@/lib/share";
import { Board } from "./Board";
import { Keyboard } from "./Keyboard";
import { Toast } from "./Toast";
import { useWordleGame } from "./useWordleGame";

export interface GameProps {
  mode: GameMode;
  length: number;
  maxGuesses: number;
  solution?: string;
  dailyKey?: string | null;
  persistKey?: string;
  title: string;
  showNewGame?: boolean;
}

export function Game(props: GameProps) {
  const { locale, t } = useI18n();
  const { setActiveLength, openModal } = useUI();
  const { settings } = useSettings();

  // Daily mode gets a stable per-day key for persistence + streaks.
  const today = todayKey();
  const dailyKey =
    props.mode === "daily" ? (props.dailyKey ?? today) : props.dailyKey;
  const persistKey =
    props.persistKey ??
    (props.mode === "daily"
      ? `wg:game:${locale}:${props.length}:daily:${dailyKey}`
      : undefined);

  const game = useWordleGame({
    ...props,
    locale,
    dailyKey,
    persistKey,
  });
  const [finished, setFinished] = useState<null | { won: boolean }>(null);
  const recorded = useRef(false);

  useEffect(() => {
    setActiveLength(props.length);
  }, [props.length, setActiveLength]);

  // Reset the result banner when a new game starts.
  useEffect(() => {
    if (game.status === "playing") {
      setFinished(null);
      recorded.current = false;
    }
  }, [game.status]);

  useEffect(() => {
    game.setOnResult((won, guesses) => {
      if (!recorded.current) {
        recorded.current = true;
        recordResult({
          length: props.length,
          won,
          guessCount: guesses,
          maxGuesses: props.maxGuesses,
          dailyKey: props.mode === "daily" ? dailyKey ?? null : null,
        });
      }
      setFinished({ won });
      setTimeout(() => openModal("stats"), 250);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.setOnResult, props.length, props.maxGuesses, props.mode]);

  const share = async () => {
    const text = buildShareText({
      title: props.title,
      guesses: finished?.won ? game.guessCount : "X",
      maxGuesses: props.maxGuesses,
      rows: game.rows,
      colorblind: settings.colorblind,
      hardMode: settings.hardMode,
    });
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(text);
      }
    } catch {
      /* user cancelled share */
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <Toast message={game.toast} />

      <div className="flex flex-1 items-center justify-center py-4">
        <Board
          length={props.length}
          maxGuesses={props.maxGuesses}
          rows={game.rows}
          current={game.current}
          status={game.status}
          shakeRow={game.shakeRow}
          lastRevealedRow={game.lastRevealedRow}
        />
      </div>

      {finished && (
        <div className="mb-2 flex flex-col items-center gap-2">
          <p className="text-lg font-bold">
            {finished.won
              ? t.game.win
              : `${t.game.lose} ${game.solution?.toUpperCase()}`}
          </p>
          <div className="flex gap-2">
            <button
              onClick={share}
              className="rounded bg-[var(--correct)] px-5 py-2 font-bold text-white"
            >
              {t.game.share}
            </button>
            {props.showNewGame && (
              <button
                onClick={() => game.reset()}
                className="rounded border border-[var(--border)] px-5 py-2 font-bold"
              >
                {t.game.newGame}
              </button>
            )}
          </div>
        </div>
      )}

      <Keyboard
        keyStates={game.keyStates}
        onKey={game.type}
        onEnter={game.submit}
        onDelete={game.remove}
        enterLabel={t.game.enter}
      />
    </div>
  );
}
