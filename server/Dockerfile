# Build
FROM node:lts-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Run
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD [ "node", "./dist/server.js" ]
