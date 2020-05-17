# Build
FROM node:12.16-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

# Run
FROM nginx:1.17

ENV EULER_SERVER_URL="http://localhost:3000"

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
