FROM oven/bun

EXPOSE 3000

ENV EULER_CLIENT_URL="http://localhost:8080"
ENV EULER_SERVER_INTERFACE="0.0.0.0"
ENV NODE_ENV="production"

WORKDIR /usr/src/app

COPY package.json ./
COPY bun.lock ./

RUN bun install --production

COPY src ./src

CMD [ "bun", "./src/server.ts" ]
