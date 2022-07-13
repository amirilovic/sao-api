# RUN DOCKER BUILD FROM ROOT OF THE WORKSPACE!!!
FROM node:16.16.0-buster-slim

ENV UV_THREADPOOL_SIZE 64
ENV NODE_ENV=production

ARG COMMIT_ID

WORKDIR /app

COPY packages/<%= name %>/package.json packages/<%= name %>/
COPY package.json .
COPY package-lock.json .

RUN npm ci --only=production

# Bundle app source
COPY packages/<%= name %>/dist packages/<%= name %>/dist

EXPOSE 3000

USER node

WORKDIR /app/packages/<%= name %>

CMD [ "node", "dist/index.js" ]

