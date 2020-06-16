# Base
FROM node:lts-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Dev
FROM base as dev

EXPOSE 80

CMD ["npm", "run", "start:docker"]

# Build
FROM base as build

RUN npm run lint && \
    npm run build:prod

# Prod
FROM nginx:stable as prod

ENV EULER_SERVER_URL="http://localhost:3000"

RUN apt-get update && apt-get install --no-install-recommends -y curl

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

HEALTHCHECK CMD curl -f http://localhost/ || exit 1

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
