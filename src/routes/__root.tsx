import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from '@tanstack/react-router';

import '@fontsource-variable/inter/index.css';

import { AppDock } from '@/components/app-dock';

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
    ],
  }),
  component: () => (
    <>
      <HeadContent />
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
          <Outlet />
        </div>
      </div>
    </>
  ),
});
