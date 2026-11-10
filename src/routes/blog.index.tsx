import { createFileRoute, Link, useLoaderData } from '@tanstack/react-router';

import { PageHeader } from '@/components/site/page-header';
import { formatDay } from '@/components/site/utils';
import { ogMeta } from '@/lib/og';
import { getAllPosts } from '@/lib/post';

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Technical tutorials and personal notes by Iyan Saputra.',
      },
      {
        title: 'Blog | Iyan Saputra',
      },
      ...ogMeta({
        path: '/blog',
        eyebrow: 'Blog',
        title: 'Writing',
        description: 'Technical tutorials and personal notes by Iyan Saputra.',
      }),
    ],
  }),
  loader: async () => {
    const posts = await getAllPosts();
    return { posts };
  },
});

function RouteComponent() {
  const { posts } = useLoaderData({ from: '/blog/' });

  return (
    <main>
      <PageHeader label="Blog" title="Writing">
        Technical tutorials and personal notes.
      </PageHeader>

      {posts.length === 0 ? (
        <p className="border-t border-(--mn-hair) py-14 text-[14px] text-(--mn-muted)">
          No posts yet.
        </p>
      ) : (
        <ul className="border-t border-(--mn-hair)">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-(--mn-hair) last:border-b-0">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mn-card group grid grid-cols-1 gap-4 py-8 md:grid-cols-[11rem_minmax(0,1fr)_10rem] md:gap-10"
              >
                <time
                  dateTime={post.metadata.publishedAt}
                  className="mn-mono text-[11px] tracking-wide text-(--mn-muted) uppercase md:pt-1"
                >
                  {formatDay(post.metadata.publishedAt)}
                </time>
                <div className="min-w-0">
                  <h2 className="mn-card-title text-[15px] leading-snug font-medium">
                    {post.metadata.title}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed text-(--mn-muted)">
                    {post.metadata.summary}
                  </p>
                </div>
                {post.metadata.image && (
                  <div className="mn-card-media order-first md:order-none">
                    <img
                      src={post.metadata.image}
                      alt=""
                      width={320}
                      height={200}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
