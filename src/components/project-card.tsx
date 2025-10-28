import { Link } from '@tanstack/react-router';
import Markdown from 'react-markdown';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  href?: string;
  openSource?: boolean;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  openSource = false,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        'flex flex-col overflow-hidden bg-background/30 backdrop-blur-xl border border-muted/75 gap-2 p-1 hover:shadow-lg transition-all duration-300 ease-out h-full rounded-lg'
      }
    >
      <Link
        to={(href || '#') as string}
        className={cn('block cursor-pointer', className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top rounded-t-lg"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <div className="flex">
            <div className="flex-1">
              <CardTitle className="text-base">{title}</CardTitle>
            </div>
            <div>
              {openSource && (
                <Badge className="px-1 py-0 text-[10px]" variant="lime">
                  Open Source
                </Badge>
              )}
            </div>
          </div>

          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <a href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
