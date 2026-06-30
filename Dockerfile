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
# Dokploy injects PORT=3000 during builds, which breaks TanStack Start prerender
# (Vite preview tries localhost:3000 and gets ConnectionRefused).
RUN env -u PORT -u NITRO_PORT pnpm run build

FROM nginx:alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.output/public /usr/share/nginx/html
EXPOSE 22825
