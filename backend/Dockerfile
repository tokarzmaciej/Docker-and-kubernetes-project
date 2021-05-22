FROM node:alpine
WORKDIR /api
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install
COPY . .
CMD ["node", "index.js"]
EXPOSE 5000