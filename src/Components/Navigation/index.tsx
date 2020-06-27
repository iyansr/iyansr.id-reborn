import React from 'react'
import NavLink from './NavLink'
import NavLogo from './NavLogo'
import Branch from '../../assets/svg/code-branch-solid.svg'
import HomeLogo from '../../assets/svg/synagogue-solid.svg'
import Pen from '../../assets/svg/pen-nib-solid.svg'
import Person from '../../assets/svg/user-circle-solid.svg'

const Navigation = () => {
	return (
		<nav className='navbar-isr'>
			<ul className='navbar-nav-isr'>
				<NavLogo />
				<NavLink href='/' name='Home' logo={<HomeLogo className='nav-logo-isr' />} />
				<NavLink href='/work' name='Porfolio' logo={<Branch className='nav-logo-isr' />} />
				<NavLink href='/blog' name='Blog' logo={<Pen className='nav-logo-isr' />} />
				<NavLink href='/about' name='About' logo={<Person className='nav-logo-isr' />} />
			</ul>
		</nav>
	)
}

export default Navigation
