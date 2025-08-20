/// <reference types="vite/client" />

import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';

import css from '../styles.css?url';

import '@fontsource-variable/inter/index.css';

import { AppDock } from '@/components/app-dock';
import { Provider } from '@/integrations/tanstack-query/root-provider';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        content:
          'Iyan Saputra is a software engineer with a passion for building web and mobile applications.',
      },
      {
        title: 'Iyan Saputra',
      },
      {
        property: 'og:title',
        content: 'Iyan Saputra',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://iyansr.id',
      },
      {
        property: 'og:image',
        content: 'https://avatars.githubusercontent.com/u/42711013?v=4',
      },
      {
        property: 'og:description',
        content:
          'Iyan Saputra is a software engineer with a passion for building web and mobile applications.',
      },
      {
        property: 'twitter:title',
        content: 'Iyan Saputra',
      },
      {
        property: 'twitter:description',
        content:
          'Iyan Saputra is a software engineer with a passion for building web and mobile applications.',
      },
      {
        property: 'twitter:image',
        content: 'https://avatars.githubusercontent.com/u/42711013?v=4',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:site',
        content: '@iyaaansr',
      },
      {
        property: 'twitter:creator',
        content: '@iyaaansr',
      },
    ],
    links: [
      { rel: 'stylesheet', href: css },
      {
        rel: 'icon',
        href: 'https://avatars.githubusercontent.com/u/42711013?v=4',
        type: 'image/png',
      },
    ],
    scripts: [
      {
        defer: true,
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': '01fb7ee2-6dfb-4b53-a01c-9e9e5142252e',
      },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <Provider>
          <div className="min-h-screen w-full relative bg-background">
            {/* Pearl Mist Background with Top Glow */}
            <div
              className="absolute inset-0 z-0 h-screen"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000',
              }}
            />

            <AppDock />
            <div className="container z-10 relative min-h-screen max-w-2xl mx-auto py-12 sm:py-24 px-6">
              {children}
            </div>
          </div>

          <Scripts />
        </Provider>
      </body>
    </html>
  ),
});
