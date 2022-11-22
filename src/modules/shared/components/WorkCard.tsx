import Image from 'next/image';
import Link from 'next/link';

import GithubIcon from '../icons/GithubIcon';
import GlobeIcon from '../icons/GlobeIcon';
import { WorkType } from '../type';

export type WorkCardProps = {
  file: WorkType;
};

const WorkCard = ({ file }: WorkCardProps) => {
  return (
    <div className="group flex flex-col-reverse items-center overflow-hidden rounded-xl bg-bg-1 shadow-xl shadow-gray-400/5 md:flex-row">
      <div className="flex-1 ">
        <div className="p-6 md:p-12">
          <h3 className="text-2xl font-semibold text-earth-2 md:text-3xl">{file.name}</h3>
          <p className="mt-4 text-lg font-medium text-earth-1 md:text-xl">{file.description}</p>

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
      <div className="relative aspect-[16/9] w-full flex-1">
        <Image
          src={`${file.image}?tr=w-640`}
          alt={file.name}
          blurDataURL={file.blurDataURL}
          placeholder="blur"
          fill
          sizes="100%"
          className="h-full object-cover transition-transform duration-150 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default WorkCard;
