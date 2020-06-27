import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className='isr--footer'>
			<span>
				© 2020 iyansr.id built with{' '}
				<span role='img' aria-label='emoji'>
					🔥
				</span>{' '}
				by{' '}
				<Link href='/'>
					<a>Iyan Saputra</a>
				</Link>
			</span>
		</div>
	)
}

export default Footer
