import { AppProps } from 'next/app'
import '../styles/main.scss'
import NextNprogress from 'nextjs-progressbar'
import { Fragment } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<NextNprogress color='#df49a6' startPosition='0.3' stopDelayMs='200' height='3' />
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
