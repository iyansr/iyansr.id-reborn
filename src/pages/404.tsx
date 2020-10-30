import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Error = () => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta title='Not Found' description='Not found' />
			<Header />

			<div className='container mx-auto px-6 md:px-0'>
				<div className='my-12'>
					<div className='mx-auto text-center h-40 space-y-2 flex flex-col justify-evenly'>
						<h1 className='font-bold text-3xl md:text-4xl'>Uh oh.. you're lost 😶</h1>
						<Link href='/'>
							<a className='font-semibold'>Back to Home</a>
						</Link>
					</div>
				</div>
				<hr />
			</div>
			<Footer />
		</motion.div>
	)
}

export default Error
