FROM node:lts-slim as build

WORKDIR /usr/src/app

COPY . .
RUN npm install && npm run build:prod

FROM nginx:1.17

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
