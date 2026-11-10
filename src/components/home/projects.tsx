import { PROJECTS } from '@/data/project';

import { clean, firstSentence, GITHUB_URL, LINK_ICON } from '@/components/site/utils';

export function Projects() {
  return (
    <section id="work" className="mn-anchor border-t border-(--mn-hair) py-14 md:py-16">
      <div className="mn-reveal">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="mn-label">Projects</h2>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="mn-link text-[12.5px]"
          >
            GitHub
          </a>
        </div>

        <ul className="mt-7 grid grid-cols-1 gap-x-4 gap-y-9 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const primary =
              project.links.find((link) => link.href === project.href) ?? project.links[0];
            const LinkIcon = LINK_ICON[primary.type];
            const isOg = project.image.includes('opengraph.githubassets.com');
            const isLive = project.active && project.links.some((link) => link.type !== 'Repository');
            return (
              <li key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mn-card group block"
                >
                  <div className="mn-card-media">
                    <img
                      src={project.image}
                      alt=""
                      width={640}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      data-og={isOg}
                    />
                    <div className="absolute top-2 left-2 flex gap-1.5">
                      {isLive && <span className="mn-badge">Live</span>}
                      {project.openSource && <span className="mn-badge">Open source</span>}
                    </div>
                  </div>

                  <div className="mn-mono mt-3 flex items-center justify-between gap-3 text-[11px] tracking-wide text-(--mn-muted) uppercase">
                    <span>{clean(project.dates)}</span>
                    <span className="inline-flex items-center gap-1.5">
                      {LinkIcon && <LinkIcon size={12} aria-hidden />}
                      {primary.type}
                    </span>
                  </div>
                  <h3 className="mn-card-title mt-1.5 text-[14px] leading-snug font-medium">
                    {project.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-(--mn-muted)">
                    {firstSentence(project.description)}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
