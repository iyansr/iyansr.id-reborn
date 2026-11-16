import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PageHeader } from './page-header';

interface MarkdownPageProps {
  label: string;
  title: string;
  lead?: string;
  content: string;
}

/** Standalone content page (Now, About): page header over blog-style prose. */
export function MarkdownPage({
  label,
  title,
  lead,
  content,
}: MarkdownPageProps) {
  return (
    <main className="pb-16">
      <PageHeader label={label} title={title}>
        {lead}
      </PageHeader>
      <article className="prose prose-site max-w-none border-t border-hair pt-12 text-pretty">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </article>
    </main>
  );
}
