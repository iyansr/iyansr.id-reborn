import DetailBlog from '@components/Template'
import { GetStaticProps } from 'next'
import Error404PageTemplate from '../404'

const Page = ({ isError = false }: { isError?: boolean }) => {
	if (isError) {
		return <Error404PageTemplate />
	}

	return <DetailBlog />
}

export default Page

export async function getStaticPaths() {
	const paths: Array<any> = []

	return { paths, fallback: true }
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	const slug = params?.slug as string
// 	const queryClient = new QueryClient()
// 	try {
// 		await queryClient.prefetchQuery(['blogPost', slug], () => fetchBlogPost(slug))

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
