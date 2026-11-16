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
import { useEffect, useRef, useState } from 'react';

import { currentTheme } from '@/components/site/theme';
import { formatDay } from '@/components/site/utils';
import { ogMeta } from '@/lib/og';
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
  head: ({ loaderData, params }) => {
    const metadata = loaderData?.post?.metadata;
    return {
      meta: [
        {
          name: 'description',
          content: metadata?.summary,
        },
        {
          title: `${metadata?.title} | Iyan Saputra`,
        },
        ...(metadata
          ? [
              { property: 'og:type', content: 'article' },
              ...ogMeta({
                path: `/blog/${params.slug}`,
                eyebrow: `Blog · ${formatDay(metadata.publishedAt, 'long')}`,
                title: metadata.title,
                description: metadata.summary,
              }),
            ]
          : []),
      ],
    };
  },
});

function RouteComponent() {
  const { post } = useLoaderData({ from: '/blog/$slug' });

  return (
    <main className="pt-16 pb-16 md:pt-20">
      <Link to="/blog" className="mn-link inline-flex items-center gap-1.5 text-[13px]">
        <IconArrowLeft size={14} aria-hidden />
        All posts
      </Link>

      <header className="mt-10">
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
          <p className="mt-3 text-[17px] leading-relaxed text-(--mn-muted)">
            {post.metadata.summary}
          </p>
        )}
      </header>

      {post.metadata.image && (
        <div className="mn-card-media mt-10">
          <img src={post.metadata.image} alt="" width={1200} height={750} />
        </div>
      )}

      <article className="prose mn-prose mt-12 max-w-none text-pretty">
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
            img({ src, alt, title }) {
              // Interactive figures are standalone pages under /figures/.
              if (src?.startsWith('/figures/')) {
                return <PostFigure src={src} title={alt ?? ''} />;
              }
              return (
                <img src={src} alt={alt ?? ''} title={title} loading="lazy" />
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

// The figure page posts its own height so the frame fits the card exactly,
// and follows the site theme, which it cannot read from inside the sandbox.
function PostFigure({ src, title }: { src: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(520);

  useEffect(() => {
    const sendTheme = () =>
      frame.current?.contentWindow?.postMessage({ type: 'figure-theme', theme: currentTheme() }, '*');
    const onMessage = (event: MessageEvent) => {
      if (event.source !== frame.current?.contentWindow) return;
      const data = event.data as { type?: string; height?: number };
      if (data?.type === 'figure-height' && typeof data.height === 'number') {
        setHeight(Math.ceil(data.height));
      }
    };
    window.addEventListener('message', onMessage);
    const themeObserver = new MutationObserver(sendTheme);
    themeObserver.observe(document.documentElement, { attributeFilter: ['data-theme'] });
    // The frame may have loaded before these listeners existed; ask again.
    frame.current?.contentWindow?.postMessage({ type: 'figure-ping' }, '*');
    sendTheme();
    return () => {
      window.removeEventListener('message', onMessage);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <span className="mn-figure-frame">
      <iframe
        sandbox="allow-scripts"
        ref={frame}
        src={src}
        title={title}
        loading="lazy"
        onLoad={(event) => {
          const target = event.currentTarget.contentWindow;
          target?.postMessage({ type: 'figure-ping' }, '*');
          target?.postMessage({ type: 'figure-theme', theme: currentTheme() }, '*');
        }}
        style={{ height }}
      />
    </span>
  );
}
