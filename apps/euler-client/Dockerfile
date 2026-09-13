# Base
FROM node:lts-alpine AS base

WORKDIR /usr/src/app

RUN npm install -g pnpm@12

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/euler-client/package.json ./apps/euler-client/
COPY apps/euler-server/package.json ./apps/euler-server/

RUN pnpm install --frozen-lockfile --filter project-euler-client...

COPY apps/euler-client ./apps/euler-client

# Build
FROM base AS build

WORKDIR /usr/src/app/apps/euler-client

RUN pnpm run lint && \
    pnpm run build:prod

# Prod
FROM nginx:stable AS prod

ENV EULER_SERVER_URL="http://localhost:3000"

COPY --from=build /usr/src/app/apps/euler-client/dist/project-euler-solver/browser /usr/share/nginx/html
COPY apps/euler-client/nginx.conf /etc/nginx/conf.d/default.conf
COPY apps/euler-client/docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
