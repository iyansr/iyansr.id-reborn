import type { Experience } from '@/types/experience';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ExperienceCardProps = Experience;

export function ExperienceCard({
  company,
  companyUrl,
  dates,
  description,
  location,
  logo,
  technologies,
  title,
}: ExperienceCardProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:backdrop-blur-sm duration-500">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        aria-label={dates}
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2"
      >
        <span>{dates}</span>
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-neutral-200">
          <div>
            <Link
              aria-label={title}
              className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-neutral-300 focus-visible:text-neutral-300 group/link text-base"
              href={companyUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <div className="flex gap-x-2 items-center">
                {logo && (
                  <Image
                    alt={`${company} logo`}
                    className="w-8 h-8 rounded bg-neutral-400/10 "
                    height={32}
                    src={logo}
                    width={32}
                  />
                )}
                <span className="text-sm">
                  {title}
                  {' '}
                  ·
                  <span className="inline-block">{company}</span>
                </span>
                <ArrowUpRight size={14} />
              </div>
            </Link>
            <p className="text-neutral-300 text-sm">{location}</p>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        {technologies.length && (
          <ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
            {technologies.map(technology => (
              <li className="mr-1.5 mt-2" key={technology}>
                <div className="flex items-center backdrop-blur-sm rounded-full border border-neutral-700 border-opacity-50 shadow bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300">
                  {technology}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
