import Meta from '@components/Meta';
import { Section } from '@components/Section';
import { type Snippet } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const SnippetPost = ({ snippet }: { snippet: Snippet }) => {
  const { asPath } = useRouter();
  const Component = useMDXComponent(snippet.body.code);

  return (
    <>
      <Meta
        title={snippet.title}
        description={snippet.title}
        image={snippet.icon}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`}
      />

      <Section background="purple" className="pb-12">
        <div className="flex justify-center space-x-4  px-4">
          <div className="mt-24 w-full lg:w-9/12">
            <div className="py-12 text-center">
              <h1 className="title-front text-4xl font-black md:text-5xl">{snippet.title}</h1>
              <p className="mt-4 text-sm font-medium text-gray-800 md:text-base lg:text-lg">
                {snippet.description}
              </p>
            </div>
            <div className="rounded-xl border-4 border-gray-800 bg-gray-100 font-medium text-black">
              <div className="flex gap-2 rounded-t-lg border-b-4 border-gray-800 bg-orange-400 px-4 py-2">
                <Link href="/snippets">
                  <div className="h-4 w-4 rounded-full bg-red-500 "></div>
                </Link>
                <div className="h-4 w-4 rounded-full bg-yellow-300 "></div>
                <div className="h-4 w-4 rounded-full bg-green-400 "></div>
              </div>

              <article>
                <div className="px-6 py-8 md:px-12">
                  <div className="post-wrapper relative">
                    <Component />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
