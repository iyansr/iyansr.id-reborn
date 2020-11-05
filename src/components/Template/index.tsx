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
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title={frontMatter.title}
				description={frontMatter.description}
				keywords={frontMatter.keyword}
				image={frontMatter.thumbnail}
				url={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
			/>
			<Header />

			<div className='container mx-auto px-6'>
				<div className='mt-6 flex space-x-4 justify-center'>
					<div className='w-full lg:w-9/12'>
						<div className='mb-6'>
							<Link href='/blog'>
								<a className='focus:outline-none text-purple-700 text-sm'>&#8592; Back</a>
							</Link>
						</div>
						<div className='bg-secondary rounded-md border border-gray-800'>
							<div className='relative w-full'>
								<img src={frontMatter.thumbnail} alt={frontMatter.title} className='w-full h-full object-cover rounded-t-md z-40' />
							</div>

							<div className='px-6 md:px-12 py-8'>
								<h1 className='text-3xl md:text-5xl leading-tight font-bold'>{frontMatter.title}</h1>

								<div className='flex flex-wrap space-x-2 mt-1 mb-2'>
									{frontMatter.tags.map((tag, iTag) => (
										<div key={iTag} className='text-xs font-medium text-gray-200 px-2 rounded-md bg-purple-800 '>
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
						</div>

						<div className='mt-8'>
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

			<Footer />
		</motion.div>
	)
}

export default DetailBlog
