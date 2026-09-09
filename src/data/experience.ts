export interface Experience {
  company: string;
  companyUrl: string;
  dates: string;
  description: string;
  location: string;
  logo?: string;
  technologies: string[];
  title: string;
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'Forbes Predict by Axiom',
    companyUrl: 'https://axiomcasts.com/',
    dates: '2025 — Now',
    description:
      'Built a compliance and privacy portal from scratch with Firebase Auth, TanStack Router, and Cloudflare Workers + D1, automating GDPR/CCPA data subject request workflows end-to-end. Shipped an interactive prediction widget embedded across Forbes properties serving 140M+ monthly readers, plus the admin portal for prediction market operations. Designed and deployed the company landing page with Astro on Cloudflare Workers. Contributed across every layer of a TypeScript monorepo including CI/CD, Playwright E2E, and Storybook.',
    location: 'New York Based - Remote from Indonesia',
    logo: '/images/axiom.png',
    technologies: [
      'Typescript',
      'React',
      'TanStack Router',
      'Cloudflare Workers',
      'D1',
      'Astro',
      'Playwright',
      'Storybook',
    ],
    title: 'Fullstack Engineer (Contract)',
  },
  {
    company: 'Xellar / Yapp',
    companyUrl: 'https://xellar.co/',
    dates: 'Oct 2024 — Now',
    description:
      'Built Yapp.ink, an all-in-one creator platform, from zero to 40,000+ users as sole frontend owner of the creator dashboard: course builder, product and order management, wallet and revenue UI, promo campaigns, event ticketing, affiliate system, live streaming config, and Discord-integrated membership tiers. Shipped the buyer-facing storefront with multi-currency checkout including QRIS, per-creator theming, and a product analytics suite with interactive charts and CSV export. Dockerized services on ECS/EC2 behind an ALB with auto-scaling for zero-downtime releases at 1-3 deploys per day. Developed the Xellar Embedded Wallet SDK and Xellar Kit, a wallet-connection component library comparable to RainbowKit/ConnectKit adopted by hundreds of external teams.',
    location: 'Remote - Indonesia',
    logo: '/images/xellar.jpg',
    technologies: [
      'Typescript',
      'NextJS',
      'React',
      'TailwindCSS',
      'Fastify',
      'Wagmi',
      'Docker',
      'AWS',
    ],
    title: 'Senior Software Engineer',
  },
  {
    company: 'Amori',
    companyUrl: 'https://amori.app/',
    dates: 'May 2024 — October 2024',
    description:
      "Amori's AI dating coaches analyze your conversations for personalized dating insights and matchmaking. Built the React Native app working directly with the CEO on pixel-perfect implementation.",
    location: 'US Based - Remote from Indonesia',
    logo: '/images/amori.jpg',
    technologies: ['Typescript', 'React Native', 'Redux', 'Styled-Components'],
    title: 'Part Time Software Engineer Frontend',
  },
  {
    company: 'Stealth Startup',
    companyUrl: 'https://www.linkedin.com/company/stealth-startup-51/',
    dates: 'March 2024 — September 2025',
    description:
      'Built an AI financial-planning app across React Native and Next.js alongside the founder, backed by Typescript and Firebase.',
    location: 'Remote - Indonesia',
    logo: '/images/stealth.jpg',
    technologies: ['Typescript', 'React Native', 'NextJS', 'TailwindCSS'],
    title: 'Frontend Engineer',
  },
  {
    company: 'Mighty Jaxx Pte Ltd',
    companyUrl: 'https://www.mightyjaxx.com/',
    dates: 'February 2024 — May 2024',
    description:
      'Shipped crowdfunding platform features in Next.js/TypeScript for a collectibles brand. Translated UI designs to code and participated in code review to ensure code quality.',
    location: 'Singapore Based - Remote from Indonesia',
    logo: '/images/mjx.png',
    technologies: ['Typescript', 'React', 'NextJS', 'Styled-Components'],
    title: 'Part Time Frontend Developer',
  },
  {
    company: 'Playard Indonesia',
    companyUrl: 'https://www.playard.id/',
    dates: 'November 2023 — June 2024',
    description:
      'Built and published a basketball pickup-game mobile app to both the Play Store and App Store. Developed and maintained the app with React Native, Typescript, and Firebase, and performed code review to ensure code quality.',
    location: 'Remote - Indonesia',
    logo: '/images/playard.jpg',
    technologies: ['Typescript', 'React Native', 'TailwindCSS', 'Firebase'],
    title: 'Part Time Software Engineer',
  },
  {
    company: 'Artpedia NFT Marketplace',
    companyUrl: 'https://x.com/artpediahq',
    dates: 'February 2022 — October 2022',
    description:
      'Artpedia is founded by known Indonesian tech influencer, Arjuna Sky Kok. Developed the NFT Marketplace website using Next.js, connected it to smart contracts with Ether.js, and helped the backend team write NodeJS and ExpressJS code.',
    location: 'Remote - Indonesia',
    logo: '/images/artpedia.png',
    technologies: [
      'JavaScript',
      'Typescript',
      'React',
      'Web3',
      'Ether.JS',
      'NodeJS',
      'ExpressJS',
    ],
    title: 'Fullstack Developer (Part-Time)',
  },
  {
    company: 'Pintu',
    companyUrl: 'https://pintu.co.id/en',
    dates: 'August 2021 — March 2024',
    description:
      "Built and maintained features for one of Indonesia's largest crypto exchanges, serving 1 million users across mobile and web. Joined the Web3 team to ship a mobile Web3 wallet covering wallet connect flows, transaction signing, and chain support. Optimized mobile bundle size by replacing external packages with in-house solutions, authored E2E test coverage for onboarding, withdrawal, and transaction flows, and wrote functional requirement docs and implementation guides used by other engineers.",
    location: 'Remote - Indonesia',
    logo: '/images/pintu.jpg',
    technologies: [
      'JavaScript',
      'Typescript',
      'React Native',
      'Web3',
      'Wallet Connect',
      'Detox',
      'Restyle',
    ],
    title: 'Frontend Engineer Web3',
  },
  {
    company: 'DOOgether',
    companyUrl: 'https://web.doogether.id/',
    dates: 'January 2020 — August 2021',
    description:
      'Promoted to lead the frontend team within 6 months, managing 3 engineers. Built and shipped a mobile app from scratch to the App Store and Play Store, reaching 10k+ downloads. Partnered directly with C-level leadership and UI/UX on product direction and release planning.',
    location: 'Onsite - Jakarta',
    logo: '/images/doo.png',
    technologies: [
      'JavaScript',
      'Typescript',
      'React',
      'React Native',
      'Firebase',
    ],
    title: 'Front-End Engineer',
  },
];
