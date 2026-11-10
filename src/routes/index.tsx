import { createFileRoute } from '@tanstack/react-router';

import { HomePage } from '@/components/home/home-page';
import { contributionsQueryOptions } from '@/hooks/opensource-contrib';

export const Route = createFileRoute('/')({
  // Prefetch so prerendered HTML includes PRs. A GitHub failure must not fail
  // the build; the component then fetches in the browser instead.
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(contributionsQueryOptions).catch(() => undefined),
  component: HomePage,
});
