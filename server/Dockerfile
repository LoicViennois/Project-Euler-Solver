FROM node:lts-alpine

EXPOSE 3000

ENV EULER_CLIENT_URL="http://localhost:8080"
ENV EULER_SERVER_INTERFACE="0.0.0.0"

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node src ./src

CMD [ "npx", "tsx", "./src/server.ts" ]
