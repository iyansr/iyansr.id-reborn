import GithubIcon from '@modules/shared/icons/GithubIcon';
import GlobeIcon from '@modules/shared/icons/GlobeIcon';
import { Eczar } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import work from 'src/content/portfolio.json';

const eczar = Eczar();

// {
//   name: string;
//   description: string;
//   github: string;
//   website: null;
//   image: string;
//   stacks: string[];
// }

const WorkSection = () => {
  return (
    <section className="bg-bg-3">
      <div className="mx-auto max-w-6xl items-center px-4 py-20">
        <h2 className={`${eczar.className} mb-10 text-4xl font-semibold text-earth-2`}>My Work</h2>

        <div className="flex flex-col space-y-6">
          {work.slice(0, 3).map((file, index) => (
            <div
              className="group flex items-center overflow-hidden rounded-xl bg-bg-1 shadow-xl shadow-gray-400/5"
              key={String(index)}
            >
              <div className="flex-1 ">
                <div className="p-12">
                  <h3 className="text-3xl font-semibold text-earth-2">{file.name}</h3>
                  <p className="mt-4 text-xl font-medium text-earth-1">{file.description}</p>

                  <div className="mt-3 flex items-center space-x-4">
                    {file.github && (
                      <Link
                        href={file.github}
                        target="_blank"
                        className="flex items-center font-semibold text-biru-1"
                      >
                        <span>
                          <GithubIcon width={18} height={18} />
                        </span>
                        <span>View Github</span>
                      </Link>
                    )}
                    {file.website && (
                      <Link
                        href={file.website}
                        target="_blank"
                        className="flex items-center font-semibold text-biru-1"
                      >
                        <span>
                          <GlobeIcon width={18} height={18} />
                        </span>
                        <span>View Project</span>
                      </Link>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap">
                    {file.stacks.map((stack, i) => (
                      <div
                        key={String(i)}
                        className=" mr-2 mt-2 rounded-md bg-bg-4 px-2 py-1 text-sm font-semibold text-earth-2 "
                      >
                        #{stack}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] flex-1">
                <Image
                  src={file.image}
                  alt={file.name}
                  fill
                  className="h-full object-cover transition-transform duration-150 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex">
          <button className="mx-auto rounded-2xl bg-biru-1 py-4 px-6 text-xl font-semibold text-bg-0 transition-transform duration-100 hover:scale-105">
            <span>View All</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
