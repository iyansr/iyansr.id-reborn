import { Snippet } from '@contentlayer/generated'
import Link from 'next/link'
import React from 'react'

const SnippetsCard = ({ snippet }: { snippet: Snippet }) => {
	return (
		<Link passHref href={`/snippets/${snippet.slug}`}>
			<a>
				<div className='border-4 border-gray-800 bg-white snippet-card rounded-xl overflow-hidden p-4'>
					<img src={snippet.icon} alt='Firebase' className='w-10 h-10 rounded-full border-2 border-gray-800' />
					<p className='font-bold text-gray-800 mt-2'>{snippet.title}</p>
					<p className='text-sm text-gray-700 mt-2'>{snippet.description}</p>
				</div>
			</a>
		</Link>
	)
}

export default SnippetsCard
