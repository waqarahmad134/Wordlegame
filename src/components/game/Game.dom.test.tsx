// @vitest-environment jsdom
import { describe, expect, it, beforeEach } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@/test/setup-dom";
import { Game } from "./Game";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { UIProvider } from "@/components/layout/ui-context";
import { SettingsProvider } from "@/components/settings/SettingsProvider";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { loadStats } from "@/lib/stats";

function renderGame(solution = "plumb") {
  return render(
    <I18nProvider locale="en" dictionary={getDictionary("en")}>
      <SettingsProvider>
        <UIProvider>
          <Game
            mode="custom"
            length={5}
            maxGuesses={6}
            solution={solution}
            title="Test"
          />
        </UIProvider>
      </SettingsProvider>
    </I18nProvider>,
  );
}

const press = (key: string) => fireEvent.keyDown(window, { key });
const typeWord = (w: string) => {
  for (const ch of w) press(ch);
};

async function waitUntilPlaying(container: HTMLElement) {
  // Poll until the board accepts input (solution resolved, status "playing").
  await waitFor(
    () => {
      press("a");
      const first = container.querySelector(".tile");
      expect(first?.getAttribute("data-filled")).toBe("true");
    },
    { timeout: 3000 },
  );
  press("Backspace"); // clear the probe letter
}

describe("Game interactivity (jsdom)", () => {
  beforeEach(() => window.localStorage.clear());

  it("fills tiles as the player types", async () => {
    const { container } = renderGame();
    await waitUntilPlaying(container);
    typeWord("crane");
    await waitFor(() => {
      const firstRow = container.querySelectorAll(".grid > .tile");
      // first five tiles should show the typed letters
      const tiles = Array.from(container.querySelectorAll(".tile")).slice(0, 5);
      expect(tiles.map((t) => t.textContent).join("")).toBe("crane");
      expect(firstRow).toBeDefined();
    });
  });

  it("scores a submitted guess with green/yellow/gray states", async () => {
    const { container } = renderGame("plumb");
    await waitUntilPlaying(container);
    typeWord("crane");
    press("Enter");
    await waitFor(() => {
      const scored = Array.from(container.querySelectorAll(".tile")).filter(
        (t) => t.getAttribute("data-state"),
      );
      expect(scored.length).toBeGreaterThanOrEqual(5);
    });
    // 'b' is absent in "crane" vs "plumb" sharing none except none -> check a known cell.
    const tiles = Array.from(container.querySelectorAll(".tile")).slice(0, 5);
    // c,r,a,n,e vs p,l,u,m,b => all absent
    expect(tiles.every((t) => t.getAttribute("data-state") === "absent")).toBe(
      true,
    );
  });

  it("rejects an invalid word with a toast", async () => {
    const { container, findByText } = renderGame();
    await waitUntilPlaying(container);
    typeWord("zzzzz");
    press("Enter");
    expect(await findByText("Not in word list")).toBeTruthy();
  });

  it("wins when the solution is guessed and records stats", async () => {
    const { container, findByText } = renderGame("plumb");
    await waitUntilPlaying(container);
    typeWord("plumb");
    press("Enter");
    // Win banner appears after the reveal animation delay.
    expect(await findByText("Magnificent!", {}, { timeout: 4000 })).toBeTruthy();
    const stats = loadStats(5);
    expect(stats.wins).toBe(1);
    expect(stats.distribution[0]).toBe(1); // solved in 1 guess
  });
});
