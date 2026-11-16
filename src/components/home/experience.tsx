import { IconChevronDown } from '@tabler/icons-react';

import { reveal } from '@/components/site/classes';
import { Row } from '@/components/site/row';
import {
  clean,
  highlightFigures,
  previewOf,
  TECH_ICON,
} from '@/components/site/utils';
import { EXPERIENCE } from '@/data/experience';

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
              className={`group/role relative pb-10 pl-6 last:pb-0 not-last:before:absolute not-last:before:top-3 not-last:before:-bottom-1 not-last:before:left-1 not-last:before:w-px not-last:before:bg-line-strong after:absolute after:top-[0.3rem] after:left-0 after:size-[9px] after:rounded-full after:border after:border-line-strong after:bg-bg data-[current=true]:after:border-accent ${reveal}`}
              data-current={/\bnow\b/i.test(job.dates)}
            >
              <p className="font-mono text-[11.5px] leading-5 text-muted">
                {clean(job.dates)}
                <span aria-hidden> · </span>
                <span className="sr-only">, </span>
                {clean(job.location)}
              </p>

              <h3 className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] leading-snug font-medium">
                <span>{job.title}</span>
                <span className="font-normal text-muted">at</span>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-text"
                >
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt=""
                      width={16}
                      height={16}
                      loading="lazy"
                      decoding="async"
                      className="size-4 shrink-0 rounded-[4px] border border-line object-cover"
                    />
                  )}
                  {job.company}
                </a>
              </h3>

              <p className="mt-3 max-w-prose text-[13.5px] leading-relaxed text-fg-soft group-has-[details[open]]/role:hidden">
                {highlightFigures(preview)}
              </p>

              {hasMore && (
                <details className="group/details details-content:overflow-clip details-content:opacity-0 details-content:[block-size:0] open:details-content:opacity-100 open:details-content:[block-size:auto] motion-safe:details-content:[transition:block-size_250ms_var(--ease-out),opacity_200ms_var(--ease-out),content-visibility_250ms_allow-discrete] motion-reduce:details-content:[transition:opacity_200ms_var(--ease-out),content-visibility_200ms_allow-discrete]">
                  <summary className="mt-1.5 inline-flex list-none items-center gap-1 text-[12.5px] font-medium text-accent-text [&::-webkit-details-marker]:hidden">
                    <span className="group-open/details:hidden">Read more</span>
                    <span className="hidden group-open/details:inline">
                      Show less
                    </span>
                    <IconChevronDown
                      size={14}
                      aria-hidden
                      className="[transition:rotate_0.25s] group-open/details:rotate-180"
                    />
                  </summary>
                  <p className="mt-2 max-w-prose text-[13.5px] leading-relaxed text-fg-soft">
                    {highlightFigures(job.description)}
                  </p>
                </details>
              )}

              <ul
                className="mt-4 flex flex-wrap gap-x-4 gap-y-2"
                aria-label="Technologies"
              >
                {job.technologies.map((tech) => {
                  const Icon = TECH_ICON[tech.toLowerCase()];
                  return (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-muted"
                    >
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
