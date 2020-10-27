import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import path from 'path'
import { GetStaticProps } from 'next'

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
								<div className='bg-secondary rounded-md shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-1' key={index}>
									<img className='w-full h-40 object-cover rounded-t-md' src={file.thumbnail} alt={file.title} />

									<div></div>
									<p>{file.title}</p>
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
	const directoryPath = path.join('src/content/posts')

	const readDir = fs.readdirSync(directoryPath)
	const fileList = readDir.map((file) => {
		const markdownWithMetadata = fs.readFileSync(path.join('src/content/posts', file)).toString()
		const parsedMarkdown = matter(markdownWithMetadata)

		return parsedMarkdown.data
	})

	return {
		props: {
			fileList,
		},
	}
}

export default Blog
