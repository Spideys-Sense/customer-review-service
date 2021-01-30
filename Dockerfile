FROM node:14

WORKDIR /customer-review-service

COPY package.json /customer-review-service/package.json

COPY . .

RUN npm install

RUN npm run build

EXPOSE 1111

CMD [ "node", "server/index.js" ]