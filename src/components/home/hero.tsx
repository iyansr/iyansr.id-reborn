import { IconBrandGithub } from '@tabler/icons-react';

import { btn, label, link } from '@/components/site/classes';
import { GITHUB_URL, HIRE_URL, RESUME_URL } from '@/components/site/utils';

import { HeroScene } from './hero-scene';

export function Hero() {
  return (
    <div className="relative isolate">
      <HeroScene />
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20">
        <p
          className={`${label} flex items-center gap-2 motion-safe:animate-enter`}
        >
          <span
            className="inline-block size-1.5 rounded-full bg-accent"
            aria-hidden
          />
          Open to work
        </p>

        <h1 className="mt-4 text-[1.625rem] leading-[1.2] font-medium tracking-tight text-balance motion-safe:animate-rise motion-safe:[animation-delay:60ms] md:text-[1.875rem]">
          Hi, I&apos;m{' '}
          <span className="whitespace-nowrap">
            <span className="mx-[0.05em] inline-block size-[1.15em] align-[-0.2em] overflow-hidden rounded-full border border-line-strong bg-surface">
              <img
                src="/images/iyansr.png"
                alt=""
                width={48}
                height={48}
                className="size-full origin-[center_30%] scale-135 object-cover object-[center_20%]"
              />
            </span>{' '}
            Iyan Saputra
          </span>{' '}
          <span className="text-[13px] font-normal tracking-normal whitespace-nowrap text-muted md:text-[14px]">
            (I Putu Saputrayana)
          </span>
          <span className="block text-muted">Senior Software Engineer</span>
        </h1>

        <p className="mt-3 max-w-lg text-[14px] text-muted motion-safe:animate-enter motion-safe:[animation-delay:120ms]">
          Shipping React and TypeScript products end to end, remotely from
          Indonesia.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 motion-safe:animate-enter motion-safe:[animation-delay:180ms]">
          <a href={HIRE_URL} className={btn}>
            Hire me
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center gap-[0.4rem] rounded-lg border border-line-strong bg-bg/72 px-3 text-[13px] font-medium text-fg shadow-[0_6px_24px_-12px_rgb(0_0_0/0.35)] backdrop-blur-md [transition:border-color_0.2s,background-color_0.2s,scale_160ms_var(--ease-out)] hover:border-fg hover:bg-accent-soft motion-safe:active:scale-97"
          >
            <IconBrandGithub size={15} stroke={1.75} aria-hidden />
            GitHub
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className={`${link} ml-2 text-[13px]`}
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
