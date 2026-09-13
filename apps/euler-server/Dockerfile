# Base
FROM node:lts-alpine AS base

WORKDIR /usr/src/app

RUN npm install -g pnpm@12

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/euler-client/package.json ./apps/euler-client/
COPY apps/euler-server/package.json ./apps/euler-server/

RUN pnpm install --frozen-lockfile --filter project-euler-server...

COPY apps/euler-server ./apps/euler-server

# Build
FROM base AS build

WORKDIR /usr/src/app/apps/euler-server

RUN pnpm run lint:ci && \
    pnpm run test && \
    pnpm run build

# Deploy stage: produces isolated production node_modules
FROM base AS pruned

WORKDIR /usr/src/app

RUN pnpm --filter project-euler-server --prod deploy /usr/src/pruned

# Prod
FROM node:lts-alpine AS prod

EXPOSE 3000

ENV EULER_CLIENT_URL="http://localhost:8080"
ENV NODE_ENV="production"

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node --from=pruned /usr/src/pruned ./
COPY --chown=node:node --from=build /usr/src/app/apps/euler-server/dist ./dist

CMD [ "node", "dist/main" ]
