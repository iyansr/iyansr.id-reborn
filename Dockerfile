# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG SITE_URL=https://iyansr.id
ENV SITE_URL=$SITE_URL
RUN env -u PORT -u NITRO_PORT pnpm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=22825
ENV HOST=0.0.0.0
ENV NITRO_HOST=0.0.0.0
COPY --from=builder /app/.output ./.output
EXPOSE 22825
CMD ["node", ".output/server/index.mjs"]
