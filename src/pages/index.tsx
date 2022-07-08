import Meta from '@components/Meta';
import { PostCard } from '@components/PostCard';
import { Section } from '@components/Section';
import { WorkCard } from '@components/WorkCard';
import workData from '@content/portfolio.json';
import { allBlogs, type Blog } from 'contentlayer/generated';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogPosts }) => {
  return (
    <>
      <Meta
        title="Iyan Saputra"
        description="A Frontend Developer who passionate about modern mobile and web technology using React JS, React Native, and other React / JS Framework.
				And would be a fast learner to doing new things and build good teamwork either."
      />

      <Section background="teal" first>
        <div className="container mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 text-center md:px-8 lg:px-12">
          <p className="text-lg font-bold text-red-custom">Hi, I'm</p>
          <h1 className="title-front text-5xl font-black md:text-6xl lg:text-7xl">IYAN SAPUTRA</h1>

          <p className="mt-4 text-sm font-medium text-gray-800 md:text-base lg:text-lg">
            A Frontend Developer who passionate about modern mobile and web technology using React
            JS, React Native, and other React / JS Framework. And would be a fast learner to doing
            new things and build good teamwork either.
          </p>
        </div>
      </Section>

      <Section background="yellow" className="pb-24">
        <div className="py-12 text-center">
          <h2 className="title-front text-5xl font-black md:text-6xl lg:text-7xl">MY ARTICLES</h2>
          <p className="mt-4 text-sm font-medium text-gray-800 md:text-base lg:text-lg">
            If I tell you what happen, it won't happen.
          </p>
        </div>

        <div className="pb-12 pt-6 md:pb-24 md:pt-12">
          <div className="grid  gap-12 px-10 md:grid-cols-2 md:px-4 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post: Blog) => (
              <PostCard post={post} key={post._id} />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center">
          <Link href="/blog">
            <button className="article-button rounded-lg border-2 border-gray-900 bg-red-custom px-4 py-2 font-bold text-white focus:outline-none">
              More Articles
            </button>
          </Link>
        </div>
      </Section>

      <Section background="purple" className="pb-12">
        <div className="py-12 text-center">
          <h2 className="title-front text-5xl font-black md:text-6xl lg:text-7xl">PORTFOLIO</h2>
          <p className="mt-4 text-sm font-medium text-gray-800 md:text-base lg:text-lg">
            Projects, experiments and some stuff i've made.
          </p>
        </div>

        <div className="pb-12 pt-6 md:pb-24 md:pt-12">
          <div className="grid  gap-12 px-10 md:grid-cols-2 md:px-4 lg:grid-cols-3">
            {workData.map((file, index) => (
              <WorkCard {...file} key={index} />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center">
          <Link href="/work">
            <button className="article-button border-2 border-gray-900 bg-red-custom px-4 py-2 font-bold text-white focus:outline-none">
              More Work
            </button>
          </Link>
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

export default Home;
