import React, { useEffect } from 'react'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import hljs from 'highlight.js'

import { format } from 'date-fns'
import { DiscussionEmbed } from 'disqus-react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useMDXComponent } from 'next-contentlayer/hooks'

import type { Blog } from '@contentlayer/generated'

type BlogPageProps = {
	blogPost: Blog
}

const DetailBlog = ({ blogPost }: BlogPageProps) => {
	const router = useRouter()
	const Component = useMDXComponent(blogPost.body.code)

	const updateCodeSyntaxHighlighting = () => {
		document.querySelectorAll('pre code').forEach((block: any) => {
			hljs.highlightBlock(block)
		})
	}

	useEffect(() => {
		updateCodeSyntaxHighlighting()
	})

	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='bg-gray-100'>
			<Meta
				title={blogPost.title}
				description={blogPost.description}
				image={blogPost.thumbnail}
				url={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
			/>
			<main className='bg-purple-200 pb-12 bg-dots'>
				<Header />
				<div className='container mx-auto px-4 max-w-screen-xl'>
					<div className='flex space-x-4 justify-center'>
						<div className='w-full lg:w-9/12 mt-24'>
							<div className='bg-gray-100 rounded-xl border-4 border-gray-800 text-black font-medium'>
								<div className='px-4 py-2 flex gap-2 bg-orange-400 rounded-t-lg border-b-4 border-gray-800'>
									<Link href='/blog'>
										<a>
											<div className='h-4 w-4 rounded-full bg-red-500 '></div>
										</a>
									</Link>
									<div className='h-4 w-4 rounded-full bg-yellow-300 '></div>
									<div className='h-4 w-4 rounded-full bg-green-400 '></div>
								</div>

								<article>
									<div className='relative w-full'>
										<img src={blogPost.thumbnail} alt={blogPost.title} className='w-full h-full object-cover z-40 border-b-4 border-gray-800' />
									</div>

									<div className='px-6 md:px-12 py-8'>
										<h1 className='text-3xl md:text-5xl leading-tight font-bold'>{blogPost.title}</h1>

										<div className='flex flex-wrap space-x-2 mt-1 mb-2'>
											<div className='text-xs font-medium text-gray-200 px-2 py-1 bg-red-custom mr-2 mt-2 post-card--tag'>#{blogPost?.tags}</div>
										</div>

										<div className='mt-4'>
											<p className='text-sm text-gray-600'>
												<span role='img'>📅</span>&nbsp; {format(new Date(blogPost.date), 'dd MMM yyyy')} | <span role='img'>☕️</span>
												&nbsp; 2 Min Read
											</p>
										</div>

										<div className='mt-8 post-wrapper relative'>
											<Component />
										</div>
									</div>
								</article>
								<div className='px-6 md:px-12'>
									<DiscussionEmbed
										shortname={process.env.NEXT_PUBLIC_DISCUSS_ID as string}
										config={{
											title: blogPost.title,
											url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
											identifier: blogPost.slug,
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</motion.div>
	)
}

export default DetailBlog
