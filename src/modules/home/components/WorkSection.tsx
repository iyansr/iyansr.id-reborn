import { Eczar } from '@next/font/google';
import Link from 'next/link';

import WorkCard from '@modules/shared/components/WorkCard';

import { WorkProps } from '../home';

const eczar = Eczar();

const WorkSection = ({ works }: WorkProps) => {
  return (
    <section className="bg-bg-3">
      <div className="mx-auto max-w-6xl items-center px-4 py-20">
        <h2 className={`${eczar.className} mb-10 text-4xl font-semibold text-earth-2`}>My Work</h2>

        <div className="flex flex-col space-y-6">
          {works.slice(0, 3).map((file, index) => (
            <WorkCard file={file} key={String(index)} />
          ))}
        </div>

        <div className="mt-12 flex">
          <Link href="/work" className="mx-auto">
            <button className="mx-auto rounded-2xl bg-biru-1 py-4 px-6 text-xl font-semibold text-bg-0 transition-transform duration-100 hover:scale-105">
              <span>View All</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
