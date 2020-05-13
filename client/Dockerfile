# Build
FROM node:lts-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

# Run
FROM nginx:1.17

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
