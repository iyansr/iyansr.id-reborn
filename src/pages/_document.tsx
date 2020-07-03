import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='id, in'>
				<Head>{process.env.NODE_ENV === 'production' && <script async src='https://www.googletagmanager.com/gtag/js?id=UA-171266287-1'></script>}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
