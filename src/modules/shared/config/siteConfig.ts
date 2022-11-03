const siteConfig = {
  links: [
    {
      href: '/',
      label: 'Home',
      matches: (path: string) => path === '/',
    },
    {
      href: '/blog',
      label: 'Blog',
      matches: (path: string) => path.includes('/blog'),
    },
    {
      href: '/work',
      label: 'Portfolio',
      matches: (path: string) => path === '/work',
    },
    {
      href: '/now',
      label: 'Now',
      matches: (path: string) => path === '/now',
    },
    {
      href: '/snippets',
      label: 'Snippets',
      matches: (path: string) => path.includes('/snippets'),
    },
  ],
};

export default siteConfig;
