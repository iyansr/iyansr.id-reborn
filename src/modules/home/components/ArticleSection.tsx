import FeaturedPostCard from '@modules/shared/components/FeaturedPostCard';
import MiniPostCard from '@modules/shared/components/MiniPostCard';
import { Eczar } from '@next/font/google';
import { HomeProps } from '../home';

const eczar = Eczar();

const ArticleSection = ({ blogPosts }: HomeProps) => {
  console.log(eczar);
  return (
    <section className="bg-bg-2">
      <div className="mx-auto max-w-6xl items-center px-4 py-20">
        <h2 className={`${eczar.className} mb-10 text-4xl font-semibold text-earth-2`}>
          My Articles
        </h2>

        <div className="grid grid-cols-11 grid-rows-3 gap-4">
          {blogPosts.slice(0, 4).map((post, index) => (
            <div key={post._id} className={index === 0 ? 'col-span-5 row-span-3' : 'col-span-6'}>
              {index === 0 ? <FeaturedPostCard post={post} /> : <MiniPostCard post={post} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
