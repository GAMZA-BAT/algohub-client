FROM node:20-alpine AS builder
WORKDIR /app

RUN npm install -g corepack@latest
RUN corepack prepare pnpm@10.0.0 --activate
RUN corepack enable
RUN corepack use pnpm@10.8.0

COPY . ./
RUN pnpm install --frozen-lockfile

RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY --from=builder --chown=nextjs:nextjs \
     /app/apps/client/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs \
     /app/apps/client/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs \
     /app/apps/client/public ./public

RUN npm install --omit=dev

USER nextjs
EXPOSE 3001
ENV PORT=3001

CMD ["node", "server.js"]