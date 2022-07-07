import siteConfig from '@/config'
import { sortLinks } from '@/utils'
import type { linkProps } from '@types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

export const Header = () => {
	const { asPath } = useRouter()

	const { desktopLinks, mobileLinks } = useMemo(() => {
		return {
			desktopLinks: sortLinks(siteConfig.links, 'desktop'),
			mobileLinks: sortLinks(siteConfig.links, 'mobile'),
		}
	}, [])

	return (
		<header className='absolute inset-x-0 top-0 z-50 w-full'>
			<DesktopHeader
				links={desktopLinks}
				asPath={asPath}
			/>
			<MobileHeader
				links={mobileLinks}
				asPath={asPath}
			/>
		</header>
	)
}

const DesktopHeader = ({ links, asPath }: { links: linkProps[]; asPath: string }) => {
	return (
		<ul className='container mx-auto hidden items-center justify-center gap-8 px-6 py-8 md:flex lg:px-6'>
			{links.map(({ href, label, matches }: linkProps) => {
				const isPath = matches(asPath)

				return (
					<li key={label}>
						<Link
							href={href}
							className={`font-extrabold capitalize transition-all duration-100 ${
								isPath ? 'header-link-active text-3xl text-red-custom' : 'header-link text-xl text-gray-800 hover:text-red-custom'
							}`}>
							{label}
						</Link>
					</li>
				)
			})}

			<li>
				<a
					href='mailto:hello@iyansr.id'
					target='_blank'
					rel='noopener noreferrer'
					className='header-link text-xl font-extrabold text-gray-800 transition-all duration-100 hover:text-red-custom'>
					CONTACT
				</a>
			</li>
		</ul>
	)
}

const MobileHeader = ({ links, asPath }: { links: linkProps[]; asPath: string }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	return (
		<div className='flex w-full px-8 pt-8 md:hidden'>
			<Hamburger setState={setShowMenu} />

			{showMenu && (
				<>
					<div
						className='fixed inset-0 h-full w-full bg-white/80'
						onClick={() => setShowMenu(false)}
					/>

					<MobileLinks
						asPath={asPath}
						links={links}
						setState={setShowMenu}
					/>
				</>
			)}
		</div>
	)
}

const MobileLinks = ({ links, asPath, setState }: { links: linkProps[]; asPath: string; setState: any }) => {
	return (
		<div className='react-modal-custom block h-full w-full md:hidden'>
			<ul className='mt-9 flex flex-col'>
				{links.map(({ href, label, matches }) => {
					const isPath = matches(asPath)

					return (
						<li key={label}>
							<Link
								href={href}
								className={`font-extrabold capitalize transition-all duration-100 ${
									isPath ? 'header-link-active text-3xl text-red-custom' : 'header-link text-xl text-gray-800 hover:text-red-custom'
								}`}
								onClick={() => setState(false)}>
								{label}
							</Link>
						</li>
					)
				})}

				<li>
					<a
						href='mailto:hello@iyansr.id'
						target='_blank'
						rel='noopener noreferrer'
						className='header-link text-xl font-extrabold text-gray-800 transition-all duration-100 hover:text-red-custom'>
						CONTACT
					</a>
				</li>
			</ul>
		</div>
	)
}

const Hamburger = ({ setState }: { setState: any }) => {
	return (
		<button
			className='z-10 ml-auto w-max focus:outline-none'
			onClick={() => setState((val: boolean) => !val)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='header-menu h-5 w-5 text-3xl font-bold text-red-custom'
				viewBox='0 0 20 20'
				fill='currentColor'>
				<path
					fillRule='evenodd'
					d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
					clipRule='evenodd'
				/>
			</svg>
		</button>
	)
}
