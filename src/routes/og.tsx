import { CustomFont, ImageResponse } from '@cf-wasm/og';
import geistMono400 from '@fontsource/geist-mono/files/geist-mono-latin-400-normal.woff?inline';
import geist400 from '@fontsource/geist/files/geist-latin-400-normal.woff?inline';
import geist500 from '@fontsource/geist/files/geist-latin-500-normal.woff?inline';
import { createFileRoute } from '@tanstack/react-router';

import { OgCard } from '@/components/og-card';
import { OG_HEIGHT, OG_WIDTH } from '@/lib/og';

import avatar from '../../public/images/iyansr.png?inline';

/**
 * Bundled as data URLs rather than fetched, so a render never waits on another
 * host. Static `.woff` cuts on purpose: satori parses neither woff2 nor the
 * variable Geist the site itself loads.
 */
const font = (dataUrl: string) => () =>
  fetch(dataUrl).then((res) => res.arrayBuffer());

const FONTS = [
  new CustomFont('Geist', font(geist400), { weight: 400 }),
  new CustomFont('Geist', font(geist500), { weight: 500 }),
  new CustomFont('Geist Mono', font(geistMono400), { weight: 400 }),
];

/** `/og?eyebrow=…&title=…&description=…` — the card `ogMeta()` points at. */
export const Route = createFileRoute('/og')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const params = new URL(request.url).searchParams;
        const eyebrow = params.get('eyebrow');
        const title = params.get('title');
        const description = params.get('description');
        if (!eyebrow || !title || !description) {
          return new Response('eyebrow, title and description are required', {
            status: 400,
          });
        }

        return new ImageResponse(
          <OgCard
            eyebrow={eyebrow}
            title={title}
            description={description}
            avatar={avatar}
          />,
          {
            width: OG_WIDTH,
            height: OG_HEIGHT,
            fonts: FONTS,
            // Crawlers fetch an unfurl once and keep it; a day bounds how long
            // a redesign takes to show up.
            headers: { 'cache-control': 'public, max-age=86400' },
          }
        );
      },
    },
  },
});
