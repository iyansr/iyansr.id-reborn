import Meta from '@components/Meta';
import { Section } from '@components/Section';
import { WorkCard } from '@components/WorkCard';
import workData from '@content/portfolio.json';
import { NextPage } from 'next';

const Work: NextPage = () => {
  return (
    <>
      <Meta
        title="Portfolio"
        description="'Projects, experiments and some stuff i've made.'"
        keywords="iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog, iyan saputra portfolio, iyan saputra work, iyansr work"
      />

      <Section background="purple" className="py-24">
        <div className="py-12 text-center">
          <h1 className="title-front text-5xl font-black md:text-6xl lg:text-7xl">PORTFOLIO</h1>
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
      </Section>
    </>
  );
};

export default Work;
