import Head from 'next/head'

type MetaProps = {
	title: string,
	description: string,
	url?: string,
	image?: string,
	keywords?: string,
}

const defaultTitle = 'iyansr.id'
const defaultThumbnail = 'https://avatars3.githubusercontent.com/u/42711013?s=460&v=4'
const defaultURL = 'https://iyansr.id'
const defaultKeyword = 'iyansr, iyan saputra, programmer, react native developer, jasa programmer'

const Meta = ({ title = defaultTitle, description, url = defaultURL, image = defaultThumbnail, keywords = defaultKeyword }: MetaProps) => {
	return (
		<Head>
			<title>{title} | iyansr.id</title>
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
			<meta name='p:domain_verify' content='1c45cd484910f8887fdf4c4fe4332510' />

			<meta name='keywords' content={keywords} />
			<meta name='robots' content='index, follow' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='language' content='English' />
			<meta name='revisit-after' content='7 days' />
			<meta name='author' content='Iyan Saputra' />
		</Head>
	)
}

export default Meta
