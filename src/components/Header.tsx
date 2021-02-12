import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
	const router = useRouter()
	const path = router.asPath

	return (
		<div className='absolute top-0 main-header w-full z-50 hidden md:block'>
			<div className='flex justify-center items-center px-6 lg:px-6 py-8 container mx-auto gap-8'>
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
