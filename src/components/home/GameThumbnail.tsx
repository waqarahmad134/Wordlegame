import { JSX } from "react";

export type ThumbKey =
  | "wordle"
  | "dordle"
  | "quordle"
  | "octordle"
  | "sedecordle"
  | "spellbee"
  | "connect"
  | "squares"
  | "custom"
  | "multiplayer"
  | "solver"
  | "archive";

type State = "c" | "p" | "a";

function stateFill(s: State | undefined): string {
  return s === "c"
    ? "var(--correct)"
    : s === "p"
      ? "var(--present)"
      : s === "a"
        ? "var(--absent)"
        : "transparent";
}

interface TileProps {
  x: number;
  y: number;
  s: number;
  state?: State;
}

function Tile({ x, y, s, state }: TileProps) {
  return (
    <rect
      x={x}
      y={y}
      width={s}
      height={s}
      rx={s * 0.1}
      fill={stateFill(state)}
      stroke={state ? "none" : "var(--border)"}
      strokeWidth={1.2}
    />
  );
}

function Board({
  ox,
  oy,
  s,
  gap,
  rows,
}: {
  ox: number;
  oy: number;
  s: number;
  gap: number;
  rows: (State | null)[][];
}) {
  return (
    <g>
      {rows.flatMap((row, r) =>
        row.map((st, c) => (
          <Tile
            key={`${r}-${c}`}
            x={ox + c * (s + gap)}
            y={oy + r * (s + gap)}
            s={s}
            state={st ?? undefined}
          />
        )),
      )}
    </g>
  );
}

function Wordle() {
  const s = 13,
    g = 1.5;
  const w = 5 * s + 4 * g;
  const ox = (100 - w) / 2;
  const oy = (100 - (3 * s + 2 * g)) / 2;
  return (
    <Board
      ox={ox}
      oy={oy}
      s={s}
      gap={g}
      rows={[
        ["a", "a", "c", "a", "p"],
        ["a", "p", "c", "a", "c"],
        ["c", "c", "c", "c", "c"],
      ]}
    />
  );
}

function Dordle() {
  const s = 10,
    g = 1;
  const bw = 3 * s + 2 * g;
  const gap = 6;
  const ox = (100 - (2 * bw + gap)) / 2;
  const oy = (100 - (3 * s + 2 * g)) / 2;
  return (
    <g>
      <Board
        ox={ox}
        oy={oy}
        s={s}
        gap={g}
        rows={[
          ["a", "p", "c"],
          ["a", "c", "c"],
          ["c", "c", "c"],
        ]}
      />
      <Board
        ox={ox + bw + gap}
        oy={oy}
        s={s}
        gap={g}
        rows={[
          ["p", "c", "a"],
          ["c", "a", "c"],
          ["c", "c", "c"],
        ]}
      />
    </g>
  );
}

function Quordle() {
  const s = 9,
    g = 1;
  const bw = 2 * s + g;
  const gap = 4;
  const total = 2 * bw + gap;
  const ox = (100 - total) / 2;
  const oy = (100 - total) / 2;
  const patterns: (State | null)[][][] = [
    [
      ["c", "a"],
      ["c", "c"],
    ],
    [
      ["a", "p"],
      ["c", "c"],
    ],
    [
      ["p", "c"],
      ["a", "c"],
    ],
    [
      ["c", "a"],
      ["c", "c"],
    ],
  ];
  return (
    <g>
      {patterns.map((p, i) => {
        const r = Math.floor(i / 2);
        const c = i % 2;
        return (
          <Board
            key={i}
            ox={ox + c * (bw + gap)}
            oy={oy + r * (bw + gap)}
            s={s}
            gap={g}
            rows={p}
          />
        );
      })}
    </g>
  );
}

function Octordle() {
  const s = 7,
    g = 0.8;
  const bw = 2 * s + g;
  const gap = 3;
  const totalW = 4 * bw + 3 * gap;
  const totalH = 2 * bw + gap;
  const ox = (100 - totalW) / 2;
  const oy = (100 - totalH) / 2;
  const tiles: State[][] = [
    ["c", "a", "c", "c"],
    ["a", "p", "c", "c"],
    ["c", "c", "a", "c"],
    ["p", "c", "c", "a"],
    ["c", "c", "c", "p"],
    ["a", "c", "p", "c"],
    ["c", "a", "c", "c"],
    ["c", "c", "a", "c"],
  ];
  return (
    <g>
      {tiles.map((st, i) => {
        const r = Math.floor(i / 4);
        const c = i % 4;
        return (
          <Board
            key={i}
            ox={ox + c * (bw + gap)}
            oy={oy + r * (bw + gap)}
            s={s}
            gap={g}
            rows={[
              [st[0], st[1]],
              [st[2], st[3]],
            ]}
          />
        );
      })}
    </g>
  );
}

function Sedecordle() {
  const s = 16,
    g = 2;
  const total = 4 * s + 3 * g;
  const ox = (100 - total) / 2;
  const oy = (100 - total) / 2;
  const states: State[] = [
    "c", "a", "c", "p",
    "a", "c", "c", "c",
    "c", "p", "a", "c",
    "c", "c", "c", "p",
  ];
  return (
    <g>
      {states.map((st, i) => {
        const r = Math.floor(i / 4);
        const c = i % 4;
        return (
          <Tile
            key={i}
            x={ox + c * (s + g)}
            y={oy + r * (s + g)}
            s={s}
            state={st}
          />
        );
      })}
    </g>
  );
}

function SpellBee() {
  const R = 14;
  const cx = 50,
    cy = 50;
  const dx = R * Math.sqrt(3) * 0.95;
  function hexPoints(centerX: number, centerY: number, r: number) {
    const pts: string[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = ((60 * i - 30) * Math.PI) / 180;
      pts.push(
        `${(centerX + r * Math.cos(angle)).toFixed(2)},${(centerY + r * Math.sin(angle)).toFixed(2)}`,
      );
    }
    return pts.join(" ");
  }
  const outer = [0, 60, 120, 180, 240, 300].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return [cx + dx * Math.cos(rad), cy + dx * Math.sin(rad)] as const;
  });
  return (
    <g>
      {outer.map(([ox, oy], i) => (
        <polygon
          key={i}
          points={hexPoints(ox, oy, R * 0.92)}
          fill="var(--key-bg)"
          stroke="var(--border)"
          strokeWidth={0.5}
        />
      ))}
      <polygon
        points={hexPoints(cx, cy, R * 0.92)}
        fill="var(--present)"
        stroke="none"
      />
    </g>
  );
}

function Connect() {
  const s = 16,
    g = 2;
  const total = 4 * s + 3 * g;
  const ox = (100 - total) / 2;
  const oy = (100 - total) / 2;
  const colors = [
    "var(--correct)",
    "var(--present)",
    "#a78bfa",
    "#60a5fa",
  ];
  const grid = [
    0, 1, 2, 3,
    1, 0, 3, 2,
    2, 3, 0, 1,
    3, 2, 1, 0,
  ];
  return (
    <g>
      {grid.map((gi, i) => {
        const r = Math.floor(i / 4);
        const c = i % 4;
        return (
          <rect
            key={i}
            x={ox + c * (s + g)}
            y={oy + r * (s + g)}
            width={s}
            height={s}
            rx={s * 0.1}
            fill={colors[gi]}
          />
        );
      })}
    </g>
  );
}

function Squares() {
  const s = 14,
    g = 2;
  const total = 4 * s + 3 * g;
  const ox = (100 - total) / 2;
  const oy = (100 - total) / 2;
  const letters = [
    "W", "O", "R", "D",
    "A", "B", "C", "E",
    "F", "G", "H", "I",
    "J", "K", "L", "M",
  ];
  const path = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  function inPath(c: number, r: number) {
    return path.some(([pc, pr]) => pc === c && pr === r);
  }
  return (
    <g>
      {letters.map((ch, i) => {
        const r = Math.floor(i / 4);
        const c = i % 4;
        const on = inPath(c, r);
        return (
          <g key={i}>
            <rect
              x={ox + c * (s + g)}
              y={oy + r * (s + g)}
              width={s}
              height={s}
              rx={s * 0.1}
              fill={on ? "var(--correct)" : "transparent"}
              stroke="var(--border)"
              strokeWidth={1}
            />
            <text
              x={ox + c * (s + g) + s / 2}
              y={oy + r * (s + g) + s * 0.72}
              textAnchor="middle"
              fontSize={s * 0.55}
              fontWeight={700}
              fill={on ? "white" : "var(--fg)"}
            >
              {ch}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function Custom() {
  const s = 12,
    g = 1.5;
  const w = 5 * s + 4 * g;
  const ox = (100 - w) / 2 - 4;
  const oy = 24;
  return (
    <g>
      <Board
        ox={ox}
        oy={oy}
        s={s}
        gap={g}
        rows={[
          ["a", "p", "c", "p", "a"],
          ["a", "c", "c", "a", "p"],
        ]}
      />
      <g transform="translate(55 60) rotate(-30)">
        <rect x={0} y={0} width={30} height={8} fill="var(--present)" />
        <rect x={-7} y={0} width={7} height={8} fill="var(--correct)" />
        <polygon points="30,0 38,4 30,8" fill="var(--fg)" />
      </g>
    </g>
  );
}

function Multiplayer() {
  return (
    <g>
      <circle cx={28} cy={34} r={9} fill="var(--correct)" />
      <rect x={18} y={45} width={20} height={24} rx={5} fill="var(--correct)" />
      <circle cx={72} cy={34} r={9} fill="var(--present)" />
      <rect x={62} y={45} width={20} height={24} rx={5} fill="var(--present)" />
      <rect x={40} y={74} width={20} height={18} rx={2} fill="var(--correct)" />
      <text
        x={50}
        y={88}
        textAnchor="middle"
        fontWeight={800}
        fontSize={11}
        fill="white"
      >
        VS
      </text>
    </g>
  );
}

function Solver() {
  const s = 14,
    g = 1.5;
  const ox = 12;
  const oy = 52;
  return (
    <g>
      <Board
        ox={ox}
        oy={oy}
        s={s}
        gap={g}
        rows={[["c", "a", "p", "c"]]}
      />
      <circle
        cx={68}
        cy={38}
        r={16}
        fill="none"
        stroke="var(--fg)"
        strokeWidth={3.5}
      />
      <circle cx={68} cy={38} r={10} fill="var(--present)" opacity={0.25} />
      <line
        x1={79}
        y1={50}
        x2={92}
        y2={63}
        stroke="var(--fg)"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </g>
  );
}

function Archive() {
  return (
    <g>
      <rect
        x={20}
        y={22}
        width={60}
        height={58}
        rx={5}
        fill="transparent"
        stroke="var(--border)"
        strokeWidth={2}
      />
      <rect x={20} y={22} width={60} height={14} rx={5} fill="var(--correct)" />
      <rect x={32} y={16} width={5} height={14} rx={1.5} fill="var(--fg)" />
      <rect x={63} y={16} width={5} height={14} rx={1.5} fill="var(--fg)" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <circle
            key={`${r}-${c}`}
            cx={28 + c * 12}
            cy={48 + r * 10}
            r={2}
            fill="var(--muted)"
          />
        )),
      )}
      <circle cx={52} cy={58} r={5} fill="var(--present)" />
    </g>
  );
}

export function GameThumbnail({
  kind,
  className,
}: {
  kind: ThumbKey;
  className?: string;
}) {
  const content: Record<ThumbKey, JSX.Element> = {
    wordle: <Wordle />,
    dordle: <Dordle />,
    quordle: <Quordle />,
    octordle: <Octordle />,
    sedecordle: <Sedecordle />,
    spellbee: <SpellBee />,
    connect: <Connect />,
    squares: <Squares />,
    custom: <Custom />,
    multiplayer: <Multiplayer />,
    solver: <Solver />,
    archive: <Archive />,
  };
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden
    >
      {content[kind]}
    </svg>
  );
}
