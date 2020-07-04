import React, { useEffect } from 'react'
import Layout from '@components/Layout'
import Head from 'next/head'
import Meta from '@components/Meta'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import Error from 'next/error'
import { DiscussionEmbed } from 'disqus-react'
import { motion } from 'framer-motion'
import { getPostBySlug } from '@utils/api'
import { BlogType } from '@customType/blogs'

interface BlogPostProps {
	params: {
		slug: string,
	};
	blogsBySlug: BlogType;
}

const BlogPost: React.FC<BlogPostProps> = ({ params, blogsBySlug }) => {
	if (!blogsBySlug) {
		return <Error statusCode={404} />
	}

	const updateCodeSyntaxHighlighting = () => {
		document.querySelectorAll('pre code').forEach((block: any) => {
			hljs.highlightBlock(block)
		})
	}

	useEffect(() => {
		updateCodeSyntaxHighlighting()
	})

	const wpm = 200
	let textLength = blogsBySlug.content.split(' ').length
	let totalRead
	if (textLength > 0) {
		totalRead = Math.ceil(textLength / wpm)
	}

	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Layout>
				<Head>
					<title>{blogsBySlug.title} | iyansr.id</title>
					<Meta
						title={`${blogsBySlug.title} | iyansr.id`}
						description={blogsBySlug.description}
						url={`https://iyansr.id/blog/${blogsBySlug.slug}`}
						image={blogsBySlug.thumbnail.url}
					/>
					<script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></script>
				</Head>
				<div className='page-header'>
					<img className='banner' src={blogsBySlug.thumbnail.url} alt='thumbnail' />
					<div style={{ position: 'absolute', width: '80%' }}>
						<h1>{blogsBySlug.title}</h1>
						<p>
							<i>{blogsBySlug.description}</i>
						</p>
						<p className='mini-header-card'>
							<span role='img'>🗓</span>&nbsp; {moment(blogsBySlug.published_at, 'YYYY-MM-DD').format('DD MMM YYYY')} &nbsp; | &nbsp;{' '}
							<span role='img'>☕️</span>
							&nbsp; {totalRead} Min Read
						</p>
					</div>
				</div>
				<br />
				<hr className='main-line' />
				<br />

				<div className='post-wrapper'>
					<ReactMarkdown source={blogsBySlug.content} escapeHtml={false} />

					<br />
					<hr className='main-line' />
					<br />

					<DiscussionEmbed
						shortname='iyansr-1'
						config={{
							url: `https://iyansr.id/blog/${params.slug}`,
							identifier: params.slug,
							title: blogsBySlug.title,
							language: 'id_ID', //e.g. for Traditional Chinese (Taiwan)
						}}
					/>
				</div>
			</Layout>
		</motion.div>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const blogsBySlug = await getPostBySlug(params?.slug)

	return {
		props: {
			params: params,
			blogsBySlug,
		},
	}
}

export default BlogPost
