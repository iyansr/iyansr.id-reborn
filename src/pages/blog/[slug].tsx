import type { GetStaticProps } from 'next';

import BlogDetailPage from '@modules/blog/pages/BlogDetailPage';
import getPosts from '@modules/shared/api/getPosts';
import { BlogExtended } from '@modules/shared/type';

export async function getStaticPaths() {
  const blogPosts = await getPosts();
  return {
    paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPosts = await getPosts();
  const blogPost = blogPosts.find((p: BlogExtended) => p.slug === (params?.slug as string));

  if (!blogPost) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogPost,
    },
  };
};

export default BlogDetailPage;
