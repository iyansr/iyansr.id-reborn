import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import * as gtag from '@utils/gtag'

import '@styles/tailwind.scss'
import '@styles/app.scss'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import 'react-medium-image-zoom/dist/styles.css'

import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', (url) => {
	NProgress.done()
	process.env.NODE_ENV === 'production' && gtag.pageview(url)
})
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, router, pageProps }: AppProps) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component key={router.route} {...pageProps} />
		</AnimatePresence>
	)
}

export default App
