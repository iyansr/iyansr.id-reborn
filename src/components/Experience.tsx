import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ExperienceProps {
  dates: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export function Experience({ company, companyUrl, dates, description, technologies, title, logo }: ExperienceProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:backdrop-blur-sm duration-500">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2"
        aria-label={dates}
      >
        <span>{dates}</span>
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-neutral-200">
          <div>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-neutral-300 focus-visible:text-neutral-300 group/link text-base"
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={title}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <div className="flex gap-x-2 items-center">
                {logo && (
                  <picture className="w-8 h-8 rounded bg-neutral-400/10 relative overflow-hidden">
                    <Image src={logo} alt={`${company} logo`} fill className="object-cover" />
                  </picture>
                )}
                <span>
                  {title} ·
                  <span className="inline-block">
                    {company}
                    {/* <IconArrow /> */}
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        {technologies.length && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((technology) => (
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
