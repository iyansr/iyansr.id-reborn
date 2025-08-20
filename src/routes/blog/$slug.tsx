import {
  createFileRoute,
  Link,
  notFound,
  useLoaderData,
} from '@tanstack/react-router';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import '@fontsource-variable/jetbrains-mono/index.css';

import { ChevronLeft } from 'lucide-react';

import { BlurFade } from '@/components/magicui/blur-fade';
import { Button } from '@/components/ui/button';
import { getPostBySlug } from '@/lib/post';
import { vesperTheme } from '@/lib/prism';
import { formatDate } from '@/lib/utils';

export const Route = createFileRoute('/blog/$slug')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const post = await getPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const image = loaderData?.post?.metadata.image;
    return {
      meta: [
        {
          name: 'description',
          content: loaderData?.post?.metadata.summary,
        },
        {
          title: loaderData?.post?.metadata.summary,
        },
        {
          property: 'og:title',
          content: loaderData?.post?.metadata.title,
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:url',
          content: `https://iyansr.id/blog/${loaderData?.post?.slug}`,
        },
        {
          property: 'og:description',
          content: loaderData?.post?.metadata.summary,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:title',
          content: loaderData?.post?.metadata.title,
        },
        {
          name: 'twitter:description',
          content: loaderData?.post?.metadata.summary,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    };
  },
});

const DELAY = 0.04;

function RouteComponent() {
  const { post } = useLoaderData({ from: '/blog/$slug' });
  return (
    <div>
      <BlurFade delay={DELAY}>
        <Link to="/blog" className="mb-4 block">
          <Button
            variant="link"
            className="text-muted-foreground hover:underline"
          >
            <ChevronLeft /> Back
          </Button>
        </Link>
      </BlurFade>
      <BlurFade delay={DELAY * 2}>
        <div className="mb-6 space-y-4">
          <img
            src={post?.metadata.image}
            alt={post?.metadata.title}
            className="w-full rounded-lg"
          />

          <h1 className="text-3xl font-bold mt-6">{post?.metadata.title}</h1>
          <time className="text-sm text-muted-foreground">
            {formatDate(post?.metadata.publishedAt ?? '')}
          </time>
        </div>
      </BlurFade>
      <BlurFade delay={DELAY * 3}>
        <article className="prose text-pretty dark:prose-invert">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    // {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={vesperTheme as any}
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
            {post?.content ?? ''}
          </Markdown>
        </article>
      </BlurFade>
    </div>
  );
}
