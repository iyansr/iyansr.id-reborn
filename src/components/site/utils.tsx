import {
  IconBrandAstro,
  IconBrandAws,
  IconBrandCloudflare,
  IconBrandDocker,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandStorybook,
  IconBrandTailwind,
  IconBrandTypescript,
  IconWorld,
  type TablerIcon,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';

import { figure } from './classes';

export const HIRE_URL = 'mailto:hello@iyansr.id';
export const GITHUB_URL = 'https://github.com/iyansr';
export const RESUME_URL = `/resume/${encodeURIComponent('I Putu Saputrayana - Senior FE.pdf')}`;

/** Replace em/en dashes in data strings with a plain hyphen. */
export const clean = (value: string) => value.replace(/\s*[\u2013\u2014]\s*/g, ' - ');

const FIGURE_RE = /(140M\+ monthly readers|40,000\+ users|1 million users|10k\+ downloads)/g;

/** Wraps known headline figures in an accent highlight. */
export function highlightFigures(text: string): ReactNode[] {
  return text
    .split(FIGURE_RE)
    .map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className={figure}>
          {part}
        </span>
      ) : (
        part
      )
    );
}

/** One condensed sentence: the one carrying a headline figure, else the first. */
export function previewOf(description: string) {
  // Split on sentence ends only (". " + capital), never on dots inside names like "Yapp.ink".
  const parts = description.split(/(?<=\.)\s+(?=[A-Z])/);
  return parts.find((s) => new RegExp(FIGURE_RE.source).test(s)) ?? parts[0];
}

/** First sentence of a description, without the trailing period. */
export const firstSentence = (description: string) =>
  description.split(/(?<=\.)\s+(?=[A-Z])/)[0].replace(/\.$/, '');

export const TECH_ICON: Record<string, TablerIcon> = {
  typescript: IconBrandTypescript,
  javascript: IconBrandJavascript,
  react: IconBrandReact,
  'react native': IconBrandReactNative,
  nextjs: IconBrandNextjs,
  tailwindcss: IconBrandTailwind,
  docker: IconBrandDocker,
  aws: IconBrandAws,
  firebase: IconBrandFirebase,
  astro: IconBrandAstro,
  storybook: IconBrandStorybook,
  redux: IconBrandRedux,
  nodejs: IconBrandNodejs,
  'cloudflare workers': IconBrandCloudflare,
};

export const LINK_ICON: Record<string, TablerIcon> = {
  Website: IconWorld,
  'Creator Platform': IconWorld,
  Repository: IconBrandGithub,
};

/** Deterministic date label (UTC), identical on server prerender and client. */
export function formatDay(date: string, month: 'short' | 'long' = 'short') {
  return new Date(date.includes('T') ? date : `${date}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month,
    year: 'numeric',
    timeZone: 'UTC',
  });
}
