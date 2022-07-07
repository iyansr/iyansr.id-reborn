const siteConfig = {
	links: [
		{
			href: '/',
			label: 'HOME',
			matches: (path: string) => path === '/',
			indexs: {
				desktop: 3,
				mobile: 1,
			},
		},
		{
			href: '/blog',
			label: 'BLOG',
			matches: (path: string) => path.includes('/blog'),
			indexs: {
				desktop: 1,
				mobile: 2,
			},
		},
		{
			href: '/work',
			label: 'PORTFOLIO',
			matches: (path: string) => path === '/work',
			indexs: {
				desktop: 2,
				mobile: 3,
			},
		},
		{
			href: '/now',
			label: 'NOW',
			matches: (path: string) => path === '/now',
			indexs: {
				desktop: 4,
				mobile: 4,
			},
		},
		{
			href: '/snippets',
			label: 'SNIPPETS',
			matches: (path: string) => path.includes('/snippets'),
			indexs: {
				desktop: 5,
				mobile: 5,
			},
		},
	],
}

export default siteConfig
