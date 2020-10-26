import { AppProps } from 'next/app'
import '@assets/styles/main.scss'
import '@assets/styles/app.scss'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, router, pageProps }: AppProps) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component key={router.route} {...pageProps} />
		</AnimatePresence>
	)
}

export default App
