import { describe, expect, it } from "vitest";
import { adjacent, wordScore } from "./squares";
import { evaluateSelection } from "./connect";

describe("squares.adjacent (4x4 grid)", () => {
  it("treats orthogonal and diagonal neighbors as adjacent", () => {
    expect(adjacent(0, 1, 4)).toBe(true); // right
    expect(adjacent(0, 4, 4)).toBe(true); // down
    expect(adjacent(0, 5, 4)).toBe(true); // diagonal
  });
  it("rejects non-neighbors and self", () => {
    expect(adjacent(0, 2, 4)).toBe(false); // two columns over
    expect(adjacent(0, 8, 4)).toBe(false); // two rows down
    expect(adjacent(3, 4, 4)).toBe(false); // wraps a row edge
    expect(adjacent(5, 5, 4)).toBe(false); // same cell
  });
});

describe("squares.wordScore", () => {
  it("scores nothing under 4 letters", () => {
    expect(wordScore(3)).toBe(0);
  });
  it("rewards longer words more", () => {
    expect(wordScore(4)).toBeLessThan(wordScore(6));
  });
});

describe("connect.evaluateSelection", () => {
  it("is correct when all four share a group", () => {
    expect(evaluateSelection([1, 1, 1, 1])).toEqual({
      correct: true,
      oneAway: false,
    });
  });
  it("flags one-away when three share a group", () => {
    expect(evaluateSelection([2, 2, 2, 3])).toEqual({
      correct: false,
      oneAway: true,
    });
  });
  it("is neither when the split is wider", () => {
    expect(evaluateSelection([0, 1, 2, 3])).toEqual({
      correct: false,
      oneAway: false,
    });
  });
});
