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
      className="border-t border-(--mn-hair) py-10 md:py-12"
    >
      <h2 id="worked-with-label" className="mn-label mb-6">
        Worked with
      </h2>
      <div className="mn-marquee">
        <div className="mn-marquee-track">
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              className="mn-marquee-group"
              aria-hidden={duplicate || undefined}
            >
              {companies.map((job) => (
                <li key={job.company}>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mn-company"
                    tabIndex={duplicate ? -1 : undefined}
                  >
                    <img
                      src={job.logo}
                      alt=""
                      width={22}
                      height={22}
                      loading="lazy"
                    />
                    {job.company}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <h2 id="clients-from-label" className="mn-label mt-10 mb-5 text-center">
        Worked with clients from
      </h2>
      <ul
        aria-labelledby="clients-from-label"
        className="flex flex-wrap justify-center gap-x-8 gap-y-3"
      >
        {CLIENT_LOCATIONS.map(({ flag, name }) => (
          <li
            key={name}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-(--mn-muted)"
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
