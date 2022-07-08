import { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export const PostCard = ({ post }: { post: Blog }) => {
  const path = post.slug;
  const image = post.thumbnail;

  const excerpt = post.description;
  const _readingTime = post.readingTime;

  return (
    <article className="post-card overflow-hidden rounded-xl border-4 border-gray-800 bg-white">
      <div className="aspect-w-5 aspect-h-3  relative cursor-pointer bg-gray-400">
        <Link href={`/blog/${path}`}>
          {image && (
            <Image
              layout="fill"
              className="aspect-w-2 aspect-h-1 object-cover"
              src={image}
              alt={String(post.title)}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div>
          <div className="h-16">
            <Link
              href={`/blog/${path}`}
              className="text-lg font-bold text-black transition-colors duration-200 line-clamp-2 hover:text-red-custom"
            >
              {post.title}
            </Link>
          </div>
          <p className="text-xs text-gray-700">
            <span role="img">📅</span>&nbsp; {format(new Date(String(post.date)), 'dd MMM yyyy')} |{' '}
            <span role="img">☕️</span>
            &nbsp; {_readingTime.text}
          </p>
        </div>

        <div className="card-content-body mt-2 flex-1 text-sm text-gray-700 line-clamp-3">
          {excerpt}
        </div>

        <div className="flex  flex-wrap">
          <div className="post-card--tag mr-2 mt-2 bg-red-custom px-2 py-1 text-xs font-medium text-gray-200">
            #{post.tags}
          </div>
        </div>
      </div>
    </article>
  );
};
