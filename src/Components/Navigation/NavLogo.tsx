import Link from 'next/link'

import Arrow from '../../assets/svg/angle-double-right-solid.svg'

const NavLogo = () => {
	return (
		<li className='logo-isr'>
			<Link href='/'>
				<a className='nav-link-isr'>
					<span className='link-text-isr'>iyansr.id</span>
					<Arrow className='nav-logo-isr' />
				</a>
			</Link>
		</li>
	)
}

export default NavLogo
