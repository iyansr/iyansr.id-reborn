import { GithubIcon, GlobeIcon } from 'lucide-react';

export const PROJECTS = [
  {
    title: 'Forbes Predict',
    href: 'https://predict.forbes.com/',
    dates: '2025 - Present',
    active: true,
    openSource: false,
    description:
      'Prediction markets for the news Forbes readers are already reading. Built the interactive prediction widget embedded across Forbes properties serving 140M+ monthly readers, plus the admin portal for market operations.',
    technologies: ['Typescript', 'React', 'TanStack Router', 'Cloudflare Workers'],
    links: [
      {
        type: 'Website',
        href: 'https://predict.forbes.com/',
        icon: <GlobeIcon className="size-3" />,
      },
    ],
    image: '/images/forbes-predict.jpg',
    video: '',
  },
  {
    title: 'Forbes Predict: 2026 U.S. Midterms',
    href: 'https://predict.forbes.com/category/midterms/',
    dates: '2026',
    active: true,
    openSource: false,
    description:
      'Live election hub for the 2026 midterms. Senate, House and Governor race maps where readers make their call on each race and markets settle as results come in.',
    technologies: ['Typescript', 'React'],
    links: [
      {
        type: 'Website',
        href: 'https://predict.forbes.com/category/midterms/',
        icon: <GlobeIcon className="size-3" />,
      },
    ],
    image: '/images/forbes-midterms.jpg',
    video: '',
  },
  {
    title: 'Nodus Studio',
    href: 'https://usenodus.app/',
    dates: '2025 - Present',
    active: true,
    openSource: false,
    description:
      'Building from scratch a free Windows desktop app for gamers. Always-on background capture banks the last 30s to 2m with one hotkey, then a node-based editor reframes clips into vertical 9:16 video for TikTok, Reels, and Shorts.',
    technologies: [
      'Tauri V2',
      'React',
      'Typescript',
      'Hono',
      'Cloudflare Workers',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://usenodus.app/',
        icon: <GlobeIcon className="size-3" />,
      },
    ],
    image: '/images/nodus.png',
    video: '',
  },
  {
    title: 'Imagined',
    href: 'https://imagined.directory',
    dates: 'June 2025 - Present',
    active: true,
    openSource: true,
    description:
      'Developing from scratch web app to Find and share the best prompts for AI image generation. Browse thousands of creative prompts from the community and create stunning visuals.',
    technologies: [
      'Next.js',
      'TRPC',
      'Cloudflare Workers',
      'Typescript',
      'React',
      'React Query',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://imagined.directory',
        icon: <GlobeIcon className="size-3" />,
      },
      {
        type: 'Repository',
        href: 'https://github.com/iyansr/imagined',
        icon: <GithubIcon className="size-3" />,
      },
    ],
    image: '/images/imagined.jpg',
    video: '',
  },
  {
    title: 'Yapp',
    href: 'https://yapp.ink',
    dates: 'June 2025 - Present',
    active: true,
    openSource: false,
    description:
      'Developing from scratch the all in one payment solutions for creators. Working on both user-facing platform and creator platform',
    technologies: [
      'Next.js',
      'Typescript',
      'React',
      'React Query',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://yapp.ink',
        icon: <GlobeIcon className="size-3" />,
      },
      {
        type: 'Creator Platform',
        href: 'https://creators.yapp.ink',
        icon: <GlobeIcon className="size-3" />,
      },
    ],
    image: '/images/yapp.jpg',
    video: '',
  },
  {
    title: 'Xellar Kit',
    href: 'https://github.com/Xellar-Protocol/xellar-kit',
    dates: 'March 2025 - Present',
    active: true,
    openSource: true,
    description:
      'Create and develop open-source Web3 connectors that enable seamless integration with Xellar Passport and various other wallets, including MetaMask (injector) and WalletConnect.',
    technologies: [
      'Vite',
      'Typescript',
      'React',
      'React Query',
      'Styled Components',
    ],
    links: [
      {
        type: 'Repository',
        href: 'https://github.com/Xellar-Protocol/xellar-kit',
        icon: <GithubIcon className="size-3" />,
      },
    ],
    image:
      'https://opengraph.githubassets.com/dd43e53a459f8eac8de90504814b495da41d99953a03ce5c446416d322583587/Xellar-Protocol/xellar-kit',
    video: '',
  },
  {
    title: 'Xellar Embedded Wallet SDK',
    href: 'https://github.com/Xellar-Protocol/ew-sdk',
    dates: 'March 2025 - Present',
    active: true,
    openSource: true,
    description:
      "Create and Develop SDK for Xellar's Embedded Wallets, allowing developers to easily integrate Xellar's Embedded Wallets into their applications.",
    technologies: ['Typescript', 'Node.js'],
    links: [
      {
        type: 'Repository',
        href: 'https://github.com/Xellar-Protocol/ew-sdk',
        icon: <GithubIcon className="size-3" />,
      },
    ],
    image:
      'https://opengraph.githubassets.com/b84bea45f02c09104cb15eecd8d1a415d64e05fc752f7b3bb0014416c5ada9e8/Xellar-Protocol/ew-sdk',
    video: '',
  },
];
