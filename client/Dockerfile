# Base
FROM node:12.16-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Dev
FROM base as dev

EXPOSE 80

CMD ["npm", "run", "start:docker"]

# Build
FROM base as build

RUN npm run build:prod

# Prod
FROM nginx:1.17

ENV EULER_SERVER_URL="http://localhost:3000"

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
