# Base
FROM node:lts-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Build
FROM base AS build

RUN npm run lint:ci && \
    npm run test && \
    npm run build

# Prod
FROM node:lts-alpine AS prod

EXPOSE 3000

ENV EULER_CLIENT_URL="http://localhost:8080"
ENV NODE_ENV="production"

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "npm", "run", "start:prod" ]
