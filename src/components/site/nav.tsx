import { IconBrandGithub, IconMenu2, IconX } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

import { GITHUB_URL } from './utils';

const NAV = [
  { to: '/', hash: 'work', label: 'Work' },
  { to: '/', hash: 'experience', label: 'Experience' },
  { to: '/', hash: 'open-source', label: 'Open source' },
  { to: '/blog', hash: undefined, label: 'Blog' },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    <header className="mn-header sticky top-0 z-40 pt-3 pb-3">
      <nav aria-label="Primary" className="relative">
        <div className="mn-navbar flex items-center justify-between pr-2 pl-4">
          <Link to="/" className="mn-mono text-[13px] font-medium tracking-tight">
            iyansr
          </Link>

          <ul className="hidden items-center gap-6 pr-2 md:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  activeOptions={{ includeHash: true }}
                  className="mn-navlink whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="ml-1 border-l border-(--mn-line) pl-5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mn-navlink inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <IconBrandGithub size={15} stroke={1.75} aria-hidden />
                GitHub
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-1 md:hidden">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="mn-navlink inline-flex size-8 items-center justify-center rounded-md"
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
              className="mn-navlink inline-flex size-8 items-center justify-center rounded-md"
            >
              {open ? <IconX size={18} aria-hidden /> : <IconMenu2 size={18} aria-hidden />}
            </button>
          </div>
        </div>

        {open && (
          <ul id="mn-menu" className="mn-menu absolute top-full right-0 left-0 mt-2 p-1.5 md:hidden">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  activeOptions={{ includeHash: true }}
                  onClick={() => setOpen(false)}
                  className="mn-navlink block rounded-md px-3 py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
