import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

import { getPrerenderPages } from './src/lib/prerender-routes';

const siteUrl = process.env.SITE_URL ?? 'https://iyansr.id';

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
    nitro(),
  ],
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
