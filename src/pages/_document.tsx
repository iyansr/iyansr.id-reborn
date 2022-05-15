import { GA_TRACKING_ID } from '@utils/gtag'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='id, en'>
				<Head>
					<link rel='shortcut icon' href='/favicon.ico' />
					<meta name='application-name' content='IyanSR' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='default' />
					<meta name='apple-mobile-web-app-title' content='IyanSR' />
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='msapplication-TileColor' content='#B9FBDF' />
					<meta name='msapplication-tap-highlight' content='no' />
					<meta name='theme-color' content='#B9FBDF' />
					<link rel='apple-touch-icon' href='/icon/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/icon/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/icon/favicon-16x16.png' />
					<link rel='manifest' href='/manifest.json' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<link href='/assets/fonts/stylesheet.css' rel='stylesheet' />
					{process.env.NODE_ENV === 'production' && (
						<Fragment>
							<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
							<script async defer data-website-id='f6cf2148-5ec7-492d-80e0-42efb4c2cd9e' src='https://analytics.iyansr.id/umami.js'></script>
							<script
								dangerouslySetInnerHTML={{
									__html: `
										window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());

										gtag('config', '${GA_TRACKING_ID}', {
											page_path: window.location.pathname,
										});
										`,
								}}
							/>
						</Fragment>
					)}
				</Head>
				<body className='text-gray-400 text-sm md:text-base antialiased'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
