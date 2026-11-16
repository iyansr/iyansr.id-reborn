import { label } from '@/components/site/classes';
import { EXPERIENCE } from '@/data/experience';

const CLIENT_LOCATIONS = [
  { flag: '🇮🇩', name: 'Indonesia' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇭🇰', name: 'Hong Kong' },
  { flag: '🇹🇷', name: 'Turkey' },
] as const;

// Rendered twice so the track can loop seamlessly at -50%.
// The second copy is decorative and hidden from assistive tech and tab order.
export function WorkedWith() {
  const companies = EXPERIENCE.filter((job) => job.logo);

  return (
    <section
      aria-labelledby="worked-with-label"
      className="border-t border-hair py-10 md:py-12"
    >
      <h2 id="worked-with-label" className={`${label} mb-6`}>
        Worked with
      </h2>
      <div className="group/marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] motion-reduce:[mask-image:none]">
        <div className="flex w-max motion-safe:animate-marquee motion-safe:group-focus-within/marquee:[animation-play-state:paused] motion-safe:group-hover/marquee:[animation-play-state:paused] motion-reduce:w-auto">
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              className="flex shrink-0 items-center gap-12 pr-12 motion-reduce:flex-wrap motion-reduce:[gap:1rem_2rem] motion-reduce:pr-0 motion-reduce:aria-hidden:hidden"
              aria-hidden={duplicate || undefined}
            >
              {companies.map((job) => (
                <li key={job.company}>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/company inline-flex items-center gap-2.5 text-[14px] font-medium whitespace-nowrap text-muted [transition:color_0.2s] hover:text-fg"
                    tabIndex={duplicate ? -1 : undefined}
                  >
                    <img
                      src={job.logo}
                      alt=""
                      width={22}
                      height={22}
                      loading="lazy"
                      className="size-[22px] rounded-[6px] object-cover opacity-75 grayscale [transition:filter_0.2s,opacity_0.2s] group-hover/company:opacity-100 group-hover/company:grayscale-0"
                    />
                    {job.company}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <h2 id="clients-from-label" className={`${label} mt-10 mb-5 text-center`}>
        Worked with clients from
      </h2>
      <ul
        aria-labelledby="clients-from-label"
        className="flex flex-wrap justify-center gap-x-8 gap-y-3"
      >
        {CLIENT_LOCATIONS.map(({ flag, name }) => (
          <li
            key={name}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-muted"
          >
            <span aria-hidden className="text-[18px] leading-none">
              {flag}
            </span>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
