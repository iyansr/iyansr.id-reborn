import { createFileRoute } from '@tanstack/react-router';

import { ContributionCard } from '@/components/contribution-card';
import { BlurFade } from '@/components/magicui/blur-fade';
import { useOpenSourceContributions } from '@/hooks/opensource-contrib';

export const Route = createFileRoute('/open-source')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Check out my open source contribution on GitHub.',
      },
      {
        title: 'Open Source',
      },
    ],
  }),
});

const BLUR_FADE_DELAY = 0.04;

function RouteComponent() {
  const { data: contributions } = useOpenSourceContributions();

  return (
    <section className="mt-4">
      <BlurFade delay={BLUR_FADE_DELAY} className="mb-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Open Source
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              My Open Source Contribution
            </h2>
            <p className="text-muted-foreground text-sm md:text-base/relaxed">
              Check out my open source contribution on GitHub. This includes
              pull requests, issues, and other contributions.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="grid grid-cols-1 gap-4">
          {contributions?.map((c) => (
            <ContributionCard
              key={c.id}
              contribution={{
                created_at: c.created_at,
                number: c.number,
                title: c.title,
                state: c.state,
                html_url: c.html_url,
                labels: c.labels,
                id: c.id,
                repository: c.repository,
                repositoryUrl: c.repositoryUrl,
                type: c.type as 'pr' | 'issue',
                updated_at: c.updated_at,
                user: {
                  avatar_url: c.user?.avatar_url ?? '',
                  html_url: c.user?.html_url ?? '',
                  login: c.user?.login ?? '',
                },
              }}
            />
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
