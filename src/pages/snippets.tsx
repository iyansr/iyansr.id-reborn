import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { GetStaticProps } from 'next'
import { allSnippets, Snippet } from '@contentlayer/generated'
import SnippetsCard from '@components/SnippetsCard'

const Snippets = ({ snippets }: { snippets: Snippet[] }) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Snippets'
				description='In Case I Forgot ✌'
				keywords='iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog'
			/>
			<Header />
			<main className='bg-purple-200 py-24 bg-dots'>
				<div className='container mx-auto max-w-screen-xl min-h-screen'>
					<div className='text-center py-12'>
						<h2 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>MY SNIPPETS</h2>
						<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>{'In Case I Forgot ✌'}</p>
					</div>

					<div className='pb-12 pt-6 md:pb-24 md:pt-12'>
						<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-4'>
							{snippets?.map((snippet) => (
								<SnippetsCard snippet={snippet} key={snippet._id} />
							))}
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</motion.div>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const snippets = allSnippets

	return {
		props: {
			snippets,
		},
		revalidate: 60 * 60,
	}
}

export default Snippets
