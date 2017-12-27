FROM node:latest

WORKDIR /home/node/app

COPY . .

RUN yarn install && yarn build

EXPOSE 1337

CMD yarn start 
