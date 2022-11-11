import { PostCardProps } from '@modules/home/home';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }: PostCardProps) => {
  const image = post.thumbnail;
  const path = post.slug;

  const excerpt = post.description;
  const _readingTime = post.readingTime;

  return (
    <div className="h-full overflow-hidden rounded-2xl bg-bg-1 shadow-lg shadow-black/5">
      <div className="relative aspect-[16/9]">
        <Image src={image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-sm font-medium text-earth-1">
          <span role="img">📅</span>&nbsp; {format(new Date(String(post.date)), 'dd MMM yyyy')} |{' '}
          <span role="img">☕️</span>
          &nbsp; {_readingTime.text}
        </p>
        <Link
          href={`/blog/${path}`}
          className="mt-2 text-2xl font-semibold text-earth-2 transition-colors duration-200 line-clamp-2"
        >
          {post.title}
        </Link>

        <div className="mt-2 flex-1 text-lg font-medium text-earth-1 line-clamp-3">{excerpt}</div>
        <div className="flex  flex-wrap">
          <div className=" mr-2 mt-2 rounded-md bg-bg-4 px-2 py-1 text-sm font-semibold text-earth-2 ">
            #{post.tags}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
