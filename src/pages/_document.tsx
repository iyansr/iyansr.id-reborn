import { GA_TRACKING_ID } from '@utils/gtag'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='id, en'>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap' rel='stylesheet' />
					<link href='https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap' rel='stylesheet' />
					<link
						href='https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap'
						rel='stylesheet'
					/>
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
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
						integrity='sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=='
						crossOrigin='anonymous'
					/>
					{process.env.NODE_ENV === 'production' && (
						<Fragment>
							<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
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
