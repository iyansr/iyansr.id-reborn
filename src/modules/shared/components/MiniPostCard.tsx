import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { PostCardProps } from '@modules/home/home';

const MiniPostCard = ({ post }: PostCardProps) => {
  const image = post.thumbnail;
  const path = post.slug;

  const _readingTime = post.readingTime;

  return (
    <div className="flex items-center space-x-2 overflow-hidden rounded-2xl bg-bg-1 shadow-lg shadow-black/5 md:space-x-4">
      <div className="relative aspect-[10/7] flex-1 overflow-hidden rounded-md md:aspect-[12/7]">
        <Image
          src={`${image}?tr=w-426`}
          alt={post.title}
          blurDataURL={post.blurDataURL}
          placeholder="blur"
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="">
          <p className="text-[9px] font-medium text-earth-1 md:text-xs">
            <span role="img">📅</span>&nbsp; {format(new Date(String(post.date)), 'dd MMM yyyy')} |{' '}
            <span role="img">☕️</span>
            &nbsp; {_readingTime.text}
          </p>
        </div>
        <div className=" pr-4">
          <Link
            href={`/blog/${path}`}
            className="text-sm font-semibold text-earth-2 transition-colors duration-200 line-clamp-2 md:text-lg"
          >
            {post.title}
          </Link>
        </div>
        <div className="flex flex-wrap">
          <div className=" mr-2 mt-2 rounded-md bg-bg-4  px-2 py-1 text-xs font-semibold text-earth-2 md:text-sm ">
            #{post.tags}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniPostCard;
