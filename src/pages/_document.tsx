import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang='id, en'>
			<Head>
				{/* Google Fonts */}
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800;900&display=swap'
					rel='stylesheet'
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap'
					rel='stylesheet'
				/>

				{/* preconnect to analytics domin */}
				<link
					rel='preconnect'
					href='https://analytics.iyansr.id'
				/>

				{/* Meta Data */}
				<link
					rel='shortcut icon'
					href='/favicon.ico'
				/>
				<meta
					name='application-name'
					content='IyanSR'
				/>
				<meta
					name='apple-mobile-web-app-capable'
					content='yes'
				/>
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='default'
				/>
				<meta
					name='apple-mobile-web-app-title'
					content='IyanSR'
				/>
				<meta
					name='format-detection'
					content='telephone=no'
				/>
				<meta
					name='mobile-web-app-capable'
					content='yes'
				/>
				<meta
					name='msapplication-TileColor'
					content='#B9FBDF'
				/>
				<meta
					name='msapplication-tap-highlight'
					content='no'
				/>
				<meta
					name='theme-color'
					content='#B9FBDF'
				/>
				<link
					rel='apple-touch-icon'
					href='/icon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/icon/favicon-16x16.png'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'
				/>

				{process.env.NODE_ENV === 'production' && (
					<Script
						id='umami-analytics'
						strategy='lazyOnload'
						async
						defer
						data-website-id='f6cf2148-5ec7-492d-80e0-42efb4c2cd9e'
						src='https://analytics.iyansr.id/umami.js'
					/>
				)}
			</Head>

			<body className='text-sm text-gray-400 antialiased md:text-base'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
