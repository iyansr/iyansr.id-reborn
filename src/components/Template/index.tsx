import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import { motion } from 'framer-motion'
import Meta from '@components/Meta'
import Header from '@components/Header'
import { format } from 'date-fns'
import Footer from '@components/Footer'
import { DiscussionEmbed } from 'disqus-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Markdown from '@components/Markdown'
import Error404PageTemplate from '@components/Error404PageTemplate'

const DetailBlog = () => {
	const router = useRouter()
	const slug = router.query?.slug as string

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
			{/* <Meta
				title={post?.data.attributes.title as string}
				description={post?.data.attributes.excerpt as string}
				image={post?.data.attributes.cover.data.attributes.url}
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
										<img
											src={post?.data.attributes.cover.data.attributes.url}
											alt={post?.data.attributes.title}
											className='w-full h-full object-cover z-40 border-b-4 border-gray-800'
										/>
									</div>

									<div className='px-6 md:px-12 py-8'>
										<h1 className='text-3xl md:text-5xl leading-tight font-bold'>{post?.data.attributes.title}</h1>

										<div className='flex flex-wrap space-x-2 mt-1 mb-2'>
											{post?.data.attributes.labels.data.map((tag, iTag) => (
												<div key={iTag} className='text-xs font-medium text-gray-200 px-2 py-1 bg-red-custom mr-2 mt-2 post-card--tag'>
													#{tag.attributes.text}
												</div>
											))}
										</div>

										<div className='mt-4'>
											<p className='text-sm text-gray-600'>
												<span role='img'>📅</span>&nbsp; {format(new Date(post?.data.attributes.createdAt as string), 'dd MMM yyyy')} |{' '}
												<span role='img'>☕️</span>
												&nbsp; 2 Min Read
											</p>
										</div>

										<div className='mt-8 post-wrapper relative'>
											<Markdown source={post?.data.attributes.content as string} />
										</div>
									</div>
								</article>
								<div className='px-6 md:px-12'>
									<DiscussionEmbed
										shortname={process.env.NEXT_PUBLIC_DISCUSS_ID as string}
										config={{
											title: post?.data.attributes.title as string,
											url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
											identifier: post?.data.attributes.slug as string,
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main> */}

			<Footer />
		</motion.div>
	)
}

export default DetailBlog
