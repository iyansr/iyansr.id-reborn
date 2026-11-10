import {
  IconBrandAstro,
  IconBrandAws,
  IconBrandCloudflare,
  IconBrandDocker,
  IconBrandFirebase,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
} from '@tabler/icons-react';

import { Row } from '@/components/site/row';

const STACK = [
  { name: 'TypeScript', Icon: IconBrandTypescript },
  { name: 'React', Icon: IconBrandReact },
  { name: 'React Native', Icon: IconBrandReactNative },
  { name: 'Next.js', Icon: IconBrandNextjs },
  { name: 'Node.js', Icon: IconBrandNodejs },
  { name: 'Tailwind CSS', Icon: IconBrandTailwind },
  { name: 'Vite', Icon: IconBrandVite },
  { name: 'Astro', Icon: IconBrandAstro },
  { name: 'Cloudflare', Icon: IconBrandCloudflare },
  { name: 'Firebase', Icon: IconBrandFirebase },
  { name: 'Docker', Icon: IconBrandDocker },
  { name: 'AWS', Icon: IconBrandAws },
] as const;

export function Stack() {
  return (
    <Row label="Stack">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-4">
        {STACK.map(({ name, Icon }) => (
          <li key={name}>
            <span title={name} className="mn-stack-item inline-flex">
              <Icon size={20} stroke={1.5} aria-hidden />
              <span className="sr-only">{name}</span>
            </span>
          </li>
        ))}
      </ul>
    </Row>
  );
}
