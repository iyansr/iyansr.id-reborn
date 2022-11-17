import BlogPage from '@modules/blog/pages/BlogPage';
import getPosts from '@modules/shared/api/getPosts';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

export default BlogPage;
