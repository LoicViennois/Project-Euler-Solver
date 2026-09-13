# Base
FROM node:lts-alpine AS base

WORKDIR /usr/src/app

RUN npm install -g pnpm@12

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

RUN pnpm install --frozen-lockfile

COPY . .

# Build
FROM base AS build

RUN pnpm run lint:ci && \
    pnpm run test && \
    pnpm run build

# Prod
FROM node:lts-alpine AS prod

EXPOSE 3000

ENV EULER_CLIENT_URL="http://localhost:8080"
ENV NODE_ENV="production"

RUN npm install -g pnpm@12

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

RUN pnpm install --prod --frozen-lockfile

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "pnpm", "run", "start:prod" ]
