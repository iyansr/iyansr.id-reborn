import {
  IconBrandGithub,
  IconBriefcase,
  IconClock,
  IconGitPullRequest,
  IconMenu2,
  IconMoon,
  IconPencil,
  IconSun,
  IconTimeline,
  IconUser,
  IconX,
} from '@tabler/icons-react';
import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { glass } from './classes';
import { toggleTheme } from './theme';
import { GITHUB_URL } from './utils';

/** Shared pill shape for nav links; each use adds its own color states. */
const pill =
  'rounded-full px-3.5 py-1.75 text-[13px] font-medium [transition:color_0.2s,background-color_0.2s]';

/** Round icon button; pair with `glass`. Display comes from the caller so `md:hidden` can win. */
const iconBtn =
  'size-9.5 rounded-full text-muted [transition:color_0.2s,scale_200ms_var(--ease-out)] hover:scale-105 hover:text-fg';

/** Menu and close icons share one grid cell and crossfade. */
const menuIcon =
  'col-start-1 row-start-1 [transition:opacity_150ms_var(--ease-out),scale_150ms_var(--ease-out),filter_150ms_var(--ease-out)]';

const NAV = [
  { to: '/', hash: 'work', label: 'Work', icon: IconBriefcase },
  { to: '/', hash: 'experience', label: 'Experience', icon: IconTimeline },
  {
    to: '/',
    hash: 'open-source',
    label: 'Open source',
    icon: IconGitPullRequest,
  },
  { to: '/blog', hash: undefined, label: 'Blog', icon: IconPencil },
  { to: '/now', hash: undefined, label: 'Now', icon: IconClock },
  { to: '/about', hash: undefined, label: 'About', icon: IconUser },
] as const;

/** Clips the accent copy of the pill row to the active link, so the highlight slides between links. */
function useActivePill() {
  const href = useRouterState({ select: (state) => state.location.href });
  const pillsRef = useRef<HTMLElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pills = pillsRef.current;
    const overlay = activeRef.current;
    if (!pills || !overlay) return;

    const place = () => {
      const pill = pills.querySelector<HTMLElement>(
        ':scope > a[data-status="active"]'
      );
      if (!pill) {
        overlay.dataset.visible = 'false';
        return;
      }
      const right = pills.clientWidth - pill.offsetLeft - pill.offsetWidth;
      const bottom = pills.clientHeight - pill.offsetTop - pill.offsetHeight;
      const clip = `inset(${pill.offsetTop}px ${right}px ${bottom}px ${pill.offsetLeft}px round 999px)`;
      if (overlay.dataset.visible === 'true') {
        overlay.style.clipPath = clip;
        return;
      }
      // Appearing: place it without sliding in from a stale position.
      overlay.style.transition = 'none';
      overlay.style.clipPath = clip;
      overlay.dataset.visible = 'true';
      overlay.getBoundingClientRect();
      overlay.style.transition = '';
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(pills);
    return () => observer.disconnect();
  }, [href]);

  return { pillsRef, activeRef };
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pillsRef, activeRef } = useActivePill();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-40 py-3 in-[html:active-view-transition-type(page)]:[view-transition-name:site-nav] md:py-5">
      <div className="grid grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          className={`${glass} pointer-events-auto flex h-9.5 items-center gap-2.5 justify-self-start rounded-full p-1 [transition:scale_200ms_var(--ease-out)] hover:scale-105 md:h-11 md:pr-4`}
        >
          <span className="block size-7.5 overflow-hidden rounded-full bg-surface md:size-8.5">
            <img
              src="/images/iyansr.png"
              alt=""
              width={34}
              height={34}
              className="size-full origin-[center_30%] scale-135 object-cover object-[center_20%]"
            />
          </span>
          <span className="hidden font-mono text-[13px] font-medium tracking-tight md:inline">
            iyansr
          </span>
          <span className="sr-only md:hidden">iyansr, home</span>
        </Link>

        <nav
          ref={pillsRef}
          aria-label="Primary"
          className={`${glass} group/pills pointer-events-auto relative hidden items-center gap-1 rounded-full p-1.25 md:flex`}
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              activeOptions={{ includeHash: true }}
              className={`${pill} whitespace-nowrap text-muted hover:text-fg data-[status=active]:bg-accent-soft data-[status=active]:text-accent-text group-has-[>[data-visible=true]]/pills:data-[status=active]:bg-transparent group-has-[>[data-visible=true]]/pills:data-[status=active]:text-muted`}
            >
              {item.label}
            </Link>
          ))}
          <div
            ref={activeRef}
            aria-hidden
            inert
            className="pointer-events-none absolute inset-0 flex items-center gap-1 p-1.25 opacity-0 [transition:opacity_150ms_var(--ease-out)] motion-safe:[transition:clip-path_250ms_var(--ease-in-out),opacity_150ms_var(--ease-out)] data-[visible=true]:opacity-100"
          >
            {NAV.map((item) => (
              <span
                key={item.label}
                className={`${pill} whitespace-nowrap bg-accent-soft text-accent-text`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </nav>

        <div className="pointer-events-auto relative flex items-center gap-2 justify-self-end">
          <button
            type="button"
            aria-label="Toggle light and dark theme"
            onClick={toggleTheme}
            className={`${glass} ${iconBtn} grid place-items-center`}
          >
            <IconSun
              size={18}
              stroke={1.75}
              aria-hidden
              className="block in-data-[theme=light]:hidden"
            />
            <IconMoon
              size={18}
              stroke={1.75}
              aria-hidden
              className="hidden in-data-[theme=light]:block"
            />
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className={`${glass} ${iconBtn} grid place-items-center`}
          >
            <IconBrandGithub size={18} stroke={1.75} aria-hidden />
          </a>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className={`${glass} ${iconBtn} group/menubtn grid place-items-center md:hidden`}
          >
            <IconMenu2
              size={18}
              aria-hidden
              className={`${menuIcon} group-aria-expanded/menubtn:opacity-0 group-aria-expanded/menubtn:blur-[2px] motion-safe:group-aria-expanded/menubtn:scale-80`}
            />
            <IconX
              size={18}
              aria-hidden
              className={`${menuIcon} group-aria-[expanded=false]/menubtn:opacity-0 group-aria-[expanded=false]/menubtn:blur-[2px] motion-safe:group-aria-[expanded=false]/menubtn:scale-80`}
            />
          </button>

          {/* Stays mounted so closing can animate; `inert` + visibility keep it out of reach. */}
          <nav
            aria-label="Primary"
            data-open={open}
            inert={!open}
            className="group/menu absolute top-full right-0 mt-2 md:hidden"
          >
            <ul
              id="site-menu"
              className="flex w-52 origin-top-right flex-col gap-1 rounded-2xl border border-line bg-[color-mix(in_srgb,var(--color-bg)_97%,var(--color-fg))] p-2 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.45)] backdrop-blur-md [transition:opacity_120ms_var(--ease-out),translate_120ms_var(--ease-out),scale_120ms_var(--ease-out),visibility_0s_120ms] group-data-[open=false]/menu:invisible group-data-[open=false]/menu:opacity-0 group-data-[open=true]/menu:[transition:opacity_150ms_var(--ease-out),translate_150ms_var(--ease-out),scale_150ms_var(--ease-out),visibility_0s] motion-safe:group-data-[open=false]/menu:-translate-y-1 motion-safe:group-data-[open=false]/menu:scale-97"
            >
              {NAV.map(({ icon: Icon, ...item }) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    hash={item.hash}
                    activeOptions={{ includeHash: true }}
                    onClick={() => setOpen(false)}
                    className={`${pill} flex items-center gap-3 text-muted hover:text-fg data-[status=active]:bg-accent-soft data-[status=active]:text-accent-text`}
                  >
                    <Icon size={16} stroke={1.75} aria-hidden />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
