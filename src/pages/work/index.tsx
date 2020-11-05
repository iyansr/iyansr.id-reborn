import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
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

			<div className='container mx-auto px-6 md:px-0'>
				<div className='my-12'>
					<div className='mx-auto text-center h-40 space-y-2 flex flex-col justify-evenly'>
						<h1 className='font-bold text-3xl md:text-4xl'>💼 Portfolio</h1>
						<h4>Projects, experiments and some stuff i've made.</h4>
					</div>
				</div>
				<hr />

				<div className='mt-12'>
					<div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{workData.map((file, index) => (
							<WorkCard {...file} key={index} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export default Blog
