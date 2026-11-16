import { useQuery } from '@tanstack/react-query';

import { contributionsQueryOptions } from '@/hooks/opensource-contrib';

import { btn, link } from './classes';
import { PrRow } from './pr-row';
import { formatDay, GITHUB_URL } from './utils';

const skel = 'bg-line motion-safe:animate-skel';

interface PrListProps {
  /** Show at most this many pull requests. */
  limit?: number;
  /** Drop pull requests that were closed without merging. */
  hideClosed?: boolean;
}

/**
 * Pull requests from the GitHub search API. The route loader fetches them at
 * prerender time so the HTML ships with data; the browser refetches once stale.
 */
export function PrList({ limit, hideClosed = false }: PrListProps) {
  const { data, isPending, isError, refetch, isRefetching } = useQuery(
    contributionsQueryOptions
  );

  if (isPending) {
    return (
      <ul
        aria-busy="true"
        aria-label="Loading pull requests"
        className="flex flex-col gap-6"
      >
        {Array.from({ length: Math.min(limit ?? 6, 6) }, (_, i) => (
          <li key={i} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-3">
            <span className={`${skel} mt-0.5 size-4 rounded-full`} />
            <span className="flex flex-col gap-2">
              <span className={`${skel} h-3 w-40 rounded`} />
              <span className={`${skel} h-3.5 w-full max-w-md rounded`} />
              <span className={`${skel} h-3 w-24 rounded`} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (isError) {
    return (
      <div className="text-[13.5px] text-muted">
        <p>
          Couldn&apos;t load pull requests from GitHub. The API may be rate
          limited.
        </p>
        <div className="mt-4 flex items-center gap-5">
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isRefetching}
            className={btn}
          >
            {isRefetching ? 'Retrying' : 'Try again'}
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className={`${link} text-[13px]`}
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  }

  const prs = (
    hideClosed ? data.filter((pr) => pr.status !== 'closed') : data
  ).slice(0, limit);

  if (prs.length === 0) {
    return <p className="text-[13.5px] text-muted">No pull requests found.</p>;
  }

  return (
    <ul className="flex flex-col gap-6">
      {prs.map((pr) => (
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
