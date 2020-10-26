import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'

const Blog = () => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Iyan Saputra — Full Stack Developer | Blog'
				description='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a
						fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage
						project and task.'
			/>

			<div className='container mx-auto px-6 md:px-0'>
				<Header />

				<div className='my-12'>
					<div className='mx-auto text-center h-40 space-y-2 flex flex-col justify-evenly'>
						<h1 className='font-bold text-3xl md:text-4xl'>Blog</h1>
						<h4>If I tell you what happen, it won't happen.</h4>
					</div>
				</div>
				<hr />
			</div>
			<Footer />
		</motion.div>
	)
}

export default Blog
