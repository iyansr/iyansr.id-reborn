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
    <div className=" flex flex-col-reverse items-center overflow-hidden rounded-xl bg-bg-1 shadow-xl shadow-gray-400/5 md:flex-row">
      <div className="flex-1 ">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-earth-2">{file.name}</h3>
          <div className="group/description relative">
            <p className="mt-4 text-base font-medium text-earth-1 line-clamp-2">
              {file.description}
            </p>
            <div className="absolute top-0 z-30 -translate-y-[500px] rounded-lg bg-bg-2 p-4  opacity-0 shadow-md transition-all delay-100 duration-150 group-hover/description:translate-y-0 group-hover/description:opacity-100">
              <p className="text-base font-medium text-earth-1">{file.description}</p>
            </div>
          </div>
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
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WorkCard;
