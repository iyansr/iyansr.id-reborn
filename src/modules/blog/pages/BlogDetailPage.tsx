import { format } from 'date-fns';
import { DiscussionEmbed } from 'disqus-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Meta from '@modules/shared/components/Meta';
import { Section } from '@modules/shared/components/Section';
import { BlogExtended } from '@modules/shared/type';

type BlogPageProps = {
  blogPost: BlogExtended;
};

const BlogDetailPage = ({ blogPost }: BlogPageProps) => {
  const { asPath } = useRouter();
  const Component = useMDXComponent(blogPost.body.code);
  return (
    <>
      <Meta
        title={blogPost.title}
        description={blogPost.description}
        image={blogPost.thumbnail}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`}
        keywords={blogPost.keyword}
      />

      <Section className="pb-12">
        <div className="flex justify-center space-x-4 px-4">
          <div className="mt-24 w-full lg:max-w-screen-lg">
            <div className="rounded-xl border-4 border-earth-1 bg-bg-1 font-medium text-earth-2">
              <div className="flex gap-2 rounded-t-lg border-b-4 border-earth-1 bg-bg-4 px-4 py-2">
                <Link href="/blog">
                  <div className="h-4 w-4 rounded-full bg-red-500 " />
                </Link>
                <div className="h-4 w-4 rounded-full bg-orange-300 " />
                <div className="h-4 w-4 rounded-full bg-green-400 " />
              </div>

              <article>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={blogPost.thumbnail}
                    alt={blogPost.title}
                    blurDataURL={blogPost.blurDataURL}
                    placeholder="blur"
                    fill
                    className="z-40 h-full w-full border-b-4 border-gray-800 object-cover"
                  />
                </div>

                <div className="px-6 py-8 md:px-12">
                  <h1 className="text-3xl font-bold leading-tight md:text-5xl">{blogPost.title}</h1>

                  <div className="mt-1 mb-2 flex flex-wrap space-x-2">
                    <div className=" mr-2 mt-2 rounded-md bg-bg-4 px-2 py-1 text-xs font-semibold text-earth-2 md:text-sm ">
                      #{blogPost?.tags}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <span role="img">📅</span>&nbsp;{' '}
                      {format(new Date(blogPost.date), 'dd MMM yyyy')} | <span role="img">☕️</span>
                      &nbsp; {blogPost.readingTime.text as string}
                    </p>
                  </div>

                  <div className="post-wrapper relative mt-8">
                    <Component />
                  </div>
                </div>
              </article>
              <div className="px-6 md:px-12">
                <DiscussionEmbed
                  shortname={process.env.NEXT_PUBLIC_DISCUSS_ID as string}
                  config={{
                    title: blogPost.title,
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`,
                    identifier: blogPost.slug,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogDetailPage;
