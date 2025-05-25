FROM node:20-alpine

WORKDIR /app

RUN npm install -g corepack@latest
RUN corepack prepare pnpm@10.0.0 --activate
RUN corepack enable
RUN corepack use pnpm@10.8.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
COPY apps/remote-storage/package.json /app/apps/remote-storage/package.json

RUN pnpm install --frozen-lockfile

COPY . /app
RUN pnpm --filter=algohub-remote-storage build

ENV NODE_ENV=production
ENV PORT=8000

EXPOSE 8000

CMD ["pnpm", "--filter=algohub-remote-storage", "start"]