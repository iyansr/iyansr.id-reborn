import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='id, in'>
				<Head>
					<script data-ad-client='ca-pub-6171352055782473' async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
					<script async src='https://www.googletagmanager.com/gtag/js?id=UA-171266287-1'></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-171266287-1');`,
						}}></script>
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
