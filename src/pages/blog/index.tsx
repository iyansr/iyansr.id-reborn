import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { getAllPost } from '@utils/api'
import { BlogProps } from '@customType/index'
import PostCard from '@components/PostCard'

const Blog = ({ fileList }: BlogProps) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Blog'
				description="'If I tell you what happen, it won't happen.'"
				keywords='iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog'
			/>

			<div className='container mx-auto px-6 md:px-0'>
				<Header />
				<div className='my-12'>
					<div className='mx-auto text-center h-40 space-y-2 flex flex-col justify-evenly'>
						<h1 className='font-bold text-3xl md:text-4xl'>Blog</h1>
						<h4>If I tell you what happen, it won't happen.</h4>
					</div>
				</div>
				<hr />

				<div className='mt-12'>
					<div className='grid grid-cols-4 gap-4'>
						{fileList
							.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
							.map((file, index) => (
								<PostCard {...file} key={index} />
							))}
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const fileList = getAllPost()

	return {
		props: {
			fileList,
		},
	}
}

export default Blog
