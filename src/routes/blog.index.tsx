import { createFileRoute, useLoaderData } from '@tanstack/react-router';

import { BlurFade } from '@/components/magicui/blur-fade';
import { PostCard } from '@/components/post-card';
import { getAllPosts } from '@/lib/post';

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Check out my latest blog posts',
      },
      {
        title: 'Blog | Iyan Saputra',
      },
    ],
  }),
  loader: async () => {
    const posts = await getAllPosts();
    return { posts };
  },
});

const BLUR_FADE_DELAY = 0.04;

function RouteComponent() {
  const { posts } = useLoaderData({ from: '/blog/' });

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY} className="mb-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Blog Posts
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Check out my latest blog posts
            </h2>
            <p className="text-muted-foreground text-sm md:text-base/relaxed">
              I&apos;ve written a variety of blog posts, from technical
              tutorials to personal stories.
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.metadata.title}
              href={`/blog/${post.slug}`}
              description={post.metadata.summary}
              dates={post.metadata.publishedAt}
              image={post.metadata.image}
            />
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
