import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import * as gtag from '@utils/gtag'

import '@styles/tailwind.scss'
import '@styles/app.scss'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import 'react-medium-image-zoom/dist/styles.css'
import { MDXProvider } from '@mdx-js/react'

import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import MDXComponent from '@components/MDXComponent'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', (url) => {
	NProgress.done()
	gtag.pageview(url)
})
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, router, pageProps }: AppProps) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<MDXProvider components={MDXComponent}>
				<Component key={router.route} {...pageProps} />
			</MDXProvider>
		</AnimatePresence>
	)
}

export default App
