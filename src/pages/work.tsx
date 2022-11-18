import type { GetStaticProps } from 'next';

import getWork from '@modules/shared/api/getWork';
import WorkPage from '@modules/work/pages/WorkPage';

export const getStaticProps: GetStaticProps = async () => {
  const works = await getWork();

  return {
    props: {
      works,
    },
  };
};

export default WorkPage;
