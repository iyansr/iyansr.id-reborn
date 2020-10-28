import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='id, en'>
				<Head>
					<link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap' rel='stylesheet' />
					<link href='https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap' rel='stylesheet' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></script>
					{process.env.NODE_ENV === 'production' && (
						<Fragment>
							<script async src='https://www.googletagmanager.com/gtag/js?id=UA-171266287-1'></script>
							<script
								dangerouslySetInnerHTML={{
									__html: `
											window.dataLayer = window.dataLayer || [];
											function gtag(){dataLayer.push(arguments);}
											gtag('js', new Date());
											gtag('config', 'UA-171266287-1');`,
								}}></script>
						</Fragment>
					)}
				</Head>
				<body className='bg-primary text-gray-500 text-sm md:text-base antialiased'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
