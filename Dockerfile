#syntax=docker/dockerfile:1
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache curl
RUN npm install -g corepack@latest
RUN corepack prepare pnpm@10.0.0 --activate
RUN corepack enable
RUN corepack use pnpm@10.8.0

COPY . ./
RUN pnpm install --frozen-lockfile

ARG ALGOHUB_STAGE
RUN --mount=type=secret,id=CREDENTIAL_NAME \
    --mount=type=secret,id=CREDENTIAL_PW \
    sh -c 'export CREDENTIAL_NAME=$(cat /run/secrets/CREDENTIAL_NAME) && \
           export CREDENTIAL_PW=$(cat /run/secrets/CREDENTIAL_PW) && \
           export ALGOHUB_STAGE=${ALGOHUB_STAGE} && \
           pnpm build'

FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache curl

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY --from=builder --chown=nextjs:nextjs /app/apps/client/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/apps/client/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/apps/client/public ./public

RUN npm install --omit=dev

COPY --chown=nextjs:nextjs entrypoint.sh .
RUN chmod +x ./entrypoint.sh

USER nextjs

ARG PORT_ARG=3001
EXPOSE ${PORT_ARG}
ENV PORT=${PORT_ARG}

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "server.js"]
