import { describe, expect, it } from "vitest";
import { dayNumber, getDailyWord, todayKey } from "./daily";
import { isValidGuess } from "../words";
import { getAlphabet } from "../i18n/keyboards";

describe("daily word selection", () => {
  it("produces a stable date key", () => {
    expect(todayKey(new Date(2025, 0, 5))).toBe("2025-01-05");
  });

  it("increments the day number by one per day", () => {
    expect(dayNumber("2024-01-02") - dayNumber("2024-01-01")).toBe(1);
  });

  it("is deterministic for the same locale/length/date", async () => {
    const a = await getDailyWord("en", 5, "2025-03-10");
    const b = await getDailyWord("en", 5, "2025-03-10");
    expect(a.word).toBe(b.word);
    expect(a.word).toHaveLength(5);
  });

  it("gives different words for different lengths", async () => {
    const five = await getDailyWord("en", 5, "2025-03-10");
    const six = await getDailyWord("en", 6, "2025-03-10");
    expect(five.word).toHaveLength(5);
    expect(six.word).toHaveLength(6);
  });

  it("loads localized word data for all native-word locales", async () => {
    for (const loc of ["es", "fr", "de", "it", "nl", "pt", "id"]) {
      const { word } = await getDailyWord(loc, 5, "2025-03-10");
      expect(word).toMatch(/^[a-z]{5}$/);
      expect(await isValidGuess(loc, 5, word)).toBe(true);
    }
  });

  it("produces valid native words for non-Latin alphabets", async () => {
    for (const loc of ["ru", "pl", "sv", "tr"]) {
      const { word } = await getDailyWord(loc, 5, "2025-03-10");
      const alphabet = getAlphabet(loc);
      expect([...word]).toHaveLength(5);
      expect([...word].every((ch) => alphabet.has(ch))).toBe(true);
      expect(await isValidGuess(loc, 5, word)).toBe(true);
    }
  });
});
