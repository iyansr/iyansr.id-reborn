import { IconArrowLeft } from '@tabler/icons-react';
import {
  createFileRoute,
  Link,
  notFound,
  useLoaderData,
} from '@tanstack/react-router';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

import { formatDay } from '@/components/site/utils';
import { getPostBySlug } from '@/lib/post';
import { vesperTheme } from '@/lib/prism';

export const Route = createFileRoute('/blog/$slug')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const post = await getPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        name: 'description',
        content: loaderData?.post?.metadata.summary,
      },
      {
        title: `${loaderData?.post?.metadata.title} | Iyan Saputra`,
      },
      {
        name: 'og:title',
        content: loaderData?.post?.metadata.title,
      },
      {
        name: 'og:description',
        content: loaderData?.post?.metadata.summary,
      },
      {
        name: 'og:image',
        content: loaderData?.post?.metadata.image,
      },
      {
        name: 'twitter:title',
        content: loaderData?.post?.metadata.title,
      },
    ],
  }),
});

function RouteComponent() {
  const { post } = useLoaderData({ from: '/blog/$slug' });

  return (
    <main className="pt-16 pb-16 md:pt-20">
      <Link to="/blog" className="mn-link inline-flex items-center gap-1.5 text-[13px]">
        <IconArrowLeft size={14} aria-hidden />
        All posts
      </Link>

      <header className="mt-10 max-w-[65ch]">
        <time
          dateTime={post.metadata.publishedAt}
          className="mn-label block"
        >
          {formatDay(post.metadata.publishedAt, 'long')}
        </time>
        <h1 className="mt-4 text-[1.625rem] leading-[1.2] font-medium tracking-tight text-balance md:text-[2rem]">
          {post.metadata.title}
        </h1>
        {post.metadata.summary && (
          <p className="mt-3 text-[15px] leading-relaxed text-(--mn-muted)">
            {post.metadata.summary}
          </p>
        )}
      </header>

      {post.metadata.image && (
        <div className="mn-card-media mt-10">
          <img src={post.metadata.image} alt="" width={1200} height={750} />
        </div>
      )}

      <article className="prose mn-prose mt-12 max-w-[65ch] text-pretty">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={vesperTheme}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}
