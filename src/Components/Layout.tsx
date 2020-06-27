import React, { Fragment, ReactNode } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Navigation />
			<div className='custom-layout'>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
