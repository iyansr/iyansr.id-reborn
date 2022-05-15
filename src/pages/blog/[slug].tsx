import DetailBlog from '@components/Template'
import Error404PageTemplate from '../404'

import { GetStaticProps } from 'next'
import { allBlogs } from '@contentlayer/generated'
import type { Blog } from '@contentlayer/generated'

type BlogPageProps = {
	isError?: boolean
	blogPost: Blog
}

const Page = ({ isError = false, blogPost }: BlogPageProps) => {
	if (isError) {
		return <Error404PageTemplate />
	}

	return <DetailBlog blogPost={blogPost} />
}

export async function getStaticPaths() {
	return {
		paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const blogPost = allBlogs.find((p) => p.slug === (params?.slug as string))
	if (!blogPost) {
		return {
			props: {
				isError: true,
			},
			revalidate: 60 * 60,
		}
	}
	return {
		props: {
			blogPost,
		},
		revalidate: 60 * 60,
	}
}

export default Page
