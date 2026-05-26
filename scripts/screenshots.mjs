// Render faithful PNG screenshots of the app's screens using the same
// satori/resvg pipeline the app uses for OG images (no browser needed).
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";
import { createElement as h } from "react";
import fs from "node:fs";

// Prefer a broad-coverage font (Cyrillic/Turkish/Polish/Swedish glyphs) via
// SCREENSHOT_FONT or /tmp/DejaVuSans.ttf; otherwise fall back to the Latin
// font bundled with @vercel/og (Latin scenes only).
const FONT_PATH = (() => {
  const candidates = [
    process.env.SCREENSHOT_FONT,
    "/tmp/DejaVuSans.ttf",
    "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p)) ?? candidates.at(-1);
})();
const FONT = fs.readFileSync(FONT_PATH);
const fonts = [
  { name: "DejaVu", data: FONT, weight: 400, style: "normal" },
  { name: "DejaVu", data: FONT, weight: 700, style: "normal" },
];

const THEME = {
  light: {
    bg: "#ffffff", fg: "#1a1a1b", border: "#d3d6da", keyBg: "#d3d6da",
    tileBorder: "#d3d6da", tileBorderFilled: "#878a8c", header: "#ffffff",
    correct: "#6aaa64", present: "#c9b458", absent: "#787c7e",
  },
  dark: {
    bg: "#121213", fg: "#ffffff", border: "#3a3a3c", keyBg: "#818384",
    tileBorder: "#3a3a3c", tileBorderFilled: "#565758", header: "#121213",
    correct: "#538d4e", present: "#b59f3b", absent: "#3a3a3c",
  },
};

function tile(t, ch, state, size = 54) {
  const filled = !!ch;
  let bg = "transparent", border = t.tileBorder, color = t.fg;
  if (state === "correct") { bg = t.correct; border = t.correct; color = "#fff"; }
  else if (state === "present") { bg = t.present; border = t.present; color = "#fff"; }
  else if (state === "absent") { bg = t.absent; border = t.absent; color = "#fff"; }
  else if (filled) { border = t.tileBorderFilled; }
  return h("div", {
    style: {
      width: size, height: size, display: "flex", alignItems: "center",
      justifyContent: "center", border: `2px solid ${border}`, background: bg,
      color, fontSize: size * 0.5, fontWeight: 700, textTransform: "uppercase",
    },
  }, (ch || "").toUpperCase());
}

function board(t, rows, length, maxGuesses, current = "", tileSize = 54) {
  const rowEls = [];
  for (let r = 0; r < maxGuesses; r++) {
    const scored = rows[r];
    const cells = [];
    for (let c = 0; c < length; c++) {
      if (scored) cells.push(tile(t, scored[c]?.ch, scored[c]?.state, tileSize));
      else if (r === rows.length && current) cells.push(tile(t, current[c] || "", undefined, tileSize));
      else cells.push(tile(t, "", undefined, tileSize));
    }
    rowEls.push(h("div", { style: { display: "flex", gap: 5 } }, ...cells));
  }
  return h("div", { style: { display: "flex", flexDirection: "column", gap: 5 } }, ...rowEls);
}

function keyboard(t, layout, keyStates = {}) {
  const rowEls = layout.map((row) => {
    const keys = [...row].map((ch) => {
      const st = keyStates[ch];
      let bg = t.keyBg, color = t.fg;
      if (st === "correct") { bg = t.correct; color = "#fff"; }
      else if (st === "present") { bg = t.present; color = "#fff"; }
      else if (st === "absent") { bg = t.absent; color = "#fff"; }
      return h("div", {
        style: {
          minWidth: 30, height: 50, display: "flex", alignItems: "center",
          justifyContent: "center", background: bg, color, borderRadius: 4,
          fontSize: 18, fontWeight: 700, padding: "0 8px", textTransform: "uppercase",
        },
      }, ch);
    });
    return h("div", { style: { display: "flex", gap: 5, justifyContent: "center" } }, ...keys);
  });
  return h("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, ...rowEls);
}

function header(t, title) {
  return h("div", {
    style: {
      display: "flex", alignItems: "center", justifyContent: "center",
      height: 56, borderBottom: `1px solid ${t.border}`, width: "100%",
      fontSize: 30, fontWeight: 700, letterSpacing: 2, color: t.fg,
      textTransform: "uppercase",
    },
  }, title);
}

function screen(t, children, w = 480, h0 = 820) {
  return h("div", {
    style: {
      width: w, height: h0, display: "flex", flexDirection: "column",
      alignItems: "center", background: t.bg, fontFamily: "DejaVu",
    },
  }, ...children);
}

function scored(word, states) {
  return [...word].map((ch, i) => ({ ch, state: states[i] }));
}

const G = "correct", Y = "present", X = "absent";
const QWERTY = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

// ---- Scenes ----
const scenes = {};

// 1) English daily, light, mid-game
scenes["01-daily-light"] = () => {
  const t = THEME.light;
  const rows = [
    scored("crane", [X, X, X, X, X]),
    scored("slimy", [X, G, X, G, X]),
  ];
  const keyStates = { c: X, r: X, a: X, n: X, e: X, s: X, i: X, y: X, l: G, m: G };
  return screen(t, [
    header(t, "Wordle"),
    h("div", { style: { display: "flex", flex: 1, alignItems: "center" } },
      board(t, rows, 5, 6, "plu")),
    h("div", { style: { display: "flex", paddingBottom: 16 } }, keyboard(t, QWERTY, keyStates)),
  ]);
};

// 2) English win, dark
scenes["02-win-dark"] = () => {
  const t = THEME.dark;
  const rows = [
    scored("crane", [X, X, X, X, X]),
    scored("slimy", [X, G, X, G, X]),
    scored("plumb", [G, G, G, G, G]),
  ];
  const keyStates = { c: X, r: X, a: X, n: X, e: X, s: X, i: X, y: X, l: G, m: G, p: G, u: G, b: G };
  return screen(t, [
    header(t, "Wordle"),
    h("div", { style: { display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 } },
      board(t, rows, 5, 6),
      h("div", { style: { display: "flex", fontSize: 26, fontWeight: 700, color: t.fg } }, "Magnificent!"),
      h("div", { style: { display: "flex", background: t.correct, color: "#fff", padding: "10px 28px", borderRadius: 6, fontSize: 18, fontWeight: 700 } }, "Share"),
    ),
    h("div", { style: { display: "flex", paddingBottom: 16 } }, keyboard(t, QWERTY, keyStates)),
  ]);
};

// 3) Russian — native Cyrillic keyboard
scenes["03-russian"] = () => {
  const t = THEME.light;
  const RU = ["йцукенгшщзхъ", "фывапролджэ", "ячсмитьбю"];
  const rows = [
    scored("парус", [X, X, X, X, Y]),
    scored("столб", [Y, X, X, X, X]),
  ];
  const keyStates = { с: Y, п: X, а: X, р: X, у: X, т: X, о: X, л: X, б: X };
  return screen(t, [
    header(t, "Wordle"),
    h("div", { style: { display: "flex", flex: 1, alignItems: "center" } },
      board(t, rows, 5, 6, "сло")),
    h("div", { style: { display: "flex", paddingBottom: 16 } }, keyboard(t, RU, keyStates)),
  ]);
};

// 4) Sedecordle — 16 mini boards
scenes["04-sedecordle"] = () => {
  const t = THEME.light;
  const sample = [
    scored("audio", [Y, X, X, X, G]),
    scored("crane", [X, G, X, X, X]),
  ];
  const mini = (solved) => h("div", { style: { display: "flex", flexDirection: "column", gap: 2, opacity: solved ? 0.5 : 1 } },
    ...Array.from({ length: 7 }).map((_, r) => {
      const sc = sample[r];
      return h("div", { style: { display: "flex", gap: 2 } },
        ...Array.from({ length: 5 }).map((_, c) => tile(t, sc?.[c]?.ch || "", sc?.[c]?.state, 16)));
    }));
  const grid = h("div", { style: { display: "flex", flexWrap: "wrap", width: 460, gap: 10, justifyContent: "center" } },
    ...Array.from({ length: 16 }).map((_, i) => mini(i % 5 === 0)));
  return screen(t, [
    header(t, "Sedecordle"),
    h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10 } },
      h("div", { style: { display: "flex", fontSize: 16, fontWeight: 700, color: t.fg, paddingBottom: 10 } }, "3/16 solved · 4/21"),
      grid),
  ]);
};

// 5) Multiplayer — you vs opponent
scenes["05-multiplayer"] = () => {
  const t = THEME.light;
  const mine = [scored("crane", [X, G, X, X, X]), scored("brick", [X, Y, X, X, X])];
  const youBoard = board(t, mine, 5, 6, "drive".slice(0, 0), 44);
  const oppRows = [
    [X, G, X, X, X], [G, X, Y, X, X], [G, G, G, G, G],
  ];
  const opp = h("div", { style: { display: "flex", flexDirection: "column", gap: 3 } },
    ...Array.from({ length: 6 }).map((_, r) =>
      h("div", { style: { display: "flex", gap: 3 } },
        ...Array.from({ length: 5 }).map((_, c) => {
          const s = oppRows[r]?.[c];
          const bg = s === "correct" ? t.correct : s === "present" ? t.present : s === "absent" ? t.absent : t.border;
          return h("div", { style: { width: 22, height: 22, background: bg, borderRadius: 2, display: "flex" } });
        }))));
  return screen(t, [
    header(t, "Room AB3K9"),
    h("div", { style: { display: "flex", flex: 1, alignItems: "center", justifyContent: "center", gap: 30 } },
      h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } },
        h("div", { style: { display: "flex", fontSize: 14, fontWeight: 700, color: t.fg } }, "You"),
        youBoard),
      h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } },
        h("div", { style: { display: "flex", fontSize: 14, fontWeight: 700, color: t.fg } }, "Alex ✅"),
        opp)),
    h("div", { style: { display: "flex", paddingBottom: 16 } }, keyboard(t, QWERTY, { c: X, r: G, a: X, n: X, e: X, b: X, i: Y, k: X })),
  ]);
};

const outDir = "/tmp/shots";
fs.mkdirSync(outDir, { recursive: true });
for (const [name, build] of Object.entries(scenes)) {
  const res = new ImageResponse(build(), { width: 480, height: 820, fonts });
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(`${outDir}/${name}.png`, buf);
  console.log("wrote", name, buf.length);
}
