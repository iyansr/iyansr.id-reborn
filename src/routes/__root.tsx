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
import { THEME_BOOT_SCRIPT } from '@/components/site/theme';
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
    // The boot script sets data-theme before hydration, so React must not flag it.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
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
    <div
      id="top"
      className="min-h-dvh overflow-x-clip bg-bg font-sans text-[14px] leading-[1.6] text-fg antialiased selection:bg-accent selection:text-[#0a0a0a]"
    >
      {/* One narrow column framed by two full-height hairlines. */}
      <div className="relative mx-auto w-full max-w-240 px-[clamp(1.25rem,4vw,2.5rem)] before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-hair after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-hair">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
