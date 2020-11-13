# Base
FROM node:lts-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Build
FROM base as build

RUN npm run lint && \
    npm run build && \
    npm run test:prod

# Prod
FROM node:lts-alpine as prod

EXPOSE 3000

ENV EULER_CLIENT_URL="http://localhost:8080"
ENV EULER_SERVER_INTERFACE="0.0.0.0"
ENV NODE_ENV="production"

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

HEALTHCHECK CMD node ./dist/hc.js

CMD [ "node", "./dist/server.js" ]
