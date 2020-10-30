FROM alpine AS build
RUN apk --update --no-cache add bash nodejs yarn

ADD . /usr/src/app
WORKDIR /usr/src/app

RUN echo "REACT_APP_SERVER_HOST=${SERVER_HOST}" >> /usr/src/app/.env

RUN yarn install &&\
    yarn test --watchAll=false && \
    yarn build

FROM nginx:1.19-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html