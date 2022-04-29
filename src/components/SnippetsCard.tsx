import { Snippet } from '@customType/Snippets'
import React from 'react'

const SnippetsCard = ({ snippet }: { snippet: Snippet }) => {
	return (
		<div className='border-4 border-gray-800 bg-white snippet-card p-4'>
			<img src={snippet.attributes.icon.data.attributes.url} alt='Firebase' className='w-10 h-10 rounded-full border-2 border-gray-800' />
			<p className='font-bold text-gray-800 mt-2'>{snippet.attributes.title}</p>
			<p className='text-sm text-gray-700 mt-2'>{snippet.attributes.description}</p>
		</div>
	)
}

export default SnippetsCard
