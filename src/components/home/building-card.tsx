import {
  IconArrowUpRight,
  IconBinaryTree,
  IconDeviceMobile,
  IconKeyboard,
  IconLink,
} from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

const NODUS_URL = 'https://usenodus.app/';

const CARD_VARS = '[--card-cool:#9ccc5c] [--card-warm:#72b98d]';
const HERO_BG =
  'bg-[radial-gradient(at_95%_0,#9ccc5c4d_0,#0000_70%),radial-gradient(at_90%_110%,#72b98d40_0,#0000_70%),linear-gradient(135deg,#1b1f19,#151614)]';
const CTA_BG =
  'bg-[linear-gradient(110deg,var(--card-cool),#bcd49a_48%,var(--card-warm))] text-[#172012] font-medium';

const FEATURES = [
  {
    icon: IconKeyboard,
    tone: 'text-[var(--card-cool)]',
    label: (
      <>
        <strong className="font-medium text-[#ecefe6]">One hotkey</strong> banks
        the last 30s–2m
      </>
    ),
  },
  {
    icon: IconBinaryTree,
    tone: 'text-[#bcd49a]',
    label: 'Node-based clip editor',
  },
  {
    icon: IconDeviceMobile,
    tone: 'text-[var(--card-warm)]',
    label: 'Vertical 9:16 for TikTok, Reels & Shorts',
  },
];

/** True once the footer scrolls in, so the card can get out of its way. */
function useFooterVisible() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return visible;
}

const SCROLL_DELTA = 8;
const AT_TOP_THRESHOLD = 80;

/**
 * Passive, rAF-throttled scroll steps. `onStep` fires after every 8px of travel
 * and whenever the page crosses the top threshold.
 */
function useScrollSteps(
  onStep: (direction: 'up' | 'down', atTop: boolean) => void
) {
  const onStepRef = useRef(onStep);
  useEffect(() => {
    onStepRef.current = onStep;
  });

  useEffect(() => {
    let last = window.scrollY;
    let wasAtTop = last < AT_TOP_THRESHOLD;
    let frame = 0;

    const update = () => {
      frame = 0;
      // Clamp so iOS rubber-banding never reads as a direction change.
      const max = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const y = Math.min(Math.max(window.scrollY, 0), max);
      const atTop = y < AT_TOP_THRESHOLD;
      const delta = y - last;
      const stepped = Math.abs(delta) >= SCROLL_DELTA;
      if (stepped) last = y;
      if (stepped || atTop !== wasAtTop)
        onStepRef.current(delta > 0 ? 'down' : 'up', atTop);
      wasAtTop = atTop;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

function LiveDot() {
  return (
    <span
      aria-hidden
      className="relative size-1.25 shrink-0 rounded-full bg-[var(--card-cool)]"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--card-cool)] motion-safe:animate-ping" />
    </span>
  );
}

function NodusIcon({ className }: { className: string }) {
  return (
    <img
      src="/images/nodus-icon.png"
      alt=""
      width={128}
      height={128}
      className={className}
    />
  );
}

/** Floating "Actively building" card for Nodus Studio, pinned bottom-left. */
export function BuildingCard() {
  const footerVisible = useFooterVisible();
  return (
    <>
      <DesktopCard hidden={footerVisible} />
      <MobileCard hidden={footerVisible} />
    </>
  );
}

function DesktopCard({ hidden }: { hidden: boolean }) {
  return (
    <aside
      aria-label="Currently building Nodus Studio"
      inert={hidden}
      data-hidden={hidden || undefined}
      className={`fixed bottom-6 left-6 z-10 w-80 origin-bottom-left scale-85 rounded-2xl border border-[#2f322c] bg-[#121214] p-3.5 text-left font-sans shadow-[0_12px_48px_#0004] transition-[opacity,translate] duration-300 ease-out data-hidden:pointer-events-none data-hidden:translate-y-3 data-hidden:opacity-0 max-[1799px]:bottom-4 max-[1799px]:left-4 print:hidden motion-reduce:transition-none compact:hidden ${CARD_VARS}`}
    >
      <div
        className={`relative h-44 overflow-hidden rounded-[10px] ${HERO_BG}`}
      >
        <span className="absolute top-4 left-4 z-1 inline-flex items-center gap-1.5 rounded-full border border-white/7 bg-[#111113b8] px-2.25 py-1.25 text-[10px] leading-[1.4] text-[#d8dcd2]">
          <LiveDot />
          Actively building
        </span>

        <span
          aria-hidden
          className="absolute top-3 -right-7 size-36 mix-blend-screen"
        >
          <NodusIcon className="absolute top-1/2 left-1/2 size-32 max-w-none -translate-1/2 -rotate-10 opacity-90 saturate-[.8]" />
        </span>

        <div className="absolute bottom-4.25 left-4 z-1">
          <h2 className="m-0 mb-1.5 text-[28px] leading-[1.1] font-[550] tracking-[-0.05em] text-[#f1f3ec]">
            Nodus Studio
          </h2>
          <p className="m-0 text-xs leading-normal text-[#c3c8bc]">
            Game clips to vertical edits,
            <br /> on Windows.
          </p>
        </div>
      </div>

      <div className="px-1.25 py-4.5">
        <p className="m-0 text-[11px] leading-normal text-[#9da396]">
          What I'm working on
        </p>
        <ul className="mt-3.5 grid list-none gap-3.25 p-0">
          {FEATURES.map(({ icon: Icon, tone, label }, i) => (
            <li
              key={i}
              className="m-0 flex items-center gap-2.5 p-0 text-[11px] leading-normal text-[#c8ccc2]"
            >
              <Icon
                aria-hidden
                stroke={1.4}
                className={`size-4.25 shrink-0 ${tone}`}
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-1 pb-1">
        <p className="m-0 text-[11px] leading-normal text-[#9da396]">
          Try it free
        </p>
        <a
          href={NODUS_URL}
          target="_blank"
          rel="noreferrer"
          className="group mt-2.5 flex items-center justify-between gap-3 rounded-lg border border-white/3 bg-[#1b1d19] py-1.75 pr-1.75 pl-3 text-[#cdd1c7] no-underline focus-visible:outline-offset-4"
        >
          <span className="inline-flex items-center gap-2 text-[11px]">
            <IconLink
              aria-hidden
              stroke={1.4}
              className="size-4 text-[#a0a69a]"
            />
            usenodus.app
          </span>
          <span
            className={`inline-flex min-h-7.75 items-center justify-center gap-1 rounded-[5px] px-3 py-1.25 text-[11px] transition-[filter] group-hover:brightness-110 ${CTA_BG}`}
          >
            Explore
            <IconArrowUpRight aria-hidden size={12} stroke={1.8} />
          </span>
        </a>
      </div>
    </aside>
  );
}

// Mobile surface: the container is the union of both shapes; each state is an
// inset() of it. clip-path cuts borders on its own edges, so the 1px border is a
// second, 1px-larger clipped layer under the fill. Both interpolate in lockstep.
// Both layers sit inside the fill, so the morphing shape carries and clips them:
// nothing ever renders outside the surface mid-morph.
const MORPH =
  'motion-safe:transition-[clip-path] motion-safe:duration-300 motion-safe:ease-drawer';
const BORDER_SHAPE =
  '[clip-path:inset(0_calc(100%_-_min(260px,100%))_0_0_round_12px)] group-data-[state=bar]/bc:[clip-path:inset(calc(100%_-_56px)_0_0_0_round_12px)]';
const FILL_SHAPE =
  '[clip-path:inset(1px_calc(100%_-_min(260px,100%)_+_1px)_1px_1px_round_11px)] group-data-[state=bar]/bc:[clip-path:inset(calc(100%_-_56px_+_1px)_1px_1px_1px_round_11px)]';

// Content crossfade, opacity only (the shape does the moving). The outgoing layer
// clears in 100ms; the incoming one waits 140ms, until the shape is ~3/4 there.
// Reduced motion: the shape snaps and both layers do a plain 150ms fade.
const LAYER = 'transition-opacity duration-150 ease-(--ease-out)';

/** Mobile: full card at the top of the page, morphs into a slim bar on scroll down. */
function MobileCard({ hidden }: { hidden: boolean }) {
  const [state, setState] = useState<'card' | 'bar'>('card');

  useScrollSteps((direction, atTop) => {
    if (atTop) setState('card');
    else if (direction === 'down') setState('bar');
  });

  const isBar = state === 'bar';

  return (
    <aside
      aria-label="Currently building Nodus Studio"
      inert={hidden}
      data-state={state}
      data-hidden={hidden || undefined}
      className={`group/bc pointer-events-none fixed inset-x-2 bottom-[max(8px,env(safe-area-inset-bottom))] z-10 hidden font-sans transition-opacity duration-240 ease-(--ease-out) data-hidden:opacity-0 print:hidden compact:block ${CARD_VARS}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 [filter:drop-shadow(0_8px_20px_#0004)]"
      >
        <div
          className={`absolute inset-0 bg-[#2f322c] ${MORPH} ${BORDER_SHAPE}`}
        />
      </div>

      <div
        className={`pointer-events-auto relative bg-[#121214] ${MORPH} ${FILL_SHAPE}`}
      >
        <div
          inert={isBar}
          className={`${LAYER} w-[min(260px,100%)] p-[11px] text-left motion-safe:delay-140 motion-safe:duration-200 group-data-[state=bar]/bc:pointer-events-none group-data-[state=bar]/bc:opacity-0 motion-safe:group-data-[state=bar]/bc:delay-0 motion-safe:group-data-[state=bar]/bc:duration-100`}
        >
          <div
            className={`relative h-24 overflow-hidden rounded-lg ${HERO_BG}`}
          >
            <span className="absolute top-2 left-2.5 z-1 inline-flex items-center gap-1.5 rounded-full border border-white/7 bg-[#111113b8] px-1.75 py-0.75 text-[9px] leading-[1.4] text-[#d8dcd2]">
              <LiveDot />
              Actively building
            </span>

            <span
              aria-hidden
              className="absolute top-1 -right-2 size-22 mix-blend-screen"
            >
              <NodusIcon className="absolute top-1/2 left-1/2 size-20 max-w-none -translate-1/2 -rotate-10 opacity-90 saturate-[.8]" />
            </span>

            <div className="absolute bottom-2.5 left-2.5 z-1">
              <h2 className="m-0 mb-0.5 text-xl leading-[1.1] font-[550] tracking-[-0.05em] text-[#f1f3ec]">
                Nodus Studio
              </h2>
              <p className="m-0 text-[10px] leading-normal text-[#c3c8bc]">
                Game clips to vertical edits, on Windows.
              </p>
            </div>
          </div>

          <ul className="m-0 grid list-none gap-1.5 px-0.75 py-2.5">
            {FEATURES.map(({ icon: Icon, tone, label }, i) => (
              <li
                key={i}
                className="m-0 flex items-center gap-1.75 p-0 text-[10px] leading-normal text-[#c8ccc2]"
              >
                <Icon
                  aria-hidden
                  stroke={1.4}
                  className={`size-3.25 shrink-0 ${tone}`}
                />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <a
            href={NODUS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 rounded-lg border border-white/3 bg-[#1b1d19] py-1.25 pr-1.25 pl-2.5 text-[#cdd1c7] no-underline focus-visible:outline-offset-4"
          >
            <span className="inline-flex items-center gap-1.75 text-[10px]">
              <IconLink
                aria-hidden
                stroke={1.4}
                className="size-3.5 text-[#a0a69a]"
              />
              usenodus.app
            </span>
            <span
              className={`inline-flex min-h-7 items-center justify-center gap-1 rounded-[5px] px-2.5 py-1 text-[10px] ${CTA_BG}`}
            >
              Explore
              <IconArrowUpRight aria-hidden size={12} stroke={1.8} />
            </span>
          </a>
        </div>

        <div
          inert={!isBar}
          className={`${LAYER} pointer-events-none absolute inset-x-0 bottom-0 flex h-14 items-center gap-2.5 px-2.5 opacity-0 motion-safe:delay-0 motion-safe:duration-100 group-data-[state=bar]/bc:pointer-events-auto group-data-[state=bar]/bc:opacity-100 motion-safe:group-data-[state=bar]/bc:delay-140 motion-safe:group-data-[state=bar]/bc:duration-200`}
        >
          <button
            type="button"
            aria-expanded={!isBar}
            aria-label="Expand Nodus Studio card"
            onClick={() => setState('card')}
            className="flex h-full min-w-0 flex-1 items-center gap-2.5 rounded-lg bg-transparent p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--card-cool)"
          >
            <span
              aria-hidden
              className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-md bg-[linear-gradient(135deg,#1b1f19,#151614)]"
            >
              <NodusIcon className="size-7 -rotate-10 opacity-90 saturate-[.8]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] leading-tight font-[550] tracking-[-0.02em] text-[#f1f3ec]">
                Nodus Studio
              </span>
              <span className="mt-0.5 inline-flex items-center gap-1.5 text-[10px] leading-tight text-[#9da396]">
                <LiveDot />
                Actively building
              </span>
            </span>
          </button>

          <a
            href={NODUS_URL}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg px-3.5 text-[12px] no-underline transition-[scale] active:scale-97 focus-visible:outline-offset-2 ${CTA_BG}`}
          >
            Explore
            <IconArrowUpRight aria-hidden size={12} stroke={1.8} />
          </a>
        </div>
      </div>
    </aside>
  );
}
