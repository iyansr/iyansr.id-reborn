import { AppProps } from 'next/app'
import '@assets/styles/main.scss'
import '@assets/styles/app.scss'
import { AnimatePresence } from 'framer-motion'

import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, router, pageProps }: AppProps) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component key={router.route} {...pageProps} />
		</AnimatePresence>
	)
}

export default App
