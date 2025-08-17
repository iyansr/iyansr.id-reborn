import { TanstackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { Home, Search, Settings } from 'lucide-react';

import '@fontsource-variable/inter/index.css';

import { Dock, DockIcon } from '@/components/magicui/dock';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="min-h-screen w-full relative bg-background">
        {/* Pearl Mist Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000',
          }}
        />

        <div className="pointer-events-none fixed inset-x-0 bottom-12 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
          <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
          <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
            <DockIcon>
              <Home size={20} />
            </DockIcon>
            <DockIcon>
              <Search size={20} />
            </DockIcon>
            <DockIcon>
              <Settings size={20} />
            </DockIcon>
          </Dock>
        </div>
        <div className="container z-10 relative min-h-screen max-w-2xl mx-auto py-12 sm:py-24 px-6">
          <Outlet />
        </div>
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
      </div>
    </>
  ),
});
