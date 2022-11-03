import { getUnixTime } from 'date-fns';
import type { GetStaticProps } from 'next';

import HomePage from '@modules/home/pages/HomePage';
import { allBlogs, type Blog } from 'contentlayer/generated';

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blog[] = allBlogs;
  const sortedBlog = blogs.sort(
    (a, b) => getUnixTime(new Date(b.date)) - getUnixTime(new Date(a.date)),
  );

  return {
    props: {
      blogPosts: sortedBlog,
    },
  };
};

export default HomePage;
