import { AppProps } from 'next/app'
import '@styles/main.scss'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import { AnimatePresence } from 'framer-motion'

import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	)
}

export default MyApp
