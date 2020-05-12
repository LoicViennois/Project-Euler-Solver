FROM node:lts-slim as build

WORKDIR /usr/src/app

COPY . .
RUN npm install && npm run build

FROM node:lts-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD [ "node", "./dist/server.js" ]
