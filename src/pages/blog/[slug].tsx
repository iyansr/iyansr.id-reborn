import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import hljs from 'highlight.js'
import { motion } from 'framer-motion'
import { BlogType } from '@customType/index'
import { gePath, getSinglePost } from '@utils/api'
import Meta from '@components/Meta'
import Header from '@components/Header'
import readingTime from '@utils/readingTime'
import { format } from 'date-fns'
import Footer from '@components/Footer'
import { DiscussionEmbed } from 'disqus-react'

const DetailBlog = ({ htmlString, data }: BlogType) => {
	console.log(process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME)
	console.log(process.env.NEXT_PUBLIC_BASE_URL)
	const updateCodeSyntaxHighlighting = () => {
		document.querySelectorAll('pre code').forEach((block: any) => {
			hljs.highlightBlock(block)
		})
	}

	useEffect(() => {
		updateCodeSyntaxHighlighting()
	})

	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta title={data.title} description={data.description} keywords={data.keyword} />

			<div className='container mx-auto px-6'>
				<Header />
				<div className='mt-12 flex space-x-4'>
					<div className='w-9/12'>
						<div className='bg-secondary rounded-md border border-gray-800'>
							<img src={data.thumbnail} alt={data.title} className='w-full object-cover rounded-t-md' style={{ height: '350px' }} />
							<div className='px-12 py-8'>
								<h1 className='text-5xl font-bold'>{data.title}</h1>

								<div className='flex flex-wrap space-x-2 mt-1 mb-2'>
									{data.tags.map((tag, iTag) => (
										<div key={iTag} className='text-xs font-medium text-gray-200 px-2 rounded-md bg-purple-800 '>
											#{tag}
										</div>
									))}
								</div>

								<div className='mt-4'>
									<p className='text-sm text-gray-600'>
										<span role='img'>📅</span>&nbsp; {format(new Date(data.date), 'dd MMM yyyy')} | <span role='img'>☕️</span>
										&nbsp; {readingTime(htmlString)} Min Read
									</p>
								</div>

								<div className='mt-12 post-wrapper' dangerouslySetInnerHTML={{ __html: htmlString }} />
							</div>
						</div>

						<div className='mt-8'>
							<DiscussionEmbed
								shortname={`${process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME}`}
								config={{
									url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${data.slug}`,
									identifier: data.slug,
									title: data.title,
									language: 'id_ID', //e.g. for Traditional Chinese (Taiwan)
								}}
							/>
						</div>
					</div>

					<div className='w-3/12'>
						<p>{data.slug}</p>
					</div>
				</div>
			</div>

			<Footer />
		</motion.div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = gePath()
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const htmlString = getSinglePost(params?.slug)

	return {
		props: htmlString,
	}
}

export default DetailBlog
