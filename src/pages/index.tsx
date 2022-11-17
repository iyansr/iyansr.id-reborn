import type { GetStaticProps } from 'next';

import HomePage from '@modules/home/pages/HomePage';
import getPosts from '@modules/shared/api/getPosts';
import getWork from '@modules/shared/api/getWork';

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getPosts();
  const works = await getWork();

  return {
    props: {
      blogPosts,
      works,
    },
  };
};

export default HomePage;
