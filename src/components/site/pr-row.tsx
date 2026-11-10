import {
  IconGitMerge,
  IconGitPullRequest,
  IconGitPullRequestClosed,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';

import type { PullRequestStatus } from '@/hooks/opensource-contrib';

const STATUS = {
  merged: { Icon: IconGitMerge, label: 'Merged', className: 'text-(--mn-accent-text)' },
  open: { Icon: IconGitPullRequest, label: 'Open', className: 'text-(--mn-open)' },
  closed: { Icon: IconGitPullRequestClosed, label: 'Closed', className: 'text-(--mn-muted)' },
} as const;

interface PrRowProps {
  url: string;
  repo: string;
  number: number;
  title: string;
  status: PullRequestStatus;
  /** Extra muted line under the title (summary or date). */
  detail?: ReactNode;
}

export function PrRow({ url, repo, number, title, status, detail }: PrRowProps) {
  const { Icon, label, className } = STATUS[status];
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mn-pr grid grid-cols-[1rem_minmax(0,1fr)] gap-x-3"
    >
      <Icon size={16} stroke={1.75} aria-hidden className={`mt-0.5 ${className}`} />
      <span className="min-w-0">
        <span className="mn-mono block text-[11.5px] text-(--mn-muted)">
          <span className="sr-only">{label}: </span>
          {repo} #{number}
        </span>
        <span className="mn-pr-title mt-0.5 block text-[13.5px] leading-snug font-medium break-words">
          {title}
        </span>
        {detail && (
          <span className="mt-1 block text-[13px] leading-snug text-(--mn-muted)">
            {detail}
          </span>
        )}
      </span>
    </a>
  );
}
