import { createFileRoute } from '@tanstack/react-router';

import { getParsedPost } from '../../lib/posts';

export const Route = createFileRoute('/blog/$slug')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const post = await getParsedPost(params.slug);
    return post;
  },
});

function RouteComponent() {
  const { html } = Route.useLoaderData();
  return (
    <main className="max-w-3xl mx-auto prose">
      <div dangerouslySetInnerHTML={{ __html: html }} className="" />
    </main>
  );
}
