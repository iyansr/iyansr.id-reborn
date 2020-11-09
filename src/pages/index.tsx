import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Form from '@components/Form'

const Home = () => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Iyan Saputra — Full Stack Developer'
				description='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a
						fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage
						project and task.'
			/>

			<Header />

			<div className='container mx-auto px-6 md:px-0'>
				<div className='mb-12 mt-6'>
					<div className='relative w-48 h-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-purple-800 mx-auto'>
						<Image
							src='https://avatars3.githubusercontent.com/u/42711013?s=460&v=4'
							alt='Iyan Saputra'
							className='w-48 h-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-purple-800 mx-auto'
							layout='fill'
						/>
					</div>

					<div className='mx-auto text-center h-64 space-y-2 flex flex-col justify-evenly'>
						<div>
							<h1 className='font-bold text-3xl md:text-4xl'>I Putu Saputrayana</h1>
							<p>(Iyan Saputra)</p>
						</div>
						<h4>Depok, Indonesia</h4>
						<h4>Software Engineer, React Native Developer</h4>
						<h4 className='font-bold'>DOOgether</h4>
					</div>
				</div>
				<hr />
				<div className='mt-10 mb-12'>
					<div className='mx-auto text-center'>
						<h1 className='font-bold text-3xl md:text-4xl mb-10'>About</h1>
						<p>
							A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would
							be a fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to
							manage project and task.
						</p>
					</div>
				</div>
				<hr />
				<div className='mt-10 mb-12'>
					<div className='mx-auto text-center'>
						<h1 className='font-bold text-3xl md:text-4xl mb-10'>Contribution Chart</h1>
						<img src='https://ghchart.rshah.org/iyansr' alt='contribution chart' className='md:w-2/3 mx-auto w-full object-cover' />
					</div>
				</div>
				<hr />
				<div className='mt-10 mb-12'>
					<div className='mx-auto'>
						<h1 className='font-bold text-3xl md:text-4xl mb-10 text-center'>Contact me</h1>
						<Form />
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export default Home
