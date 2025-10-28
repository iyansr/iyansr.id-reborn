import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from '@tanstack/react-router';

import '@fontsource-variable/inter/index.css';

import { AppDock } from '@/components/app-dock';
import DarkVeil from '@/components/dark-veil';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'Iyan Saputra is a software engineer with a passion for building web and mobile applications.',
      },
      {
        title: 'Iyan Saputra',
      },
      {
        name: 'keywords',
        content:
          'Iyan Saputra, software engineer, web developer, mobile developer, React Native, NextJS, Typescript, TailwindCSS, Firebase, full stack developer',
      },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
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
    </>
  ),
});
