import type { ReactNode } from 'react';
import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';

import appCss from '@/styles.css?url';

import { AppDock } from '@/components/app-dock';
import DarkVeil from '@/components/dark-veil';

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
      {
        name: 'keywords',
        content:
          'Iyan Saputra, software engineer, web developer, mobile developer, React Native, NextJS, Typescript, TailwindCSS, Firebase, full stack developer',
      },
      {
        name: 'theme-color',
        content: '#000000',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
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
    <html lang="en" className="dark">
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
    <div className="min-h-screen w-full relative">
      <div className="fixed inset-0 -z-10 opacity-75">
        <DarkVeil
          warpAmount={0.4}
          scanlineIntensity={0.25}
          scanlineFrequency={1}
          speed={0.5}
        />
      </div>

      <AppDock />
      <div className="container z-10 relative min-h-screen max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <Outlet />
      </div>
    </div>
  );
}
