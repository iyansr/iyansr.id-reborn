export const SITE_NAME = 'Iyan Saputra';
export const SITE_URL = 'https://iyansr.id';

export type OgCard = {
  /** The small accent label above the title: what kind of page this is. */
  eyebrow: string;
  title: string;
  description: string;
};

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/**
 * The Open Graph / Twitter tags for a page, with the image pointing at the
 * card `/og` renders. Every field rides in the query string, so the card is
 * stateless and cacheable by URL.
 */
export function ogMeta(card: OgCard & { path: string }) {
  const { path, ...fields } = card;
  const image = `${SITE_URL}/og?${new URLSearchParams(fields)}`;
  return [
    { property: 'og:title', content: card.title },
    { property: 'og:description', content: card.description },
    { property: 'og:url', content: `${SITE_URL}${path}` },
    { property: 'og:image', content: image },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: String(OG_WIDTH) },
    { property: 'og:image:height', content: String(OG_HEIGHT) },
    { property: 'og:image:alt', content: card.title },
    { name: 'twitter:title', content: card.title },
    { name: 'twitter:description', content: card.description },
    { name: 'twitter:image', content: image },
  ];
}
