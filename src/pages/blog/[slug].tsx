import React, { useEffect } from 'react'
import { client } from '../../../utils/contentful'
import { BlogEntries } from '../../types/iyansr'
import Layout from '../../Components/Layout'
import Head from 'next/head'
import Meta from '../../Components/Meta'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import Error from 'next/error'
import { DiscussionEmbed } from 'disqus-react'

interface BlogPostProps {
	entry: BlogEntries;
	params: {
		slug: string,
	};
}

const BlogPost = ({ entry, params }: BlogPostProps) => {
	if (!entry) {
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
	let textLength = entry.fields.content.split(' ').length
	let totalRead
	if (textLength > 0) {
		totalRead = Math.ceil(textLength / wpm)
	}

	return (
		<Layout>
			<Head>
				<title>{entry.fields.title} | iyansr.id</title>
				<Meta
					title={`${entry.fields.title} | iyansr.id`}
					description={entry.fields.preview}
					url={`https://iyansr.id/blog/${entry.fields.slug}`}
					image={entry.fields.image.fields.file.url}
				/>
			</Head>
			<div className='page-header'>
				<img className='banner' src={entry.fields.image.fields.file.url} alt='thumbnail' />
				<div style={{ position: 'absolute', width: '80%' }}>
					<h1>{entry.fields.title}</h1>
					<p>
						<i>{entry.fields.preview}</i>
					</p>
					<p className='mini-header-card'>
						<span role='img'>🗓</span>&nbsp; {moment(entry.sys.createdAt).format('DD MMM YYYY')} &nbsp; | &nbsp; <span role='img'>☕️</span>
						&nbsp; {totalRead} Min Read
					</p>
				</div>
			</div>
			<br />
			<hr className='main-line' />
			<br />

			<div className='post-wrapper'>
				<ReactMarkdown source={entry.fields.content} escapeHtml={false} />
				<br />
				<hr className='main-line' />
				<br />

				<DiscussionEmbed
					shortname='iyansr-1'
					config={{
						url: `https://iyansr.id/blog/${params.slug}`,
						identifier: params.slug,
						title: entry.fields.title,
						language: 'id_ID', //e.g. for Traditional Chinese (Taiwan)
					}}
				/>
			</div>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const rawEntry = await client.getEntries({
		content_type: 'article',
		'fields.slug[in]': params?.slug,
	})

	return {
		props: {
			entry: rawEntry.items[0] || null,
			params: params,
		},
	}
}

export default BlogPost
