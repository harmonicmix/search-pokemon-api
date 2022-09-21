# search-pokemon-api
This is a search-pokemon-api backend using Postgres database and use Express.js Typescript.

# How to run project
- create database in postgres
- create table using [Schema in Project](https://github.com/harmonicmix/search-pokemon-api/blob/main/src/config/dbSchema.txt).
- make sure database is runing
- install dependency
```
yarn install 
```
- config .env for database
```
DB_USER=<YOUR DATABASE USERNAME>
DB_PASS=<YOUR DATABASE PASSWORD>
DB_NAME=<YOUR DATABASE NAME>
DB_HOST=<YOUR DATABASE HOST>
DB_PORT=<YOUR DATABASE PORT>
FRONT_BASE=<YOUR FRONTEND ENDPOINT>
```
- run project
```
yarn dev 
```

# Run by Docker
- config Dockerfile
```
ENV DB_USER=<YOUR DATABASE USERNAME>
ENV DB_PASS=<YOUR DATABASE PASSWORD>
ENV DB_NAME=<YOUR DATABASE NAME>
ENV DB_HOST=<YOUR DATABASE HOST>
ENV DB_PORT=<YOUR DATABASE PORT>
ENV FRONT_BASE=<YOUR FRONTEND ENDPOINT>
```
- create docker build
```
docker build -t search-pokemons-api .
```
- run docker
```
docker run -d -p 5558:5558 --name search-pokemons-api search-pokemons-api
```


