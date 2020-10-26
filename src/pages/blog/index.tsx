import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import fs from 'fs'
import Link from 'next/link'

type BlogProps = {
	slugs: string[],
}

const Blog = ({ slugs }: BlogProps) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Iyan Saputra — Full Stack Developer | Blog'
				description='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a
						fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage
						project and task.'
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

				<div>
					<div>
						slugs:
						{slugs.map((slug) => {
							return (
								<div key={slug}>
									<Link href={'/blog/[slug]'} as={`/blog/${slug}`} shallow={false}>
										<a>{'/blog/' + slug}</a>
									</Link>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export const getStaticProps = async () => {
	const files = fs.readdirSync('src/posts')
	return {
		props: {
			slugs: files.map((filename) => filename.replace('.md', '')),
		},
	}
}

export default Blog
