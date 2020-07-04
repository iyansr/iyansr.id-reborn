import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='id, in'>
				<Head>
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
