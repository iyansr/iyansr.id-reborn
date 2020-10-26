import { AppProps } from 'next/app'
import '@assets/styles/main.scss'
import '@assets/styles/app.scss'

const App = ({ Component, router, pageProps }: AppProps) => {
	return <Component key={router.route} {...pageProps} />
}

export default App
