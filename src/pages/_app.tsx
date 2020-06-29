import { AppProps } from 'next/app'
import '../styles/main.scss'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import mixpanel from 'mixpanel-browser'
import { Fragment } from 'react'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
mixpanel.init(`${process.env.NEXT_PUBLIC_MIXPANEL_TOKEN}`, { track_pageview: true })

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<script async src='//platform.twitter.com/widgets.js'></script>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
