FROM node:latest
EXPOSE 3333

# MAINTAINER Murilo Blanco Flor <muriloblan@gmail.com>

RUN mkdir /home/app

ADD . /home/app

WORKDIR /home/app

RUN npm i

CMD [“npm”, “start”]
