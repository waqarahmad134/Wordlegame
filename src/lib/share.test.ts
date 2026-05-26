import { describe, expect, it } from "vitest";
import { buildShareText, decodeCustomWord, encodeCustomWord } from "./share";
import { scoreGuess } from "./wordle/engine";

describe("buildShareText", () => {
  it("renders an emoji grid with a header", () => {
    const rows = [scoreGuess("crane", "crane")];
    const text = buildShareText({
      title: "Wordle",
      guesses: 1,
      maxGuesses: 6,
      rows,
    });
    expect(text).toContain("Wordle 1/6");
    expect(text).toContain("🟩🟩🟩🟩🟩");
  });

  it("marks a failed game with X and a hard-mode asterisk", () => {
    const rows = [scoreGuess("slate", "crane")];
    const text = buildShareText({
      title: "Wordle",
      guesses: "X",
      maxGuesses: 6,
      rows,
      hardMode: true,
    });
    expect(text).toContain("Wordle X/6*");
  });

  it("uses colorblind emojis when enabled", () => {
    const rows = [scoreGuess("crane", "crane")];
    const text = buildShareText({
      title: "W",
      guesses: 1,
      maxGuesses: 6,
      rows,
      colorblind: true,
    });
    expect(text).toContain("🟧");
  });
});

describe("custom word encoding", () => {
  it("round-trips a word through encode/decode", () => {
    const token = encodeCustomWord("Plumb");
    expect(decodeCustomWord(token)).toBe("plumb");
  });
  it("returns null for garbage tokens", () => {
    expect(decodeCustomWord("!!!notbase64!!!")).toBeNull();
  });
});
