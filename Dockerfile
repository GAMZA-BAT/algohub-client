FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY --from=builder --chown=nextjs:nextjs /app/apps/client/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=builder --chown=nextjs:nextjs /app/apps/client/public ./apps/client/public
COPY --from=builder --chown=nextjs:nextjs /app/apps/client/package.json ./apps/client/package.json

USER nextjs

EXPOSE 3001

ENV PORT=3001
CMD ["node", "server.js"]