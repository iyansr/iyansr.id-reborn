import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import WorkCard from '@components/WorkCard'
import workData from '@content/portfolio.json'

const Blog = () => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Portfolio'
				description="'Projects, experiments and some stuff i've made.'"
				keywords='iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog, iyan saputra portfolio, iyan saputra work, iyansr work'
			/>
			<Header />

			<main className='bg-purple-200 overflow-hidden py-24 bg-dots'>
				<div className='container mx-auto max-w-screen-xl'>
					<div className='text-center py-12'>
						<h2 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>PORTFOLIO</h2>
						<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>Projects, experiments and some stuff i've made.</p>
					</div>

					<div className='pb-12 pt-6 md:pb-24 md:pt-12'>
						<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 md:px-4'>
							{workData.map((file, index) => (
								<WorkCard {...file} key={index} />
							))}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</motion.div>
	)
}

export default Blog
