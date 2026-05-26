import { describe, expect, it } from "vitest";
import { filterWords } from "./solver";

const WORDS = ["crane", "crate", "cribs", "slate", "plumb", "trace", "brace"];

describe("filterWords", () => {
  it("matches a green pattern", () => {
    const r = filterWords(WORDS, {
      length: 5,
      pattern: "cr___",
      present: "",
      absent: "",
    });
    expect(r).toEqual(["crane", "crate", "cribs"]);
  });

  it("requires present (yellow) letters somewhere", () => {
    const r = filterWords(WORDS, {
      length: 5,
      pattern: "_____",
      present: "ae",
      absent: "",
    });
    expect(r).toContain("crane");
    expect(r).toContain("crate");
    expect(r).not.toContain("plumb");
  });

  it("excludes absent (gray) letters", () => {
    const r = filterWords(WORDS, {
      length: 5,
      pattern: "_____",
      present: "",
      absent: "c",
    });
    expect(r).not.toContain("crane");
    expect(r).toContain("slate");
    expect(r).toContain("plumb");
  });

  it("does not exclude a letter that is both present and listed absent", () => {
    // 'a' is present (must appear) even if also typed into absent.
    const r = filterWords(WORDS, {
      length: 5,
      pattern: "_____",
      present: "a",
      absent: "a",
    });
    expect(r).toContain("crane");
  });

  it("honors the result limit", () => {
    const r = filterWords(WORDS, {
      length: 5,
      pattern: "_____",
      present: "",
      absent: "",
    }, 2);
    expect(r).toHaveLength(2);
  });
});
