import { createFileRoute } from '@tanstack/react-router';

import { PageHeader } from '@/components/site/page-header';
import { PrList } from '@/components/site/pr-list';
import { Row } from '@/components/site/row';
import { contributionsQueryOptions } from '@/hooks/opensource-contrib';
import { ogMeta } from '@/lib/og';

export const Route = createFileRoute('/open-source')({
  component: RouteComponent,
  // Prefetch so prerendered HTML includes PRs. A GitHub failure must not fail
  // the build; the component then fetches in the browser instead.
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(contributionsQueryOptions).catch(() => undefined),
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Pull requests Iyan Saputra has sent to open source projects on GitHub.',
      },
      {
        title: 'Open Source | Iyan Saputra',
      },
      ...ogMeta({
        path: '/open-source',
        eyebrow: 'Open source',
        title: 'Contributions',
        description: 'Pull requests Iyan Saputra has sent to open source projects on GitHub.',
      }),
    ],
  }),
});

function RouteComponent() {
  return (
    <main>
      <PageHeader label="Open source" title="Contributions">
        Pull requests I&apos;ve sent to other projects on GitHub.
      </PageHeader>

      <Row label="Pull requests" reveal={false}>
        <PrList />
      </Row>
    </main>
  );
}
