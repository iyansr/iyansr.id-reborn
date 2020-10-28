import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlogType } from '@customType/index'
import { gePath, getSinglePost } from '@utils/api'

const DetailBlog = ({ htmlString, data }: BlogType) => {
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
