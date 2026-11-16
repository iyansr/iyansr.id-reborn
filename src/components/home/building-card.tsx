import {
  IconArrowUpRight,
  IconBinaryTree,
  IconDeviceMobile,
  IconKeyboard,
  IconLink,
} from '@tabler/icons-react';

const NODUS_URL = 'https://usenodus.app/';

const FEATURES = [
  {
    icon: IconKeyboard,
    tone: 'text-[var(--card-cool)]',
    label: (
      <>
        <strong className="font-medium text-[#ecefe6]">One hotkey</strong> banks the last 30s–2m
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

/** Floating "Actively building" card for Nodus Studio, pinned bottom-left. */
export function BuildingCard() {
  return (
    <aside
      aria-label="Currently building Nodus Studio"
      className="building-card fixed bottom-6 left-6 z-10 w-80 origin-bottom-left scale-85 rounded-2xl border border-[#2f322c] bg-[#121214] p-3.5 text-left font-sans shadow-[0_12px_48px_#0004] [--card-cool:#9ccc5c] [--card-warm:#72b98d] max-[1799px]:bottom-4 max-[1799px]:left-4 print:hidden compact:bottom-[max(12px,env(safe-area-inset-bottom))] compact:left-3 compact:w-[min(300px,100vw-24px)] compact:rounded-xl compact:p-2.5"
    >
      <div className="relative h-44 overflow-hidden rounded-[10px] bg-[radial-gradient(at_95%_0,#9ccc5c4d_0,#0000_70%),radial-gradient(at_90%_110%,#72b98d40_0,#0000_70%),linear-gradient(135deg,#1b1f19,#151614)] compact:h-28">
        <span className="absolute top-4 left-4 z-1 inline-flex items-center gap-1.5 rounded-full border border-white/7 bg-[#111113b8] px-2.25 py-1.25 text-[10px] leading-[1.4] text-[#d8dcd2] compact:top-2.5 compact:left-3 compact:px-1.75 compact:py-0.75 compact:text-[9px]">
          <span aria-hidden className="relative size-1.25 rounded-full bg-[var(--card-cool)]">
            <span className="absolute inset-0 rounded-full bg-[var(--card-cool)] motion-safe:animate-ping" />
          </span>
          Actively building
        </span>

        <span
          aria-hidden
          className="absolute top-3 -right-7 size-36 mix-blend-screen compact:top-1.5 compact:-right-2.5 compact:size-26"
        >
          <img
            src="/images/nodus-icon.png"
            alt=""
            width={128}
            height={128}
            className="absolute top-1/2 left-1/2 size-32 max-w-none -translate-1/2 -rotate-10 opacity-90 saturate-[.8] compact:size-24"
          />
        </span>

        <div className="absolute bottom-4.25 left-4 z-1 compact:bottom-3 compact:left-3">
          <h2 className="m-0 mb-1.5 text-[28px] leading-[1.1] font-[550] tracking-[-0.05em] text-[#f1f3ec] compact:mb-1 compact:text-2xl">
            Nodus Studio
          </h2>
          <p className="m-0 text-xs leading-normal text-[#c3c8bc] compact:text-[10px]">
            Game clips to vertical edits,
            <br className="compact:hidden" /> on Windows.
          </p>
        </div>
      </div>

      <div className="px-1.25 py-4.5 compact:px-0.75 compact:py-3">
        <p className="m-0 text-[11px] leading-normal text-[#9da396] compact:hidden">
          What I'm working on
        </p>
        <ul className="mt-3.5 grid list-none gap-3.25 p-0 compact:m-0 compact:gap-1.5">
          {FEATURES.map(({ icon: Icon, tone, label }, i) => (
            <li
              key={i}
              className="m-0 flex items-center gap-2.5 p-0 text-[11px] leading-normal text-[#c8ccc2] compact:gap-1.75 compact:text-[10px]"
            >
              <Icon
                aria-hidden
                stroke={1.4}
                className={`size-4.25 shrink-0 compact:size-3.25 ${tone}`}
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-1 pb-1 compact:p-0">
        <p className="m-0 text-[11px] leading-normal text-[#9da396] compact:hidden">
          Try it free
        </p>
        <a
          href={NODUS_URL}
          target="_blank"
          rel="noreferrer"
          className="group mt-2.5 flex items-center justify-between gap-3 rounded-lg border border-white/3 bg-[#1b1d19] py-1.75 pr-1.75 pl-3 text-[#cdd1c7] no-underline focus-visible:outline-offset-4 compact:mt-0"
        >
          <span className="inline-flex items-center gap-2 text-[11px]">
            <IconLink aria-hidden stroke={1.4} className="size-4 text-[#a0a69a]" />
            usenodus.app
          </span>
          <span className="inline-flex min-h-7.75 items-center justify-center gap-1 rounded-[5px] bg-[linear-gradient(110deg,var(--card-cool),#bcd49a_48%,var(--card-warm))] px-3 py-1.25 text-[11px] font-medium text-[#172012] transition-[filter] group-hover:brightness-110">
            Explore
            <IconArrowUpRight aria-hidden size={12} stroke={1.8} />
          </span>
        </a>
      </div>
    </aside>
  );
}
