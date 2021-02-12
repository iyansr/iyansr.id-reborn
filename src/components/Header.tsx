import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from 'react-modal'

const Header = () => {
	const router = useRouter()
	const path = router.asPath

	//prettier-ignore
	const [showMenu, setShowMenu] = useState<boolean>(false)

	return (
		<div className='absolute top-0 left-0 right-0 main-header w-full'>
			<div className='py-6 md:hidden block text-right px-8 pt-8'>
				<button className='focus:outline-none' onClick={() => setShowMenu(true)}>
					<i className='fa fa-bars text-3xl text-red-custom font-bold header-menu'></i>
				</button>
			</div>

			<Modal isOpen={showMenu} className='react-modal-custom md:hidden block'>
				<div className='text-right pt-3 pr-3'>
					<button className='focus:outline-none' onClick={() => setShowMenu(false)}>
						<i className='fa fa-times text-3xl text-red-custom font-bold header-menu'></i>
					</button>
				</div>
				<div className='flex flex-col'>
					<Link href='/'>
						{path === '/' ? (
							<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>HOME</a>
						) : (
							<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>HOME</a>
						)}
					</Link>
					<Link href='/blog'>
						{path.includes('/blog') ? (
							<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>BLOG</a>
						) : (
							<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>BLOG</a>
						)}
					</Link>
					<Link href='/work'>
						{path === '/work' ? (
							<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>PORTFOLIO</a>
						) : (
							<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>PORTFOLIO</a>
						)}
					</Link>

					<Link href='/now'>
						{path === '/now' ? (
							<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>NOW</a>
						) : (
							<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>NOW</a>
						)}
					</Link>
					<a
						href='mailto:hello@iyansr.id'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>
						CONTACT
					</a>
				</div>
			</Modal>

			<div className='hidden md:flex justify-center items-center px-6 lg:px-6 py-8 container mx-auto gap-8'>
				<Link href='/blog'>
					{path.includes('/blog') ? (
						<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>BLOG</a>
					) : (
						<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>BLOG</a>
					)}
				</Link>
				<Link href='/work'>
					{path === '/work' ? (
						<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>PORTFOLIO</a>
					) : (
						<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>PORTFOLIO</a>
					)}
				</Link>
				<Link href='/'>
					{path === '/' ? (
						<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>HOME</a>
					) : (
						<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>HOME</a>
					)}
				</Link>
				<Link href='/now'>
					{path === '/now' ? (
						<a className=' font-extrabold text-3xl text-red-custom header-link-active transition-all duration-100'>NOW</a>
					) : (
						<a className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>NOW</a>
					)}
				</Link>
				<a
					href='mailto:hello@iyansr.id'
					target='_blank'
					rel='noopener noreferrer'
					className='text-gray-800 font-extrabold text-xl hover:text-red-custom header-link transition-all duration-100'>
					CONTACT
				</a>
			</div>
		</div>
	)
}

export default Header
