import { SnippetPost } from '@components/Layout/containers/SnippetPost';
import { allSnippets, type Snippet } from 'contentlayer/generated';
import { GetStaticProps } from 'next';

const SnippetPage = ({ snippet }: { snippet: Snippet }) => {
  return <SnippetPost snippet={snippet} />;
};

export async function getStaticPaths() {
  return {
    paths: allSnippets.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const snippet = allSnippets.find((p) => p.slug === (params?.slug as string));

  if (!snippet) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      snippet,
    },
  };
};

export default SnippetPage;
