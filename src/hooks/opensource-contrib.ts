import { useQuery } from '@tanstack/react-query';

import type { GithubSearchSchema, IssueSearchResultItem } from '@/types/github';

const query = 'author:iyansr -org:Xellar-Protocol';

const fetchPR = async () => {
  const searchParams = new URLSearchParams({
    sort: 'created',
    order: 'desc',
    per_page: '25',
    q: `${query} type:pr -org:Xellar-Protocol -repo:iyansr/iyansr.id-reborn`,
  });
  const response = await fetch(
    `https://api.github.com/search/issues?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub issues');
  }

  const data: GithubSearchSchema = await response.json();
  const issues: IssueSearchResultItem[] = data.items || [];
  return issues;
};

const fetchIssues = async () => {
  const searchParams = new URLSearchParams({
    sort: 'created',
    order: 'desc',
    per_page: '25',
    q: `${query} type:issue -org:Xellar-Protocol -repo:iyansr/iyansr.id-reborn`,
  });
  const response = await fetch(
    `https://api.github.com/search/issues?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub issues');
  }

  const data: GithubSearchSchema = await response.json();
  const issues: IssueSearchResultItem[] = data.items || [];
  return issues;
};

export const fetchOpenSourceContributions = async () => {
  const [prs, issues] = await Promise.all([fetchPR(), fetchIssues()]);

  const contributions = [...prs, ...issues].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  // Transform contributions to common format
  const openSourceContribution = contributions.map((issue) => ({
    id: issue.id,
    number: issue.number,
    title: issue.title,
    state: issue.state,
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    html_url: issue.html_url,
    type: issue.pull_request?.url ? 'pr' : 'issue',
    repository: issue.repository_url.split('/').slice(-2).join('/'),
    repositoryUrl: issue.repository_url,
    user: issue.user,
    labels: issue.labels,
  }));

  return openSourceContribution;
};

export const useOpenSourceContributions = () => {
  return useQuery({
    queryKey: ['opensource-contributions'],
    queryFn: () => fetchOpenSourceContributions(),
    staleTime: 1000 * 60 * 15, // 15 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
};
