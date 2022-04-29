import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import PostCard from '@components/PostCard'
import { dehydrate, QueryClient } from 'react-query'
import useQueryBlogPosts, { fetchBlogPosts } from 'src/hooks/blog/useQueryBlogPosts'

const Blog = () => {
	const { data: posts } = useQueryBlogPosts()
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Blog'
				description="'If I tell you what happen, it won't happen.'"
				keywords='iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog'
			/>
			<Header />
			<main className='bg-yellow-200 py-24 bg-dots'>
				<div className='container mx-auto'>
					<div className='text-center py-12'>
						<h2 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>MY ARTICLES</h2>
						<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>If I tell you what happen, it won't happen.</p>
					</div>

					<div className='pb-12 pt-6 md:pb-24 md:pt-12'>
						<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 md:px-4'>
							{posts?.data.map((post) => (
								<PostCard post={post} key={post?.id} />
							))}
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</motion.div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery('blogPosts', fetchBlogPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 60 * 60,
	}
}

export default Blog
