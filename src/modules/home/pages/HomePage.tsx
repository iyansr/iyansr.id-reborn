import { ComponentType, Fragment } from 'react';
import dynamic from 'next/dynamic';

import Meta from '@modules/shared/components/Meta';

import { ArticleProps, HomeProps, WorkProps } from '../home';

const DynamicHero: ComponentType = dynamic(() => import('@modules/home/components/HeroSection'));
const DynamicArticle: ComponentType<ArticleProps> = dynamic(
  () => import('@modules/home/components/ArticleSection'),
);
const DynamicWork: ComponentType<WorkProps> = dynamic(
  () => import('@modules/home/components/WorkSection'),
);

const HomePage = ({ blogPosts, works }: HomeProps) => {
  return (
    <Fragment>
      <Meta
        title="Iyan Saputra"
        description="A Frontend Developer who passionate about modern mobile and web technology using React JS, React Native, and other React / JS Framework.
         And would be a fast learner to doing new things and build good teamwork either."
      />

      <DynamicHero />
      <DynamicWork works={works} />
      <DynamicArticle blogPosts={blogPosts} />
    </Fragment>
  );
};

export default HomePage;
