# AGENTS.md

## Cursor Cloud specific instructions

This is a static frontend SPA: a personal portfolio/blog built with Vite + React 19 + TanStack Router (file-based routing in `src/routes`) + Tailwind CSS v4. There is no backend; blog posts are bundled content. The package manager is **Bun** (see `bun.lock`).

Standard scripts live in `package.json`; run them with Bun (e.g. `bun run dev`). Notes:

- `bun run dev` serves on port `2718` (`bun run start` uses port `3000`).
- `vite.config.ts` only allows the extra host `local.iyansr.id`; use `localhost` (or add `--host`) when testing locally.
- `bun run lint` (Biome) currently reports pre-existing warnings and one `noExplicitAny` error in `src/lib/post.ts` / `src/routes/blog/$slug.tsx`. This is unrelated to environment setup — do not "fix" it as part of setup.
- `bun run test` (Vitest) exits non-zero with "No test files found" because the template has no tests yet; this is expected, not a setup failure.
- `bun run build` runs `vite build && tsc` and succeeds (only a chunk-size warning).
