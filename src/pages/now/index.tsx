import React from 'react'
import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import { getNowContent } from '@utils/api'
import { GetStaticProps } from 'next'
import Link from 'next/link'

const Now = ({ htmlString }: any) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta title='Now' description="What i'm doing right now ?" />
			<div className='bg-purple-200 pb-12'>
				<Header />

				<div className='container mx-auto px-4 max-w-screen-xl'>
					<div className='py-12'>
						<div className='text-center py-12'>
							<h2 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>NOW</h2>
							<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>🤔 What I'm Doing right now?</p>
						</div>
					</div>
					<div className='w-full lg:w-9/12 mx-auto'>
						<div className='bg-gray-100 rounded-xl border-4 border-gray-800 text-black font-medium'>
							<div className='px-4 py-2 flex gap-2 bg-orange-400 rounded-t-lg border-b-4 border-gray-800'>
								<Link href='/work'>
									<a>
										<div className='h-4 w-4 rounded-full bg-red-500 '></div>
									</a>
								</Link>
								<div className='h-4 w-4 rounded-full bg-yellow-300 '></div>
								<div className='h-4 w-4 rounded-full bg-green-400 '></div>
							</div>
							<div className='px-6 md:px-12 py-8'>
								<div className='mt-8 post-wrapper' dangerouslySetInnerHTML={{ __html: htmlString }}></div>
							</div>
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
