FROM node:latest
# MAINTAINER Murilo Blanco Flor <muriloblan@gmail.com>

WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 3333

CMD [“node”, “dist/server.js”]
