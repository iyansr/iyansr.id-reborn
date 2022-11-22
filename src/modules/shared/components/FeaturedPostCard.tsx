import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { PostCardProps } from '@modules/home/home';

const FeaturedPostCard = ({ post }: PostCardProps) => {
  const image = post.thumbnail;
  const path = post.slug;

  const excerpt = post.description;
  const _readingTime = post.readingTime;

  return (
    <div className="h-full overflow-hidden rounded-2xl bg-bg-1 shadow-lg shadow-black/5">
      <div className="relative aspect-[16/9]">
        <Image
          src={`${image}?tr=w-426`}
          alt={post.title}
          placeholder="blur"
          blurDataURL={post.blurDataURL}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className=" text-xs font-medium text-earth-1 md:text-sm">
          <span role="img">📅</span>&nbsp; {format(new Date(String(post.date)), 'dd MMM yyyy')} |{' '}
          <span role="img">☕️</span>
          &nbsp; {_readingTime.text}
        </p>
        <Link
          href={`/blog/${path}`}
          className="mt-2 text-lg font-semibold text-earth-2 transition-colors duration-200 line-clamp-2 md:text-2xl"
        >
          {post.title}
        </Link>

        <div className="mt-2 flex-1 text-sm font-medium text-earth-1 line-clamp-3 md:text-lg">
          {excerpt}
        </div>
        <div className="flex  flex-wrap">
          <div className=" mr-2 mt-2 rounded-md bg-bg-4 px-2 py-1 text-xs font-semibold text-earth-2 md:text-sm ">
            #{post.tags}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
