import { BlogPost } from '@components/Layout/containers/BlogPost';
import { allBlogs, type Blog } from 'contentlayer/generated';
import { GetStaticProps } from 'next';

type BlogPageProps = {
  isError?: boolean;
  blogPost: Blog;
};

const BlogPostPage = ({ blogPost }: BlogPageProps) => {
  return <BlogPost blogPost={blogPost} />;
};

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPost = allBlogs.find((p: Blog) => p.slug === (params?.slug as string));

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

export default BlogPostPage;
