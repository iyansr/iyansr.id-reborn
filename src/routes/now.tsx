import { createFileRoute } from '@tanstack/react-router';

import { MarkdownPage } from '@/components/site/markdown-page';
import source from '@/content/pages/now.mdx?raw';
import { ogMeta } from '@/lib/og';
import { parseFrontmatter } from '@/lib/post';

const { metadata, content } = parseFrontmatter(source);
const title = metadata.title ?? 'Now';
const summary = metadata.summary ?? '';

export const Route = createFileRoute('/now')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { name: 'description', content: summary },
      { title: 'Now | Iyan Saputra' },
      ...ogMeta({ path: '/now', eyebrow: 'Now', title, description: summary }),
    ],
  }),
});

function RouteComponent() {
  return (
    <MarkdownPage label="Now" title={title} lead={metadata.currently} content={content} />
  );
}
