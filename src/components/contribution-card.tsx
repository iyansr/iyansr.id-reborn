import { CircleDot, GitPullRequest, MessageSquare } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContributionData {
  id: number;
  number: number;
  title: string;
  state: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  type: 'pr' | 'issue';
  repository: string;
  repositoryUrl: string;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  labels: {
    id?: number;
    name?: string;
    color?: string;
    description?: string | null;
  }[];
  body?: string;
  comments?: number;
}

interface Props {
  contribution: ContributionData;
  className?: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'today';
  } else if (diffInDays === 1) {
    return 'yesterday';
  } else if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
}

function truncateDescription(
  text: string | undefined,
  maxLines: number = 2
): string {
  if (!text) return '';

  // Remove markdown formatting and clean up text
  const cleanText = text
    .replace(/[#*`_~[\]()]/g, '') // Remove markdown characters
    .replace(/\r\n|\r|\n/g, ' ') // Replace line breaks with spaces
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();

  // Approximate character limit for 2 lines (adjust based on your design)
  const charLimit = maxLines * 80;

  if (cleanText.length <= charLimit) {
    return cleanText;
  }

  return `${cleanText.substring(0, charLimit).trim()}...`;
}

export function ContributionCard({ contribution, className }: Props) {
  const {
    title,
    type,
    repository,
    html_url,
    user,
    labels,
    created_at,
    number,
    state,
    body,
    comments,
    repositoryUrl,
  } = contribution;

  const isPR = type === 'pr';
  const Icon = isPR ? GitPullRequest : CircleDot;

  return (
    <Card
      className={cn(
        'hover:shadow-lg transition-all duration-300 ease-out h-full gap-0 p-2 bg-background/30 backdrop-blur-xl border border-muted/75',
        className
      )}
    >
      <CardHeader className="p-2">
        <div className="flex items-center justify-between">
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
            <CardTitle className="text-sm font-medium text-muted-foreground hover:underline">
              {repository}
            </CardTitle>
          </a>
          <Badge
            variant={state === 'open' ? 'lime' : 'secondary'}
            className="text-xs"
          >
            {state}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4 p-2">
        {/* Title with icon */}
        <div className="flex items-start gap-2">
          <Icon
            className={cn(
              'w-4 h-4 mt-0.5 flex-shrink-0',
              isPR ? 'text-violet-500' : 'text-green-500'
            )}
          />
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm leading-tight hover:underline line-clamp-2"
          >
            {title}
          </a>
        </div>

        {/* Description */}
        {body && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {truncateDescription(body)}
          </p>
        )}

        {/* Labels */}
        {labels && labels.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {labels.slice(0, 3).map((label) => (
              <Badge
                key={label.id || label.name}
                variant="outline"
                className="text-xs"
                style={{
                  borderColor: label.color ? `#${label.color}` : undefined,
                  color: label.color ? `#${label.color}` : undefined,
                }}
              >
                {label.name}
              </Badge>
            ))}
            {labels.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{labels.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{user.login}</span>
          {comments !== undefined && comments > 0 && (
            <>
              <span>·</span>
              <div className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                <span>{comments}</span>
              </div>
            </>
          )}
          <span>·</span>
          <span>opened {formatDate(created_at)}</span>
          <span>·</span>
          <span>#{number}</span>
        </div>
      </CardContent>
    </Card>
  );
}
