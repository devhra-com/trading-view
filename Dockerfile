FROM node:18.6.0-alpine3.15

COPY package.json /usr/src/ttp-client-area/package.json
COPY yarn.lock /usr/src/ttp-client-area/yarn.lock
WORKDIR /usr/src/ttp-client-area
RUN ["yarn", "install"]

COPY . /usr/src/ttp-client-area
RUN ["yarn", "build"]