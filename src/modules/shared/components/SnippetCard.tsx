import { type Snippet } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

export const SnippetsCard = ({ icon, slug, title, description }: Snippet) => {
  return (
    <Link passHref href={`/snippets/${slug}`}>
      <div className=" overflow-hidden rounded-xl bg-bg-1 p-4 shadow-lg shadow-black/5">
        <Image
          src={icon}
          alt="Firebase"
          width={10}
          height={10}
          className="h-10 w-10 rounded-full border-2 border-gray-800"
        />
        <p className="mt-2 font-bold text-gray-800">{title}</p>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </Link>
  );
};
