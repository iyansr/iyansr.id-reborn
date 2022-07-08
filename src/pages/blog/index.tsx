import Meta from '@components/Meta';
import { PostCard } from '@components/PostCard';
import { Section } from '@components/Section';
import { allBlogs, type Blog } from 'contentlayer/generated';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogPosts }) => {
  return (
    <>
      <Meta
        title="Blog"
        description="'If I tell you what happen, it won't happen.'"
        keywords="iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog"
      />
      <Section background="yellow" className="py-24">
        <div className="py-12 text-center">
          <h2 className="title-front text-5xl font-black md:text-6xl lg:text-7xl">MY ARTICLES</h2>
          <p className="mt-4 text-sm font-medium text-gray-800 md:text-base lg:text-lg">
            If I tell you what happen, it won't happen.
          </p>
        </div>

        <div className="pb-12 pt-6 md:pb-24 md:pt-12">
          <div className="grid  gap-12 px-8 md:grid-cols-2 md:px-4 lg:grid-cols-3">
            {blogPosts.map((post: Blog) => (
              <PostCard post={post} key={post?._id} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blog[] = allBlogs;

  return {
    props: {
      blogPosts: blogs,
    },
  };
};

export default BlogPage;
