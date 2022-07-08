import Image from 'next/image';

type WorkType = {
  name: string;
  description: string;
  github: string | null;
  website: string | null;
  image: string;
  stacks: string[];
};

export const WorkCard = ({ name, image, stacks, description, github }: WorkType) => {
  return (
    <div className="post-card overflow-hidden rounded-xl border-4 border-gray-800 bg-white">
      <div className="aspect-w-5 aspect-h-3 relative cursor-pointer bg-gray-400">
        <Image
          layout="fill"
          className="aspect-w-2 aspect-h-1 object-cover"
          src={image}
          alt={String(name)}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div>
          <div className="h-10">
            <h1 className="text-xl font-bold text-black transition-colors duration-200 line-clamp-2 hover:text-red-custom">
              {name}
            </h1>
          </div>

          <div className="flex flex-wrap ">
            {stacks.map((tag, index) => (
              <div
                key={index}
                className="post-card--tag mr-2 mt-2 bg-red-custom px-2 py-1 text-xs font-medium text-gray-200"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex-1">
          <p className="text-sm text-gray-700">{description}</p>
        </div>

        <div className="flex justify-end">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-red-custom px-2 py-1 text-center"
            >
              <i className="fab fa-github fa-2x text-base text-white"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
