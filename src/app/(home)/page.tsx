import { EXPERIENCE } from '@/data/experience';
import Image from 'next/image';
import Link from 'next/link';

import { ExperienceCard } from './experience-card';
import { WordAnimation } from './word-animation';

export default function Home() {
  return (
    <>
      <div className="relative hero z-10">
        <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div className="flex lg:items-start gap-4 flex-col lg:flex-row items-center text-center lg:text-left">
                <Image alt="Iyan" className="w-16 h-16" height={64} src="/images/iyansr.png" width={64} />
                <div>
                  <Link
                    className="text-4xl lg:text-5xl block font-bold tracking-tight bg-clip-text text-transparent pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                    href="/"
                  >
                    <h1>I Putu Saputrayana</h1>
                  </Link>
                  <span className="text-sm text-neutral-500">a.k.a Iyan Saputra</span>

                  <div className="mt-2 flex text-center justify-center lg:justify-start lg:text-left items-center gap-3 text-sm lg:text-lg font-medium text-neutral-300">
                    <h2>Experienced</h2>
                    <WordAnimation />
                    <h2>Engineer</h2>
                  </div>

                  <a
                    className="inline-flex transition-all border-neutral-700 hover:border-opacity-0 border-opacity-50 shadow rounded-md border backdrop-blur-xl bg-neutral-400/10 px-3 py-2.5 items-center text-white font-semibold group p-2 text-sm gap-x-2 mt-4"
                    data-ccursor
                    href="mailto:hello@iyansr.id"
                  >
                    <span>Work with me</span>
                    <span className="w-2 h-2 rounded-full bg-lime-400 duration-1000 animate-pulse"></span>
                  </a>
                </div>
              </div>

              {/* {SOCIALS.length && (
                <ul
                  className="mt-8 flex items-center justify-center lg:justify-normal gap-x-5"
                  aria-label="Social media"
                >
                  {SOCIALS.map((social) => (
                    <li className="text-xs p-2 rounded" data-ccursor>
                      <a
                        className="block hover:text-slate-200"
                        href={social.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${social.name} (opens in a new tab)`}
                      >
                        <span className="sr-only">{social.name}</span>
                        {<Component component={social.icon} />}
                      </a>
                    </li>
                  ))}
                </ul>
              )} */}
            </header>

            <main className="pt-24 lg:w-1/2 lg:py-24" id="content">
              <section
                aria-label="About me"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                id="about"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-3 backdrop-blur-lg md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-200 lg:sr-only">About</h2>
                </div>
                <div>
                  <div className="mb-4 space-y-4">
                    <p>
                      In my current role as a Software Engineer. I implement pixel-perfect designs
                      for web and mobile applications. Using React, React Native, and TypeScript, I create responsive
                      and visually appealing user interfaces. I leverage NextJS for efficient rendering, TailwindCSS for precise styling. My work ensures seamless user experiences across
                      platforms while collaborating closely with the design team to bring their visions to life.
                    </p>

                    <p>Looking forward to new challenges and exciting collaborations!</p>
                  </div>
                </div>
              </section>
              <section
                aria-label="Work experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                id="experience"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-3 backdrop-blur-lg md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-200 lg:sr-only">
                    Experience
                  </h2>
                </div>
                <div>
                  <ol className="group/list space-y-12">
                    {EXPERIENCE.map((experience, index) => (
                      <ExperienceCard key={String(`experience-${index}`)} {...experience} />
                    ))}
                  </ol>

                  <div className="mt-12">
                    <Link
                      aria-label="View Full Résumé"
                      className="inline-flex items-center leading-tight text-neutral-200 font-semibold group p-2 rounded px-3"
                      data-ccursor
                      href="https://www.linkedin.com/in/iyansr/"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-neutral-300 motion-reduce:transition-none">
                          View Full
                          {' '}
                        </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-neutral-300 motion-reduce:transition-none">
                            Résumé
                          </span>
                          <svg
                            aria-hidden="true"
                            className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                              fillRule="evenodd"
                            >
                            </path>
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <footer className="text-center py-4 text-xs">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        All rights reserved.
      </footer>
    </>
  );
}
