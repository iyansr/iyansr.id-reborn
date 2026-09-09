# AGENTS.md

## Cursor Cloud specific instructions

This is a static frontend site built with Vite + React 19 + TanStack Start (file-based routing in `src/routes`) + Tailwind CSS v4. There is no backend; blog posts are bundled content. The package manager is **pnpm** (see `pnpm-lock.yaml`).

Standard scripts live in `package.json`; run them with pnpm (e.g. `pnpm dev`). Notes:

- `pnpm dev` serves on port `2718` (`pnpm start` runs the Nitro server on port `22825`).
- `pnpm build:cf` / `pnpm deploy` build the Cloudflare Workers target (`NITRO_PRESET=cloudflare-module`) instead of the default `node-server` preset; see "Deploying to Cloudflare Workers" in the README.
- Production Docker runs `node .output/server/index.mjs` directly on port `22825` (`HOST=0.0.0.0`).
- `vite.config.ts` only allows the extra host `local.iyansr.id`; use `localhost` (or add `--host`) when testing locally.
- `pnpm lint` (oxlint) currently reports pre-existing warnings plus two errors (`unicorn/no-single-promise-in-promise-methods` in `src/hooks/opensource-contrib.ts`, `jsx-a11y/control-has-associated-label` in `src/components/experience-card.tsx`). This is unrelated to environment setup — do not "fix" it as part of setup.
- `pnpm test` (Vitest) exits non-zero with "No test files found" because the template has no tests yet; this is expected, not a setup failure.
- `pnpm build` runs `vite build && tsc --noEmit` and succeeds (only a chunk-size warning).
