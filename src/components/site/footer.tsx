import { IconArrowUp, IconArrowUpRight } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

import { glass, link } from './classes';
import { GITHUB_URL, HIRE_URL, RESUME_URL } from './utils';

export function Footer() {
  return (
    <footer className="border-t border-hair pt-14 md:pt-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[16rem] text-[13px] text-muted">
          Building TypeScript products end to end.
        </p>
        <a
          href={HIRE_URL}
          className="group inline-flex items-center gap-2 text-2xl font-medium tracking-tight transition-colors hover:text-accent-text md:text-[1.75rem]"
        >
          Hire me
          <IconArrowUpRight
            size={22}
            aria-hidden
            className="text-muted [transition:color_0.2s,translate_200ms_var(--ease-out)] group-hover:text-accent-text motion-safe:pointer-fine:group-hover:translate-x-0.5 motion-safe:pointer-fine:group-hover:-translate-y-0.5"
          />
        </a>
      </div>

      <div className="mt-12 flex items-center justify-between gap-4">
        <ul className="flex items-center gap-5 text-[13px]">
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className={link}
            >
              Resume
            </a>
          </li>
          <li>
            <Link to="/blog" className={link}>
              Blog
            </Link>
          </li>
        </ul>
        <a
          href="#top"
          aria-label="Back to top"
          className={`${glass} inline-flex size-8 items-center justify-center rounded-full text-muted [transition:color_0.2s,border-color_0.2s,scale_160ms_var(--ease-out)] hover:border-line-strong hover:text-fg motion-safe:active:scale-97`}
        >
          <IconArrowUp size={16} aria-hidden />
        </a>
      </div>

      <div className="@container mt-14 overflow-hidden" aria-hidden>
        <span className="-mb-[0.3em] block bg-linear-to-b/srgb from-fg/30 to-transparent to-85% bg-clip-text text-center font-sans text-[length:37cqw] leading-none font-bold tracking-[-0.06em] whitespace-nowrap text-transparent select-none">
          iyansr
        </span>
      </div>
    </footer>
  );
}
