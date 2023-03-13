import Meta from '@modules/shared/components/Meta';
import { Section } from '@modules/shared/components/Section';
import WorkCard from '@modules/shared/components/WorkCard';
import { WorkType } from '@modules/shared/type';
import eczar from '@modules/shared/utils/font';

type Props = {
  works: WorkType[];
};

const WorkPage = ({ works }: Props) => {
  return (
    <>
      <Meta
        title="My Work"
        description="'Projects, experiments and some stuff i've made.'"
        keywords="iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog, iyan saputra portfolio, iyan saputra work, iyansr work"
      />
      <Section>
        <div className="py-12 text-center">
          <h2
            className={`${eczar.className} text-5xl font-black text-earth-2 md:text-6xl lg:text-7xl`}
          >
            MY WORK
          </h2>
          <p className="mt-4 text-sm font-medium text-earth-1 md:text-base lg:text-lg">
            Projects, experiments and some stuff {"i've"} made.
          </p>
        </div>

        <div className="flex flex-col space-y-6 py-11 px-6">
          {works.map((file, index) => (
            <div key={String(index)}>
              <WorkCard file={file} key={String(index)} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default WorkPage;
