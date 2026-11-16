import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
} from '@tabler/icons-react';
import type { CSSProperties, ReactNode } from 'react';

/*
 * Isometric scene, 2:1 projection. (u, v) are plate units centred on the plate;
 * screen x = CX + (u - v) * S, screen y = cy + (u + v) * S / 2 - height.
 */
const S = 22;
const CX = 240;
const HALF = 4; // plate is 8 x 8 units
const THICK = 8;
const KEY_H = 12;
const PLATE_CY = [216, 164, 112] as const; // bottom, middle, top
const TOP_CY = PLATE_CY[2];

const n = (x: number) => +x.toFixed(2);
const proj = (u: number, v: number, cy: number, h = 0): [number, number] => [
  n(CX + (u - v) * S),
  n(cy + ((u + v) * S) / 2 - h),
];
const pt = ([x, y]: [number, number]) => `${x},${y}`;
/** Bottom edge of a plate's front wall under point p. */
const down = ([x, y]: [number, number]): [number, number] => [x, y + THICK];

/** Rounded rhombus on the (u, v) plane; returns path plus the left/bottom/right apex points. */
function roundedRhombus(
  cu: number,
  cv: number,
  hu: number,
  hv: number,
  cy: number,
  h: number
) {
  const P = [
    proj(cu - hu, cv - hv, cy, h), // top
    proj(cu + hu, cv - hv, cy, h), // right
    proj(cu + hu, cv + hv, cy, h), // bottom
    proj(cu - hu, cv + hv, cy, h), // left
  ];
  const f = 0.3;
  const apex: [number, number][] = [];
  let d = '';
  P.forEach((p, i) => {
    const prev = P[(i + 3) % 4];
    const next = P[(i + 1) % 4];
    const a: [number, number] = [
      p[0] + (prev[0] - p[0]) * f,
      p[1] + (prev[1] - p[1]) * f,
    ];
    const b: [number, number] = [
      p[0] + (next[0] - p[0]) * f,
      p[1] + (next[1] - p[1]) * f,
    ];
    apex[i] = [
      n(0.25 * a[0] + 0.5 * p[0] + 0.25 * b[0]),
      n(0.25 * a[1] + 0.5 * p[1] + 0.25 * b[1]),
    ];
    d += `${i === 0 ? 'M' : 'L'}${pt([n(a[0]), n(a[1])])}Q${pt(p)} ${pt([n(b[0]), n(b[1])])}`;
  });
  return { d: `${d}Z`, right: apex[1], bottom: apex[2], left: apex[3] };
}

type Icon = typeof IconBrandReact;

type Key = {
  id: string;
  Icon?: Icon;
  label?: string;
  u: number;
  v: number;
  hu: number;
  hv: number;
  delay: number;
  bob: [number, number];
};

/** Listed back to front (ascending u + v), which is the SVG paint order. */
const KEYS: Key[] = [
  {
    id: 'react',
    Icon: IconBrandReact,
    u: -2.4,
    v: -1.4,
    hu: 0.85,
    hv: 0.85,
    delay: 380,
    bob: [6.2, 0],
  },
  {
    id: 'typescript',
    Icon: IconBrandTypescript,
    u: 0,
    v: -1.4,
    hu: 0.85,
    hv: 0.85,
    delay: 430,
    bob: [7.4, 1.1],
  },
  {
    id: 'nextjs',
    Icon: IconBrandNextjs,
    u: -1.2,
    v: 0.9,
    hu: 0.85,
    hv: 0.85,
    delay: 490,
    bob: [6.8, 2.3],
  },
  {
    id: 'react-native',
    Icon: IconBrandReactNative,
    u: 2.4,
    v: -1.4,
    hu: 0.85,
    hv: 0.85,
    delay: 540,
    bob: [5.8, 0.6],
  },
  {
    id: 'tailwind',
    Icon: IconBrandTailwind,
    u: 1.2,
    v: 0.9,
    hu: 0.85,
    hv: 0.85,
    delay: 600,
    bob: [7.0, 1.8],
  },
  {
    id: 'label',
    label: '~/iyansr',
    u: 0,
    v: 3,
    hu: 1.7,
    hv: 0.6,
    delay: 660,
    bob: [6.5, 2.9],
  },
];

const ICON_UNITS = 1.15;

function gridPath(cy: number) {
  let d = '';
  for (let i = -HALF + 1; i < HALF; i++) {
    d += `M${pt(proj(i, -HALF, cy))}L${pt(proj(i, HALF, cy))}`;
    d += `M${pt(proj(-HALF, i, cy))}L${pt(proj(HALF, i, cy))}`;
  }
  return d;
}

/* Local SVG class strings (kept whole so Tailwind sees every utility). */
const wall =
  '[vector-effect:non-scaling-stroke] fill-bg stroke-line stroke-1 [stroke-linejoin:round]';
const faceTop =
  '[vector-effect:non-scaling-stroke] fill-bg stroke-line-strong stroke-1 [stroke-linejoin:round]';
const grid =
  '[vector-effect:non-scaling-stroke] fill-none stroke-hair stroke-1';
const gridTop =
  '[vector-effect:non-scaling-stroke] fill-none stroke-line stroke-1';
const pillar =
  '[vector-effect:non-scaling-stroke] fill-none stroke-line-strong stroke-1 [stroke-dasharray:2_3]';
const foot =
  '[vector-effect:non-scaling-stroke] fill-none stroke-line stroke-1 [stroke-dasharray:2_2]';
const keyBase =
  '[vector-effect:non-scaling-stroke] fill-key-side stroke-line stroke-1 [stroke-linejoin:round]';
const keyEdge =
  '[vector-effect:non-scaling-stroke] fill-none stroke-line stroke-1 [stroke-linecap:round]';
const keyTop =
  '[vector-effect:non-scaling-stroke] fill-key-top stroke-line-strong stroke-1 [stroke-linejoin:round]';
const keyTopLabel =
  '[vector-effect:non-scaling-stroke] fill-[color-mix(in_srgb,var(--color-accent)_9%,var(--color-key-top))] stroke-accent/55 stroke-1 [stroke-linejoin:round]';
const labelText =
  'fill-accent-text stroke-none font-mono text-[12px] font-medium tracking-[0.02em]';

function Plate({
  cy,
  index,
  top = false,
  pillarsTo,
}: {
  cy: number;
  index: number;
  top?: boolean;
  /** cy of the plate below; draws dashed corner posts down to it. */
  pillarsTo?: number;
}) {
  const T = proj(-HALF, -HALF, cy);
  const R = proj(HALF, -HALF, cy);
  const B = proj(HALF, HALF, cy);
  const L = proj(-HALF, HALF, cy);

  let pillars = '';
  if (pillarsTo !== undefined) {
    const drop = pillarsTo - cy;
    for (const p of [L, B, R])
      pillars += `M${p[0]},${p[1] + THICK}V${p[1] + drop}`;
  }

  return (
    <g
      className="motion-safe:animate-scene-plate motion-reduce:animate-scene-fade"
      style={{ '--d': `${[160, 220, 290][index]}ms` } as CSSProperties}
    >
      {pillars && <path className={pillar} d={pillars} />}
      <polygon
        className={wall}
        points={[L, B, down(B), down(L)].map(pt).join(' ')}
      />
      <polygon
        className={wall}
        points={[B, R, down(R), down(B)].map(pt).join(' ')}
      />
      <polygon
        className={top ? faceTop : wall}
        points={[T, R, B, L].map(pt).join(' ')}
      />
      <path className={top ? gridTop : grid} d={gridPath(cy)} />
    </g>
  );
}

function KeyCap({ k }: { k: Key }) {
  const base = roundedRhombus(k.u, k.v, k.hu, k.hv, TOP_CY, 0);
  const top = roundedRhombus(k.u, k.v, k.hu, k.hv, TOP_CY, KEY_H);
  const below = (p: [number, number]): [number, number] => [
    p[0],
    n(p[1] + KEY_H),
  ];
  const walls = [
    top.left,
    top.bottom,
    top.right,
    below(top.right),
    below(top.bottom),
    below(top.left),
  ]
    .map(pt)
    .join(' ');

  let face: ReactNode;
  if (k.Icon) {
    const sc = (ICON_UNITS * S) / 24;
    const [e, f] = proj(
      k.u - ICON_UNITS / 2,
      k.v - ICON_UNITS / 2,
      TOP_CY,
      KEY_H
    );
    face = (
      <g
        className="text-fg-soft"
        transform={`matrix(${n(sc)} ${n(sc / 2)} ${n(-sc)} ${n(sc / 2)} ${e} ${f})`}
      >
        <k.Icon size={24} stroke={1.5} />
      </g>
    );
  } else {
    const [e, f] = proj(k.u, k.v, TOP_CY, KEY_H);
    const kk = 0.9;
    face = (
      <text
        className={labelText}
        transform={`matrix(${kk} ${kk / 2} ${-kk} ${kk / 2} ${e} ${f})`}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {k.label}
      </text>
    );
  }

  return (
    <g
      className="motion-safe:animate-scene-chip motion-reduce:animate-scene-fade"
      style={
        {
          '--d': `${k.delay}ms`,
          '--bob': `${k.bob[0]}s`,
          '--bob-d': `${1400 + k.bob[1] * 1000}ms`,
        } as CSSProperties
      }
    >
      <g className="motion-safe:animate-scene-bob">
        <path className={keyBase} d={base.d} />
        <polygon className="fill-key-side" points={walls} />
        <path
          className={keyEdge}
          d={`M${pt(top.left)}L${pt(below(top.left))}M${pt(top.right)}L${pt(below(top.right))}M${pt(top.bottom)}L${pt(below(top.bottom))}`}
        />
        <path className={k.label ? keyTopLabel : keyTop} d={top.d} />
        {face}
      </g>
    </g>
  );
}

/** Decorative isometric stack scene that sits behind the hero copy on md+. */
export function HeroScene() {
  return (
    <div
      className="pointer-events-none absolute top-8 -right-10 -bottom-2 z-0 w-[min(34rem,58%)] [-webkit-mask-composite:source-in] [-webkit-mask-image:radial-gradient(ellipse_66%_70%_at_56%_52%,#000_50%,transparent_100%),linear-gradient(to_right,transparent_0,#000_36%)] [mask-composite:intersect] [mask-image:radial-gradient(ellipse_66%_70%_at_56%_52%,#000_50%,transparent_100%),linear-gradient(to_right,transparent_0,#000_36%)] max-md:top-auto max-md:-right-20 max-md:-bottom-22 max-md:h-68 max-md:w-96 max-md:opacity-40 max-md:[-webkit-mask-image:radial-gradient(ellipse_60%_62%_at_55%_50%,#000_40%,transparent_100%)] max-md:[mask-image:radial-gradient(ellipse_60%_62%_at_55%_50%,#000_40%,transparent_100%)]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_40%_at_50%_60%,var(--color-accent-soft),transparent_72%)] motion-safe:animate-scene-glow motion-reduce:animate-scene-fade" />
      <svg
        className="relative block size-full overflow-visible"
        viewBox="0 0 480 340"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <Plate cy={PLATE_CY[0]} index={0} />
        <Plate cy={PLATE_CY[1]} index={1} pillarsTo={PLATE_CY[0]} />
        <Plate cy={PLATE_CY[2]} index={2} top pillarsTo={PLATE_CY[1]} />
        <g className="motion-safe:animate-scene-feet motion-reduce:animate-scene-fade">
          {KEYS.map((k) => (
            <path
              key={k.id}
              className={foot}
              d={
                roundedRhombus(k.u, k.v, k.hu + 0.18, k.hv + 0.18, TOP_CY, 0).d
              }
            />
          ))}
        </g>
        {KEYS.map((k) => (
          <KeyCap key={k.id} k={k} />
        ))}
      </svg>
    </div>
  );
}
