import { IconChevronDown } from '@tabler/icons-react';

import { EXPERIENCE } from '@/data/experience';

import { Row } from '@/components/site/row';
import { clean, highlightFigures, previewOf, TECH_ICON } from '@/components/site/utils';

export function Experience() {
  return (
    <Row id="experience" label="Experience" stickyLabel reveal={false}>
      <ol>
        {EXPERIENCE.map((job) => {
          const preview = previewOf(job.description);
          const hasMore = job.description.length > preview.length + 2;
          return (
            <li
              key={`${job.company}-${job.dates}`}
              className="mn-role mn-reveal"
              data-current={/\bnow\b/i.test(job.dates)}
            >
              <p className="mn-mono text-[11.5px] leading-5 text-(--mn-muted)">
                {clean(job.dates)}
                <span aria-hidden> · </span>
                <span className="sr-only">, </span>
                {clean(job.location)}
              </p>

              <h3 className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] leading-snug font-medium">
                <span>{job.title}</span>
                <span className="font-normal text-(--mn-muted)">at</span>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-(--mn-accent-text)"
                >
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt=""
                      width={16}
                      height={16}
                      loading="lazy"
                      decoding="async"
                      className="size-4 shrink-0 rounded-[4px] border border-(--mn-line) object-cover"
                    />
                  )}
                  {job.company}
                </a>
              </h3>

              <p className="mn-preview mt-3 max-w-prose text-[13.5px] leading-relaxed text-(--mn-fg-soft)">
                {highlightFigures(preview)}
              </p>

              {hasMore && (
                <details className="mn-details">
                  <summary>
                    <span className="mn-more">Read more</span>
                    <span className="mn-less">Show less</span>
                    <IconChevronDown size={14} aria-hidden />
                  </summary>
                  <p className="mt-2 max-w-prose text-[13.5px] leading-relaxed text-(--mn-fg-soft)">
                    {highlightFigures(job.description)}
                  </p>
                </details>
              )}

              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2" aria-label="Technologies">
                {job.technologies.map((tech) => {
                  const Icon = TECH_ICON[tech.toLowerCase()];
                  return (
                    <li key={tech} className="mn-tech">
                      {Icon && <Icon size={13} stroke={1.5} aria-hidden />}
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </Row>
  );
}
