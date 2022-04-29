import React from 'react'
import ReactMarkdown from 'react-markdown'
import Zoom from 'react-medium-image-zoom'

export const CustomImage = (props: any) => {
	return (
		<Zoom>
			<img {...props} />
		</Zoom>
	)
}

const Markdown = ({ source }: { source: string }) => {
	return (
		<ReactMarkdown
			components={{
				img: ({ node, ...props }) => <CustomImage {...props} />,
			}}>
			{source}
		</ReactMarkdown>
	)
}

export default Markdown
