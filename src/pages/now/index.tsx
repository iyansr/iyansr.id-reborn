import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'

const Now = () => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta title='Now' description='Under construction 😋' />

			<div className='container mx-auto px-6 md:px-0'>
				<Header />
				<div className='my-12'>
					<div className='mx-auto text-center h-40 space-y-2 flex flex-col justify-evenly'>
						<h1 className='font-bold text-3xl md:text-4xl'>Under construction 😋</h1>
						{/* <h4>Projects, experiments and some stuff i've made.</h4> */}
					</div>
				</div>
				<hr />
			</div>
			<Footer />
		</motion.div>
	)
}

export default Now
