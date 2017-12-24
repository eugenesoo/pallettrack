FROM node:latest

WORKDIR /home/node/app

COPY . .

RUN yarn install

CMD yarn start & yarn client
