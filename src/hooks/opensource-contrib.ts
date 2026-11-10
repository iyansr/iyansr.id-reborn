import { queryOptions } from '@tanstack/react-query';

import type { GithubSearchSchema } from '@/types/github';

export type PullRequestStatus = 'merged' | 'open' | 'closed';

export interface PullRequest {
  id: number;
  number: number;
  title: string;
  status: PullRequestStatus;
  createdAt: string;
  url: string;
  repository: string;
}

// PRs to other people's public repositories only: `-user:iyansr` drops every
// repo under my own account, `-org:Xellar-Protocol` drops employer work.
const SEARCH_QUERY = 'author:iyansr type:pr is:public -user:iyansr -org:Xellar-Protocol';

export const fetchOpenSourceContributions = async (): Promise<PullRequest[]> => {
  const searchParams = new URLSearchParams({
    sort: 'created',
    order: 'desc',
    per_page: '100',
    q: SEARCH_QUERY,
  });
  const response = await fetch(
    `https://api.github.com/search/issues?${searchParams.toString()}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        // GitHub rejects server requests without a User-Agent (403). Browsers set
        // their own and treat this header as non-safelisted, so send it only on the server.
        ...(typeof window === 'undefined' && { 'User-Agent': 'iyansr.id' }),
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub pull requests (${response.status})`);
  }

  const data: GithubSearchSchema = await response.json();

  return (data.items ?? []).map((item) => ({
    id: item.id,
    number: item.number,
    title: item.title,
    status: item.pull_request?.merged_at
      ? 'merged'
      : item.state === 'open'
        ? 'open'
        : 'closed',
    createdAt: item.created_at,
    url: item.html_url,
    repository: item.repository_url.split('/').slice(-2).join('/'),
  }));
};

// Shared by route loaders (fetched at prerender, dehydrated into the HTML)
// and components (refetched in the browser once the snapshot is stale).
export const contributionsQueryOptions = queryOptions({
  queryKey: ['opensource-contributions'],
  queryFn: fetchOpenSourceContributions,
  staleTime: 1000 * 60 * 15, // 15 minutes
  gcTime: 1000 * 60 * 60, // 1 hour
});
