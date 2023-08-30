FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN yarn

RUN apk update && apk upgrade \
        && apk add -U curl bash xdg-utils

COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]