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

import { toggleTheme } from './theme';
import { GITHUB_URL } from './utils';

const NAV = [
  { to: '/', hash: 'work', label: 'Work', icon: IconBriefcase },
  { to: '/', hash: 'experience', label: 'Experience', icon: IconTimeline },
  { to: '/', hash: 'open-source', label: 'Open source', icon: IconGitPullRequest },
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
      const pill = pills.querySelector<HTMLElement>(':scope > a[data-status="active"]');
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
    <header className="mn-nav pointer-events-none sticky top-0 z-40 py-3 md:py-5">
      <div className="grid grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          className="mn-glass mn-brand pointer-events-auto flex h-9.5 items-center gap-2.5 justify-self-start rounded-full p-1 md:h-11 md:pr-4"
        >
          <span className="mn-brand-avatar size-7.5 md:size-8.5">
            <img src="/images/iyansr.png" alt="" width={34} height={34} />
          </span>
          <span className="mn-mono hidden text-[13px] font-medium tracking-tight md:inline">
            iyansr
          </span>
          <span className="sr-only md:hidden">iyansr, home</span>
        </Link>

        <nav
          ref={pillsRef}
          aria-label="Primary"
          className="mn-glass mn-pills pointer-events-auto relative hidden items-center gap-1 rounded-full p-1.25 md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              activeOptions={{ includeHash: true }}
              className="mn-pill whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <div
            ref={activeRef}
            aria-hidden
            inert
            className="mn-pills-active pointer-events-none absolute inset-0 flex items-center gap-1 p-1.25"
          >
            {NAV.map((item) => (
              <span key={item.label} className="mn-pill whitespace-nowrap">
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
            className="mn-glass mn-icon-btn grid place-items-center"
          >
            <IconSun size={18} stroke={1.75} aria-hidden className="mn-theme-sun" />
            <IconMoon size={18} stroke={1.75} aria-hidden className="mn-theme-moon" />
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="mn-glass mn-icon-btn grid place-items-center"
          >
            <IconBrandGithub size={18} stroke={1.75} aria-hidden />
          </a>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mn-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="mn-glass mn-icon-btn grid place-items-center md:hidden"
          >
            <IconMenu2 size={18} aria-hidden className="mn-menu-icon mn-menu-icon-open" />
            <IconX size={18} aria-hidden className="mn-menu-icon mn-menu-icon-close" />
          </button>

          {/* Stays mounted so closing can animate; `inert` + visibility keep it out of reach. */}
          <nav
            aria-label="Primary"
            data-open={open}
            inert={!open}
            className="absolute top-full right-0 mt-2 md:hidden"
          >
            <ul id="mn-menu" className="mn-menu flex w-52 flex-col gap-1 p-2">
              {NAV.map(({ icon: Icon, ...item }) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    hash={item.hash}
                    activeOptions={{ includeHash: true }}
                    onClick={() => setOpen(false)}
                    className="mn-pill flex items-center gap-3 rounded-xl"
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
