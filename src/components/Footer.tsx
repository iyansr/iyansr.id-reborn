import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className='mx-auto container text-center py-8 text-xs bg-gray-100'>
			<span className='text-gray-900'>
				© 2020 iyansr.id built with{' '}
				<span role='img' aria-label='emoji'>
					🔥
				</span>{' '}
				by{' '}
				<Link href='/'>
					<a className='text-red-custom font-bold'>Iyan Saputra</a>
				</Link>
			</span>
			<div className='flex justify-center mt-6 space-x-4'>
				<a href='http://facebook.com/iyan.scout' target='_blank' rel='noopener noreferrer' className='text-gray-900'>
					<div className='h-6 w-6 flex justify-center items-center rounded-sm'>
						<span>
							<i className='fab fa-facebook-f text-xl'></i>
						</span>
					</div>
				</a>
				<a href='http://instagram.com/iyan_saputraaa' target='_blank' rel='noopener noreferrer' className='text-gray-900'>
					<div className='h-6 w-6 flex justify-center items-center rounded-sm'>
						<span>
							<i className='fab fa-instagram text-xl'></i>
						</span>
					</div>
				</a>
				<a href='https://www.linkedin.com/in/iyansr/' target='_blank' rel='noopener noreferrer' className='text-gray-900'>
					<div className='h-6 w-6 flex justify-center items-center rounded-sm'>
						<span>
							<i className='fab fa-linkedin-in text-xl'></i>
						</span>
					</div>
				</a>
				<a href='http://github.com/iyansr' target='_blank' rel='noopener noreferrer' className='text-gray-900'>
					<div className='h-6 w-6 flex justify-center items-center rounded-sm'>
						<span>
							<i className='fab fa-github-alt text-xl'></i>
						</span>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Footer
