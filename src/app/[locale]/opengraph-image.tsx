import { ImageResponse } from "next/og";

export const alt = "Wordle Game - Daily Word Puzzle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TILES = [
  { ch: "W", bg: "#6aaa64" },
  { ch: "O", bg: "#c9b458" },
  { ch: "R", bg: "#787c7e" },
  { ch: "D", bg: "#6aaa64" },
  { ch: "L", bg: "#787c7e" },
  { ch: "E", bg: "#6aaa64" },
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
          {TILES.map((t, i) => (
            <div
              key={i}
              style={{
                width: 120,
                height: 120,
                background: t.bg,
                color: "#fff",
                fontSize: 80,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              {t.ch}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 44, color: "#1a1a1b", fontWeight: 700 }}>
          Daily Word Puzzle · Unlimited · Multiplayer
        </div>
      </div>
    ),
    size,
  );
}
