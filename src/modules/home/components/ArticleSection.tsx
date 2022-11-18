import Link from 'next/link';

import FeaturedPostCard from '@modules/shared/components/FeaturedPostCard';
import MiniPostCard from '@modules/shared/components/MiniPostCard';
import eczar from '@modules/shared/utils/font';

import { ArticleProps } from '../home';

const ArticleSection = ({ blogPosts }: ArticleProps) => {
  return (
    <section className="bg-bg-2">
      <div className="mx-auto max-w-6xl items-center px-4 py-20">
        <h2 className={`${eczar.className} mb-10 text-4xl font-semibold text-earth-2`}>
          My Articles
        </h2>

        <div className="grid gap-4 md:grid-cols-11 md:grid-rows-3">
          {blogPosts.slice(0, 4).map((post, index) => (
            <div
              key={post._id}
              className={index === 0 ? 'md:col-span-5 md:row-span-3' : 'md:col-span-6'}
            >
              {index === 0 ? <FeaturedPostCard post={post} /> : <MiniPostCard post={post} />}
            </div>
          ))}
        </div>

        <div className="mt-12 flex">
          <Link href="/blog" className="mx-auto">
            <button className="mx-auto rounded-2xl bg-biru-1 py-4 px-6 text-xl font-semibold text-bg-0 transition-transform duration-100 hover:scale-105">
              <span>View All</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
