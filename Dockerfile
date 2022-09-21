FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn 

COPY . .
ENV DB_USER=postgres
ENV DB_PASS=Asdf1234
ENV DB_NAME=postgres
ENV DB_HOST=192.168.50.113
ENV DB_PORT=5433
ENV FRONT_BASE=http://localhost:3000

EXPOSE 5558

CMD ["yarn", "dev"]