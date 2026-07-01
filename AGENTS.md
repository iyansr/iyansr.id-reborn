# AGENTS.md

## Cursor Cloud specific instructions

This is a static frontend site built with Vite + React 19 + TanStack Start (file-based routing in `src/routes`) + Tailwind CSS v4. There is no backend; blog posts are bundled content. The package manager is **pnpm** (see `pnpm-lock.yaml`).

Standard scripts live in `package.json`; run them with pnpm (e.g. `pnpm dev`). Notes:

- `pnpm dev` serves on port `2718` (`pnpm start` runs the production server via PM2 on port `22825`).
- Production Docker image runs the Nitro Node server with **PM2** on port `22825`.
- `vite.config.ts` only allows the extra host `local.iyansr.id`; use `localhost` (or add `--host`) when testing locally.
- `pnpm lint` (Biome) currently reports pre-existing warnings and one `noExplicitAny` error in `src/lib/post.ts` / `src/routes/blog/$slug.tsx`. This is unrelated to environment setup — do not "fix" it as part of setup.
- `pnpm test` (Vitest) exits non-zero with "No test files found" because the template has no tests yet; this is expected, not a setup failure.
- `pnpm build` runs `vite build && tsc --noEmit` and succeeds (only a chunk-size warning).
