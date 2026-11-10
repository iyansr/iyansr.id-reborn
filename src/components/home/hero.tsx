import { IconBrandGithub } from '@tabler/icons-react';

import { CAL_URL, GITHUB_URL, RESUME_URL } from '@/components/site/utils';

export function Hero() {
  return (
    <section className="mn-hero pt-24 pb-16 md:pt-28 md:pb-20">
      <p className="mn-label flex items-center gap-2">
        <span className="mn-dot" aria-hidden />
        Open to work
      </p>

      <h1 className="mt-4 text-[1.625rem] leading-[1.2] font-medium tracking-tight text-balance md:text-[1.875rem]">
        Hi, I&apos;m{' '}
        <span className="whitespace-nowrap">
          <span className="mn-avatar">
            <img src="/images/iyansr.png" alt="" width={48} height={48} />
          </span>{' '}
          Iyan Saputra
        </span>{' '}
        <span className="text-[13px] font-normal tracking-normal whitespace-nowrap text-(--mn-muted) md:text-[14px]">
          (I Putu Saputrayana)
        </span>
        <span className="block text-(--mn-muted)">Senior Software Engineer</span>
      </h1>

      <p className="mt-3 max-w-lg text-[14px] text-(--mn-muted)">
        Shipping React and TypeScript products end to end, remotely from Indonesia.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={CAL_URL} target="_blank" rel="noreferrer" className="mn-btn">
          Book a call
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="mn-btn-ghost">
          <IconBrandGithub size={15} stroke={1.75} aria-hidden />
          GitHub
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="mn-link ml-2 text-[13px]"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
