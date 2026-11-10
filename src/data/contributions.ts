// Hand-picked open source pull requests worth highlighting.
// Live, complete history comes from `useOpenSourceContributions`.

export type NotableContributionStatus = 'merged' | 'open';

export interface NotableContribution {
  repo: string;
  repoUrl: string;
  number: number;
  title: string;
  url: string;
  status: NotableContributionStatus;
  date: string;
  summary: string;
}

export const NOTABLE_CONTRIBUTIONS: NotableContribution[] = [
  {
    repo: 'herdrdev/herdr-app',
    repoUrl: 'https://github.com/herdrdev/herdr-app',
    number: 816,
    title:
      'feat: font settings pick like a combobox, popups stay attached to their trigger',
    url: 'https://github.com/herdrdev/herdr-app/pull/816',
    status: 'open',
    date: '2026-11',
    summary:
      'Reworked the font picker into a searchable combobox and anchored popups to their trigger.',
  },
  {
    repo: 'herdrdev/herdr-app',
    repoUrl: 'https://github.com/herdrdev/herdr-app',
    number: 812,
    title: 'fix: scrolling the tab bar no longer races through tabs',
    url: 'https://github.com/herdrdev/herdr-app/pull/812',
    status: 'open',
    date: '2026-11',
    summary: 'Fixed wheel scrolling on the tab bar skipping across tabs.',
  },
  {
    repo: 'fractalboxdev/flare-dispatch',
    repoUrl: 'https://github.com/fractalboxdev/flare-dispatch',
    number: 115,
    title:
      'feat(demo-agent): port the product-demo agent CLI into the sandbox image',
    url: 'https://github.com/fractalboxdev/flare-dispatch/pull/115',
    status: 'merged',
    date: '2026-08',
    summary:
      'Ported the product-demo agent CLI into the Cloudflare sandbox container image.',
  },
  {
    repo: 'fractalboxdev/flare-dispatch',
    repoUrl: 'https://github.com/fractalboxdev/flare-dispatch',
    number: 40,
    title: 'feat(dispatcher): dashboard pagination + filtering',
    url: 'https://github.com/fractalboxdev/flare-dispatch/pull/40',
    status: 'merged',
    date: '2026-08',
    summary: 'Added pagination and filtering to the dispatcher dashboard.',
  },
  {
    repo: 'fractalboxdev/flare-dispatch',
    repoUrl: 'https://github.com/fractalboxdev/flare-dispatch',
    number: 22,
    title:
      'fix(pr-review): enforce a configurable cooldown window via IDEMPOTENCY_KV',
    url: 'https://github.com/fractalboxdev/flare-dispatch/pull/22',
    status: 'merged',
    date: '2026-07',
    summary:
      'Stopped duplicate PR reviews with a KV-backed, configurable cooldown window.',
  },
  {
    repo: 'agustinusnathaniel/maestria',
    repoUrl: 'https://github.com/agustinusnathaniel/maestria',
    number: 92,
    title: 'feat(cursor): add Cursor IDE and CLI plugin package',
    url: 'https://github.com/agustinusnathaniel/maestria/pull/92',
    status: 'merged',
    date: '2026-07',
    summary: 'Shipped a plugin package for Cursor IDE and the Cursor CLI.',
  },
  {
    repo: 'fuma-nama/fumadocs',
    repoUrl: 'https://github.com/fuma-nama/fumadocs',
    number: 1340,
    title: 'Docs: Fix Typo in `Tab` Docs',
    url: 'https://github.com/fuma-nama/fumadocs/pull/1340',
    status: 'merged',
    date: '2025-01',
    summary: 'Docs fix for the Tabs component in Fumadocs.',
  },
  {
    repo: 'fractalboxdev/ddevkit',
    repoUrl: 'https://github.com/fractalboxdev/ddevkit',
    number: 38,
    title: 'feat: Privy Hello World',
    url: 'https://github.com/fractalboxdev/ddevkit/pull/38',
    status: 'merged',
    date: '2024-12',
    summary: 'Added the Privy embedded-wallet starter to the onchain dev kit.',
  },
  {
    repo: 'contentlayerdev/contentlayer',
    repoUrl: 'https://github.com/contentlayerdev/contentlayer',
    number: 221,
    title: 'Add iyansr.id to README',
    url: 'https://github.com/contentlayerdev/contentlayer/pull/221',
    status: 'merged',
    date: '2022-05',
    summary: 'Listed this site among Contentlayer showcase projects.',
  },
];
