"use client";

export type Theme = "system" | "light" | "dark";

export interface Settings {
  hardMode: boolean;
  theme: Theme;
  colorblind: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  hardMode: false,
  theme: "system",
  colorblind: false,
};

const KEY = "wg:settings";

export function loadSettings(): Settings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: Settings): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(settings));
}

/** Apply theme + colorblind classes to <html>. */
export function applySettings(settings: Settings): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;
  const dark =
    settings.theme === "dark" || (settings.theme === "system" && prefersDark);
  root.classList.toggle("dark", dark);
  root.classList.toggle("colorblind", settings.colorblind);
}
