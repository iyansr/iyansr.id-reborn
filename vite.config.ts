import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

import { getPrerenderPages } from './src/lib/prerender-routes';

const siteUrl = process.env.SITE_URL ?? 'https://iyansr.id';

// Nitro build target. Defaults to the Node server used by the Docker image;
// set NITRO_PRESET=cloudflare-module (see `pnpm build:cf`) to build a Worker.
const nitroPreset = process.env.NITRO_PRESET ?? 'node-server';
const isCloudflare = nitroPreset.startsWith('cloudflare');

// Cloudflare serves prerendered pages from its static-asset store via a
// generated `_headers` file, and it *merges* every matching rule instead of
// letting the most specific one win. A catch-all `no-cache` there would append
// itself to the hashed-asset rule and defeat it, so only the immutable rule is
// emitted; Cloudflare already serves HTML as `max-age=0, must-revalidate`.
const routeRules = {
  '/assets/**': {
    headers: {
      'cache-control': 'public, max-age=31536000, immutable',
    },
  },
  ...(isCloudflare
    ? {}
    : {
        '/**': {
          headers: {
            'cache-control': 'no-cache',
          },
        },
      }),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        concurrency: 8,
        failOnError: true,
      },
      pages: getPrerenderPages(),
      sitemap: {
        host: siteUrl,
      },
    }),
    react(),
    nitro({
      preset: nitroPreset,
      routeRules,
    }),
  ],
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: ['local.iyansr.id'],
    port: 2718,
  },
});
