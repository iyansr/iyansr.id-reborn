import FeaturedPostCard from '@modules/shared/components/FeaturedPostCard';
import Meta from '@modules/shared/components/Meta';
import { Section } from '@modules/shared/components/Section';
import { BlogExtended } from '@modules/shared/type';
import eczar from '@modules/shared/utils/font';

type Props = {
  blogPosts: BlogExtended[];
};

const BlogPage = ({ blogPosts }: Props) => {
  return (
    <>
      <Meta
        title="Blog"
        description="'If I tell you what happen, it won't happen.'"
        keywords="iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog"
      />
      <Section>
        <div className="py-12 text-center">
          <h2
            className={`${eczar.className} text-5xl font-black text-earth-2 md:text-6xl lg:text-7xl`}
          >
            MY ARTICLES
          </h2>
          <p className="mt-4 text-sm font-medium text-earth-1 md:text-base lg:text-lg">
            If I tell you what happen, it {"won't"} happen.
          </p>
        </div>

        <div className="grid gap-6 px-4 pb-12 md:grid-cols-3">
          {blogPosts.slice(0, 4).map((post) => (
            <div key={post._id}>
              <FeaturedPostCard post={post} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default BlogPage;
