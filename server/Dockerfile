# Build
FROM node:12.16-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Run
FROM node:12.16-alpine

ENV EULER_CLIENT_URL="http://localhost:8080"

ENV NODE_ENV="production"

EXPOSE 3000

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "./dist/server.js" ]
