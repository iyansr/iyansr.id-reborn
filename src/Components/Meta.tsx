import { Fragment } from 'react'

interface MetaProps {
	title: string;
	description: string;
	url?: string | 'https://iyansr.id/';
	image?: string | 'https://avatars3.githubusercontent.com/u/42711013?s=460&v=4';
}

const Meta = ({ title, description, url, image }: MetaProps) => {
	return (
		<Fragment>
			<meta name='title' content={title} />
			<meta name='description' content={description} />

			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={url} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={image} />
		</Fragment>
	)
}

export default Meta
