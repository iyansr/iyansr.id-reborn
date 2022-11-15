import Meta from '@modules/shared/components/Meta';
import dynamic from 'next/dynamic';
import { ComponentType, Fragment } from 'react';
import { HomeProps } from '../home';

const DynamicNavbar: ComponentType = dynamic(() => import('@modules/shared/components/Navbar'));
const DynamicHero: ComponentType = dynamic(() => import('@modules/home/components/HeroSection'));
const DynamicArticle: ComponentType<HomeProps> = dynamic(
  () => import('@modules/home/components/ArticleSection'),
);
const DynamicWork: ComponentType = dynamic(() => import('@modules/home/components/WorkSection'));
const DynamicFooter: ComponentType = dynamic(() => import('@modules/shared/components/Footer'));

const HomePage = ({ blogPosts }: HomeProps) => {
  return (
    <Fragment>
      <Meta
        title="Iyan Saputra"
        description="A Frontend Developer who passionate about modern mobile and web technology using React JS, React Native, and other React / JS Framework.
         And would be a fast learner to doing new things and build good teamwork either."
      />

      <DynamicNavbar />
      <DynamicHero />
      <DynamicWork />
      <DynamicArticle blogPosts={blogPosts} />
      <DynamicFooter />
    </Fragment>
  );
};

export default HomePage;
