import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name='title' content='Iyan Saputra — Full Stack Developer' />
					<meta
						name='description'
						content='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage project and task.'
					/>

					<meta property='og:type' content='website' />
					<meta property='og:url' content='https://iyansr.id/' />
					<meta property='og:title' content='Iyan Saputra — Full Stack Developer' />
					<meta
						property='og:description'
						content='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage project and task.'
					/>
					<meta property='og:image' content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png' />

					<meta property='twitter:card' content='summary_large_image' />
					<meta property='twitter:url' content='https://iyansr.id/' />
					<meta property='twitter:title' content='Iyan Saputra — Full Stack Developer' />
					<meta
						property='twitter:description'
						content='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage project and task.'
					/>
					<meta
						property='twitter:image'
						content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
