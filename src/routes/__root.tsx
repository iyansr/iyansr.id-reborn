import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { Footer } from '@/components/site/footer';
import { Nav } from '@/components/site/nav';
import siteCss from '@/components/site/site.css?url';
import { ogMeta, SITE_NAME } from '@/lib/og';
import appCss from '@/styles.css?url';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        name: 'description',
        content:
          'Iyan Saputra is a software engineer with a passion for building web and mobile applications.',
      },
      {
        title: 'Iyan Saputra - Software Engineer',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary_large_image' },
      ...ogMeta({
        path: '/',
        eyebrow: 'Senior Software Engineer',
        title: 'Hi, I\u2019m Iyan Saputra',
        description: 'Shipping React and TypeScript products end to end, remotely from Indonesia.',
      }),
      {
        name: 'keywords',
        content:
          'Iyan Saputra, software engineer, web developer, mobile developer, React Native, NextJS, Typescript, TailwindCSS, Firebase, full stack developer',
      },
      {
        name: 'theme-color',
        content: '#0a0a0a',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'stylesheet', href: siteCss },
      {
        rel: 'icon',
        href: 'https://avatars.githubusercontent.com/u/42711013?v=4',
        type: 'image/png',
      },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
    scripts: [
      {
        defer: true,
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': '01fb7ee2-6dfb-4b53-a01c-9e9e5142252e',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div id="top" className="mn">
      <div className="mn-col">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
