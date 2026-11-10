import { createFileRoute } from '@tanstack/react-router';

import { PageHeader } from '@/components/site/page-header';
import { PrRow } from '@/components/site/pr-row';
import { Row } from '@/components/site/row';
import { formatDay, GITHUB_URL } from '@/components/site/utils';
import { NOTABLE_CONTRIBUTIONS } from '@/data/contributions';
import { useOpenSourceContributions } from '@/hooks/opensource-contrib';

export const Route = createFileRoute('/open-source')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Pull requests Iyan Saputra has sent to open source projects on GitHub.',
      },
      {
        title: 'Open Source | Iyan Saputra',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main>
      <PageHeader label="Open source" title="Contributions">
        Pull requests I&apos;ve sent to other projects on GitHub.
      </PageHeader>

      <Row label="Notable">
        <ul className="flex flex-col gap-6">
          {NOTABLE_CONTRIBUTIONS.map((pr) => (
            <li key={pr.url}>
              <PrRow
                url={pr.url}
                repo={pr.repo}
                number={pr.number}
                title={pr.title}
                status={pr.status}
                detail={pr.summary}
              />
            </li>
          ))}
        </ul>
      </Row>

      <Row label="All pull requests" reveal={false}>
        <AllPullRequests />
      </Row>
    </main>
  );
}

function AllPullRequests() {
  const { data, isPending, isError, refetch } = useOpenSourceContributions();

  if (isPending) {
    return (
      <ul aria-busy="true" aria-label="Loading pull requests" className="flex flex-col gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-3">
            <span className="mn-skel mt-0.5 size-4 rounded-full" />
            <span className="flex flex-col gap-2">
              <span className="mn-skel h-3 w-40" />
              <span className="mn-skel h-3.5 w-full max-w-md" />
              <span className="mn-skel h-3 w-24" />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (isError) {
    return (
      <div className="text-[13.5px] text-(--mn-muted)">
        <p>Couldn&apos;t load pull requests from GitHub. The API may be rate limited.</p>
        <div className="mt-4 flex items-center gap-5">
          <button type="button" onClick={() => refetch()} className="mn-btn">
            Try again
          </button>
          <a href={`${GITHUB_URL}?tab=overview`} target="_blank" rel="noreferrer" className="mn-link text-[13px]">
            View on GitHub
          </a>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return <p className="text-[13.5px] text-(--mn-muted)">No pull requests found.</p>;
  }

  return (
    <ul className="flex flex-col gap-6">
      {data.map((pr) => (
        <li key={pr.id}>
          <PrRow
            url={pr.url}
            repo={pr.repository}
            number={pr.number}
            title={pr.title}
            status={pr.status}
            detail={formatDay(pr.createdAt)}
          />
        </li>
      ))}
    </ul>
  );
}
