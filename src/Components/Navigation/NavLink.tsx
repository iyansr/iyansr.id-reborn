import Link from 'next/link'

import { ReactNode } from 'react'
import { Url, UrlObject } from 'url'

export interface NavLinkProps {
	name: string;
	as?: string | UrlObject;
	href: Url | string;
	logo: ReactNode | string;
}

const NavLink = ({ name, as, href, logo }: NavLinkProps) => {
	return (
		<li className='nav-item-isr'>
			<Link as={as} href={href}>
				<a className='nav-link-isr'>
					{logo}
					<span className='link-text-isr'>{name}</span>
				</a>
			</Link>
		</li>
	)
}

export default NavLink
