import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<div className='sticky top-0 main-header w-full z-50 '>
			<div className='flex justify-between items-center px-6 lg:px-6 py-4 container mx-auto'>
				<div>
					<Link href='/' passHref>
						<a>
							<h1 className='text-purple-700 hover:text-purple-600 transition duration-200 main-logo text-xl'>Iyansr.id</h1>
						</a>
					</Link>
				</div>
				<div className='relative'>
					<svg
						className='w-8 h-8 text-purple-700 cursor-pointer'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						onClick={() => setShowMenu((prev) => !prev)}>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
					</svg>

					{showMenu && (
						<motion.div
							exit={{ opacity: 0 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
							className='absolute bg-secondary text-left right-0 rounded-md shadow-lg z-50'>
							<Link href='/blog' passHref>
								<a onClick={() => setShowMenu(false)}>
									<div className='w-64 px-4 py-2 hover:bg-purple-700 transition duration-200 text-gray-500 rounded-t-md'>Blog</div>
								</a>
							</Link>
							<Link href='/work' passHref>
								<a onClick={() => setShowMenu(false)}>
									<div className='w-64 px-4 py-2 hover:bg-purple-700 transition duration-200 text-gray-500'>Portfolio</div>
								</a>
							</Link>
							<Link href='/now' passHref>
								<a onClick={() => setShowMenu(false)}>
									<div className='w-64 px-4 py-2 hover:bg-purple-700 transition duration-200 text-gray-500 rounded-b-md'>Now</div>
								</a>
							</Link>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
