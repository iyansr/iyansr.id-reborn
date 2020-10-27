import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

type BlogType = {
	htmlString: string,
	data: {
		description: string,
		title: string,
		thumbnail: string,
		keyword: string,
		tags: {
			label: string,
			color: string,
		}[],
	},
}

const DetailBlog = ({ htmlString, data }: BlogType) => {
	console.log(data)
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Link href='/blog'>
				<a>back</a>
			</Link>
			<img src={data.thumbnail} />
			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</motion.div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync('src/content/posts')
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const markdownWithMetadata = fs.readFileSync(path.join('src/content/posts', ctx.params?.slug + '.md')).toString()
	const parsedMarkdown = matter(markdownWithMetadata)
	const htmlString = marked(parsedMarkdown.content)

	return {
		props: {
			htmlString,
			data: parsedMarkdown.data,
		},
	}
}

export default DetailBlog
