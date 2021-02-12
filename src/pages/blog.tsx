import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import { FileType, BlogProps } from '@customType/index'
import PostCard from '@components/PostCard'
import { getSortedPostsData } from '@utils/api'
import { GetStaticProps } from 'next'
import SectionTwo from '@components/SectionTwo'

const Blog = ({ fileList }: BlogProps) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Blog'
				description="'If I tell you what happen, it won't happen.'"
				keywords='iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog'
			/>

			<Header />

			<div className='bg-yellow-200 py-24'>
				<div className='container mx-auto'>
					<div className='text-center py-12'>
						<h2 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>MY ARTICLES</h2>
						<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>If I tell you what happen, it won't happen.</p>
					</div>

					<div className='pb-12 pt-6 md:pb-24 md:pt-12'>
						<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 md:px-4'>
							{fileList
								.sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime())
								.map((file: FileType, index: number) => (
									<PostCard {...file} key={index} />
								))}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</motion.div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const fileList = getSortedPostsData()
	return {
		props: { fileList },
	}
}

export default Blog
