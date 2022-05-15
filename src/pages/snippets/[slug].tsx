import SnippetDetailPage from '@components/SnippetDetailPage'
import { allSnippets } from '@contentlayer/generated'
import type { Snippet } from '@contentlayer/generated'
import { GetStaticProps } from 'next'
import Error404PageTemplate from '../404'

const Page = ({ isError = false, snippet }: { isError?: boolean; snippet: Snippet }) => {
	if (isError) {
		return <Error404PageTemplate />
	}

	return <SnippetDetailPage snippet={snippet} />
}
export async function getStaticPaths() {
	return {
		paths: allSnippets.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const snippet = allSnippets.find((p) => p.slug === (params?.slug as string))
	if (!snippet) {
		return {
			props: {
				isError: true,
			},
			revalidate: 60 * 60,
		}
	}
	return {
		props: {
			snippet,
		},
		revalidate: 60 * 60,
	}
}

export default Page
