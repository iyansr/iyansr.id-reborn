import { IconArrowUp, IconArrowUpRight } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

import { CAL_URL, GITHUB_URL, RESUME_URL } from './utils';

export function Footer() {
  return (
    <footer className="border-t border-(--mn-hair) pt-14 md:pt-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[16rem] text-[13px] text-(--mn-muted)">
          Building TypeScript products end to end.
        </p>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-2xl font-medium tracking-tight transition-colors hover:text-(--mn-accent-text) md:text-[1.75rem]"
        >
          Book a call
          <IconArrowUpRight size={22} aria-hidden className="text-(--mn-muted) transition-colors group-hover:text-(--mn-accent-text)" />
        </a>
      </div>

      <div className="mt-12 flex items-center justify-between gap-4">
        <ul className="flex items-center gap-5 text-[13px]">
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="mn-link">
              GitHub
            </a>
          </li>
          <li>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="mn-link">
              Resume
            </a>
          </li>
          <li>
            <Link to="/blog" className="mn-link">
              Blog
            </Link>
          </li>
        </ul>
        <a href="#top" aria-label="Back to top" className="mn-top">
          <IconArrowUp size={16} aria-hidden />
        </a>
      </div>

      <div className="mn-wordmark-wrap mt-14" aria-hidden>
        <span className="mn-wordmark">iyansr</span>
      </div>
    </footer>
  );
}
