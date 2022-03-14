FROM node:16.14

RUN yarn --version

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY yarn.lock /home/node/app

RUN yarn 

COPY . /home/node/app

EXPOSE 3000

CMD yarn start:dev
