import Meta from '@modules/shared/components/Meta';
import Navbar from '@modules/shared/components/Navbar';
import { Blog } from 'contentlayer/generated';
import { Fragment } from 'react';
import Section1 from '../components/Section1';

type HomeProps = {
  blogPosts: Blog[];
};

const HomePage = ({ blogPosts }: HomeProps) => {
  return (
    <Fragment>
      <Meta
        title="Iyan Saputra"
        description="A Frontend Developer who passionate about modern mobile and web technology using React JS, React Native, and other React / JS Framework.
         And would be a fast learner to doing new things and build good teamwork either."
      />

      <Navbar />
      <Section1 />
    </Fragment>
  );
};

export default HomePage;
