"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { useUI } from "./ui-context";
import { GameMenu } from "./GameMenu";
import { HelpIcon, MenuIcon, SettingsIcon, StatsIcon } from "./Icons";

export function Header() {
  const { locale } = useI18n();
  const { openModal } = useUI();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative flex h-14 items-center justify-between border-b border-[var(--border)] px-3"
      style={{ background: "var(--header-bg)" }}
    >
      <div className="flex items-center gap-1">
        <button
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded p-2 hover:bg-[var(--border)]"
        >
          <MenuIcon />
        </button>
        {menuOpen && <GameMenu onNavigate={() => setMenuOpen(false)} />}
      </div>

      <Link
        href={`/${locale}`}
        className="text-2xl font-extrabold uppercase tracking-wide"
      >
        Wordle
      </Link>

      <div className="flex items-center gap-1">
        <button
          aria-label="Help"
          onClick={() => openModal("help")}
          className="rounded p-2 hover:bg-[var(--border)]"
        >
          <HelpIcon />
        </button>
        <button
          aria-label="Statistics"
          onClick={() => openModal("stats")}
          className="rounded p-2 hover:bg-[var(--border)]"
        >
          <StatsIcon />
        </button>
        <button
          aria-label="Settings"
          onClick={() => openModal("settings")}
          className="rounded p-2 hover:bg-[var(--border)]"
        >
          <SettingsIcon />
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 top-14 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
