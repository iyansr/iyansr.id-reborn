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
    company: 'Xellar',
    companyUrl: 'https://xellar.co/',
    dates: 'Oct 2024 — Now',
    description:
      'Building a JavaScript/TypeScript Embedded Wallet SDK for seamless integration. Developing a cutting-edge Web3 wallet powered by Next.js.',
    location: 'Remote - Indonesia',
    logo: '/images/xellar.jpg',
    technologies: ['Typescript', 'NextJS', 'TailwindCSS', 'Fastify', 'Wagmi'],
    title: 'Web3 Engineer',
  },
  {
    company: 'Amori',
    companyUrl: 'https://amori.app/',
    dates: 'May 2024 — October 2024',
    description:
      "Amori's AI dating coaches analyze your conversations for personalized dating insights and matchmaking. Working closely with CEO to build pixel-perfect Mobile app",
    location: 'US Based - Remote from Indonesia',
    logo: '/images/amori.jpg',
    technologies: ['Typescript', 'React Native', 'Redux', 'Styled-Components'],
    title: 'Part Time Software Engineer Frontend',
  },
  {
    company: 'Stealth Startup',
    companyUrl: 'https://www.linkedin.com/company/stealth-startup-51/',
    dates: 'March 2024 — Now',
    description:
      'Developing Mobile App with React Native, Typescript, and Firebase. Web app with NextJS, Typescript, and TailwindCSS',
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
      'Developing Crowdfunding Web Platform. Develop and maintain features with NextJS, ReactJS, Styled CSS, Typescript. Translating UI Design to code. Participate in code review to ensure code quality',
    location: 'Singapore Based - Remote from Indonesia',
    logo: '/images/mjx.png',
    technologies: ['Typescript', 'React', 'NextJS', 'Styled-Components'],
    title: 'Part Time Frontend Developer',
  },
  {
    company: 'Playard Indonesia',
    companyUrl: 'https://www.playard.id/',
    dates: 'November 2023 — May 2024',
    description:
      'Building BasketBall Pickup Game mobile App. Develop and Maintain app with React Native, Typescript, Firebase. Distributing App to the Playstore and App Store. Performing Code Review to ensure code quality',
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
      'Develop NFT Marketplace website using Next.JS, connect to smart contract using Ether.JS, help backend team write code using NodeJS and Express JS',
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
    title: 'Full Stack Developer',
  },
  {
    company: 'Pintu',
    companyUrl: 'https://pintu.co.id/en',
    dates: 'August 2021 — March 2024',
    description:
      'Develop and maintain the Pintu Mobile application, especially for Web3 Wallet. Implement new features and fix bugs to improve user experience. Develop the front-end using Typescript, React Native. Write E2E testing with Detox. Become the starting members of the Pintu Web3 Wallet project',
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
    title: 'Frontend Software Engineer',
  },
  {
    company: 'DOOgether',
    companyUrl: 'https://web.doogether.id/',
    dates: 'January 2020 — July 2021',
    description:
      'Worked closely with CTO and product team to develop and maintain the DOOgether web and mobile application. Implemented new features and fixed bugs to improve user experience. Developed the front-end using Typescript, React Native, React, and Sass.',
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
