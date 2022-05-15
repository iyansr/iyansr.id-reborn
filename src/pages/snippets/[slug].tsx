import SnippetDetailPage from '@components/SnippetDetailPage'
import { GetStaticProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import Error404PageTemplate from '../404'

const Page = ({ isError = false }: { isError?: boolean }) => {
	if (isError) {
		return <Error404PageTemplate />
	}

	return <SnippetDetailPage />
}

export async function getStaticPaths() {
	const paths: Array<any> = []

	return { paths, fallback: true }
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	const slug = params?.slug as string
// 	const queryClient = new QueryClient()
// 	try {

// 		return {
// 			props: {
// 				dehydratedState: dehydrate(queryClient),
// 			},
// 			revalidate: 60 * 60,
// 		}
// 	} catch (error) {
// 		return {
// 			props: {
// 				isError: true,
// 			},
// 			revalidate: 60 * 60,
// 		}
// 	}
// }

export default Page
