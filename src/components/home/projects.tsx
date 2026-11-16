import {
  card,
  cardImage,
  cardMedia,
  cardTitle,
  label,
  link as linkClass,
  reveal,
} from '@/components/site/classes';
import {
  clean,
  firstSentence,
  GITHUB_URL,
  LINK_ICON,
} from '@/components/site/utils';
import { PROJECTS } from '@/data/project';

const badge =
  'inline-flex h-[1.375rem] items-center rounded-[6px] border border-line bg-bg/80 px-2 text-[11px] font-medium text-fg backdrop-blur-[8px]';

export function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-hair py-14 md:py-16"
    >
      <div className={`${reveal} flex items-baseline justify-between gap-4`}>
        <h2 className={label}>Projects</h2>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} text-[12.5px]`}
        >
          GitHub
        </a>
      </div>

      <ul className="mt-7 grid grid-cols-1 gap-x-4 gap-y-9 md:grid-cols-2">
        {PROJECTS.map((project) => {
          const primary =
            project.links.find((link) => link.href === project.href) ??
            project.links[0];
          const LinkIcon = LINK_ICON[primary.type];
          const isOg = project.image.includes('opengraph.githubassets.com');
          const isLive =
            project.active &&
            project.links.some((link) => link.type !== 'Repository');
          return (
            <li
              key={project.title}
              className={`${reveal} motion-safe:supports-[animation-timeline:view()]:md:even:[animation-range:entry_6%_entry_46%]`}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`${card} block`}
              >
                <div className={cardMedia}>
                  <img
                    className={cardImage}
                    src={project.image}
                    alt=""
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    data-og={isOg}
                  />
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    {isLive && <span className={badge}>Live</span>}
                    {project.openSource && (
                      <span className={badge}>Open source</span>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 font-mono text-[11px] tracking-wide text-muted uppercase">
                  <span>{clean(project.dates)}</span>
                  <span className="inline-flex items-center gap-1.5">
                    {LinkIcon && <LinkIcon size={12} aria-hidden />}
                    {primary.type}
                  </span>
                </div>
                <h3
                  className={`${cardTitle} mt-1.5 text-[14px] leading-snug font-medium`}
                >
                  {project.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-muted">
                  {firstSentence(project.description)}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
