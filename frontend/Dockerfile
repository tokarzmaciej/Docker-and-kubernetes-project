FROM node:alpine AS builder
WORKDIR /opt/app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
ENV REACT_APP_BACKEND_HOST=http://backend-prod.127-0-0-1.sslip.io/api
RUN yarn build

FROM nginx:alpine
COPY --from=builder /opt/app/build/ /usr/share/nginx/html
EXPOSE 80