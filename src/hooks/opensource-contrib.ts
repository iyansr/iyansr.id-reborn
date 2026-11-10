import { useQuery } from '@tanstack/react-query';

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

const SEARCH_QUERY =
  'author:iyansr -org:Xellar-Protocol type:pr -repo:iyansr/iyansr.id-reborn';

export const fetchOpenSourceContributions = async (): Promise<PullRequest[]> => {
  const searchParams = new URLSearchParams({
    sort: 'created',
    order: 'desc',
    per_page: '100',
    q: SEARCH_QUERY,
  });
  const response = await fetch(
    `https://api.github.com/search/issues?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub pull requests');
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

export const useOpenSourceContributions = () => {
  return useQuery({
    queryKey: ['opensource-contributions'],
    queryFn: fetchOpenSourceContributions,
    staleTime: 1000 * 60 * 15, // 15 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
};
