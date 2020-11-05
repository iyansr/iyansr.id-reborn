import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import { getNowContent } from '@utils/api'
import { GetStaticProps } from 'next'

const Now = ({ htmlString }: any) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta title='Now' description="What i'm doing right now ?" />
			<Header />

			<div className='container mx-auto px-6 md:px-0'>
				<div className='my-12'>
					<div className='mx-auto text-center h-40 space-y-2 flex flex-col justify-evenly'>
						<h1 className='font-bold text-3xl md:text-4xl'>🤔 What I'm Doing right now?</h1>
						{/* <h4>Projects, experiments and some stuff i've made.</h4> */}
					</div>
				</div>
				<hr />

				<div className='w-full lg:w-9/12 mx-auto mt-16'>
					<div className='bg-secondary rounded-md border border-gray-800'>
						<div className='px-6 md:px-12 py-8'>
							<div className='mt-8 post-wrapper' dangerouslySetInnerHTML={{ __html: htmlString }}></div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const htmlString = getNowContent()
	return {
		props: { htmlString },
	}
}

export default Now
