# Base
FROM node:12.16-alpine as base

EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

# Dev
FROM base as dev

ENV EULER_CLIENT_URL="http://localhost:8080"

ENV NODE_ENV="development"

ENV EXPRESS_INTERFACE="0.0.0.0"

CMD ["npm", "run", "start"]

# Build
FROM base as build

COPY . .

RUN npm run build

# Prod
FROM node:12.16-alpine as prod

ENV EULER_CLIENT_URL="http://localhost:8080"

ENV NODE_ENV="production"

ENV EXPRESS_INTERFACE="0.0.0.0"

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "./dist/server.js" ]
