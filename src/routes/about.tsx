import { createFileRoute } from '@tanstack/react-router';

import { MarkdownPage } from '@/components/site/markdown-page';
import source from '@/content/pages/about.mdx?raw';
import { ogMeta } from '@/lib/og';
import { parseFrontmatter } from '@/lib/post';

const { metadata, content } = parseFrontmatter(source);
const title = metadata.title ?? 'About';
const summary = metadata.summary ?? '';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { name: 'description', content: summary },
      { title: 'About | Iyan Saputra' },
      ...ogMeta({ path: '/about', eyebrow: 'About', title, description: summary }),
    ],
  }),
});

function RouteComponent() {
  return <MarkdownPage label="About" title={title} content={content} />;
}
