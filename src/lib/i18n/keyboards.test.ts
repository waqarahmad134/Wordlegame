import { describe, expect, it } from "vitest";
import { getAlphabet, getKeyboardLayout } from "./keyboards";
import { loadWordList } from "../words";

const NATIVE_LOCALES = [
  "en",
  "es",
  "fr",
  "de",
  "it",
  "nl",
  "pt",
  "id",
  "ru",
  "pl",
  "sv",
  "tr",
];

describe("keyboard / word-data consistency", () => {
  it("every keyboard letter is unique within a locale", () => {
    for (const loc of NATIVE_LOCALES) {
      const letters = getKeyboardLayout(loc).join("").split("");
      expect(new Set(letters).size).toBe(letters.length);
    }
  });

  it("every answer-word letter exists on the locale keyboard", async () => {
    for (const loc of NATIVE_LOCALES) {
      const alphabet = getAlphabet(loc);
      const { answers } = await loadWordList(loc, 5);
      for (const word of answers.slice(0, 200)) {
        for (const ch of word) {
          expect(
            alphabet.has(ch),
            `${loc}: "${ch}" in "${word}" is missing from the keyboard`,
          ).toBe(true);
        }
      }
    }
  });
});
