import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import { motion } from 'framer-motion'
import { BlogType } from '@customType/index'
import Meta from '@components/Meta'
import Header from '@components/Header'
import { format } from 'date-fns'
import Footer from '@components/Footer'
import { DiscussionEmbed } from 'disqus-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const DetailBlog = ({ frontMatter, children }: BlogType) => {
	const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '')

	const updateCodeSyntaxHighlighting = () => {
		document.querySelectorAll('pre code').forEach((block: any) => {
			hljs.highlightBlock(block)
		})
	}

	const router = useRouter()

	useEffect(() => {
		updateCodeSyntaxHighlighting()
	})

	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='bg-gray-100'>
			<Meta
				title={frontMatter.title}
				description={frontMatter.description}
				keywords={frontMatter.keyword}
				image={frontMatter.thumbnail}
				url={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
			/>
			<main className='bg-purple-200 pb-12 bg-dots'>
				<Header />
				<div className='container mx-auto px-4'>
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
										<img src={frontMatter.thumbnail} alt={frontMatter.title} className='w-full h-full object-cover z-40 border-b-4 border-gray-800' />
									</div>

									<div className='px-6 md:px-12 py-8'>
										<h1 className='text-3xl md:text-5xl leading-tight font-bold'>{frontMatter.title}</h1>

										<div className='flex flex-wrap space-x-2 mt-1 mb-2'>
											{frontMatter.tags.map((tag, iTag) => (
												<div key={iTag} className='text-xs font-medium text-gray-200 px-2 py-1 bg-red-custom mr-2 mt-2 post-card--tag'>
													#{tag}
												</div>
											))}
										</div>

										<div className='mt-4'>
											<p className='text-sm text-gray-600'>
												<span role='img'>📅</span>&nbsp; {format(new Date(frontMatter.date), 'dd MMM yyyy')} | <span role='img'>☕️</span>
												&nbsp; 2 Min Read
											</p>
										</div>

										<div className='mt-8 post-wrapper relative'>{children}</div>
									</div>
								</article>

								<div className='mt-8 px-12 pb-8'>
									<DiscussionEmbed
										shortname={`${process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME}`}
										config={{
											url: `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
											identifier: slug,
											title: frontMatter.title,
											language: 'id', //e.g. for Traditional Chinese (Taiwan)
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
