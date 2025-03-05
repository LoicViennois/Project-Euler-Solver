# Base
FROM node:lts-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Build
FROM base AS build

RUN npm run lint && \
    npm run build:prod

# Prod
FROM nginx:stable AS prod

ENV EULER_SERVER_URL="http://localhost:3000"

COPY --from=build /usr/src/app/dist/project-euler-solver /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
