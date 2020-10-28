import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
// import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getAllPost } from '@utils/api'
import Link from 'next/link'

type BlogProps = {
	fileList: FileType[],
}

type FileType = {
	description: string,
	title: string,
	thumbnail: string,
	keyword: string,
	date: string,
	slug: string,
	tags: {
		label: string,
		color: string,
	}[],
}

const Blog = ({ fileList }: BlogProps) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta title='Blog' description="'If I tell you what happen, it won't happen.'" />

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
								<div
									className='bg-secondary rounded-md shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-1 post-card flex flex-col'
									key={index}>
									<img className='w-full h-40 object-cover rounded-t-md' src={file.thumbnail} alt={file.title} />

									<div className='p-4 flex-1 flex flex-col'>
										<div>
											<div className='h-12'>
												<Link href='/blog/[slug]' as={`/blog/${file.slug}`}>
													<a className=' font-bold text-gray-500 hover:text-pink-500 transition-colors duration-200 truncate-2-lines'>
														{file.title} lorem
													</a>
												</Link>
											</div>
											<p className='text-xs text-gray-600'>
												<span role='img'>📅</span>&nbsp; 20 Mei 2020 | <span role='img'>☕️</span>
												&nbsp; {20} Min Read
											</p>
										</div>

										<div className='flex-1'>
											<p className='truncate-3-lines mt-4 text-sm'>{file.description}</p>
										</div>

										<div className='flex flex-wrap space-x-2 mt-1'>
											{file.tags.map((tag, iTag) => (
												<div key={iTag} style={{ background: tag.color }} className='text-xs font-medium text-primary px-2 rounded-md'>
													#{tag.label}
												</div>
											))}
										</div>
									</div>
								</div>
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
