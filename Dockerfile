FROM node:latest
# MAINTAINER Murilo Blanco Flor <muriloblan@gmail.com>

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3333

CMD [ "npm", "start" ]
