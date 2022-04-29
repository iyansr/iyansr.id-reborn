import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Error404PageTemplate = () => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='bg-gray-100'>
			<Meta title='Not Found' description='Not found' />
			<Header />

			<div className='bg-yellow-200 py-24 bg-dots min-h-screen'>
				<div className='my-12'>
					<div className='mx-auto text-center h-40 space-y-2 flex flex-col justify-evenly'>
						<h1 className='font-bold text-3xl md:text-4xl text-black'>Uh oh.. you're lost 😶</h1>
						<Link href='/'>
							<a className='font-semibold'>Back to Home</a>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export default Error404PageTemplate
