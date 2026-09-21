# Docker for production deployment

### Step 1 Create docker files

Create the following files:

- docker-compose.dev.yml
- docker-compose.prod.yml
- docker-compose.yml

`docker-compose.yml` - this is the main docker compose file. This will have the shared configuration.

### Step 2 Build the base docker compose file

docker-compose.yml

```yml
services:
  api:
    build: ./api
    ports:
      - "4000:4000"

  myblog:
    build: ./myblog
    ports:
      - "5173:5173"
```

### Step 3 Build the dev docker compose file

docker-compose.dev.yml

Since this is a development we would like to mount volumes and set environment variables according
to the development environment.

```yml
services:
  api:
    volumes:
      - ./api:/app
      - /app/node_modules
    environment:
      - ./api/.env.development
    command:
      - npm run dev

  myblog:
    volumes:
      - ./myblog:/app
      - /app/node_modules
    environment:
      - ./myblog/.env.development
    command:
      - npm run dev
```

Also we can override the commands as well that you give in the Dockerfile

### Step 3 Build the prod docker compose file

docker-compose.prod.yml

```yml
services:
  api:
    environment:
      - ./api/.env.production
    command:
      - npm run build && npm run start

  myblog:
    environment:
      - ./myblog/.env.production
    command:
      - npm run build && npm run start
```

### Step 4 Run the docker compose

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

###

<br />
<br />

###

## How do I not install dev dependencies in the production

There is a problem where we also install dev dependencies in the production environment. To solve that
we have to use a bit of configuration

docker-compose.dev.yml

```yml
version: "3.8"
services:
  api:
    build: ./api
      args:
        NODE_ENV: development
    container_name: api_c
    ports:
      - "4000:4000"
    volumes:
      - ./api:/app
      - /app/node_modules
  myblog:
    build: ./myblog
      args:
        NODE_ENV: development
    container_name: myblog_c
    ports:
      - "3000:3000"
    stdin_open: true
```

Dockerfile of myblog

```Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package.json .

# RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]
```

Dockerfile of api

```Dockerfile
FROM node:17-alpine

WORKDIR /app

COPY package.json .

# RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . .

EXPOSE 4000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]
```

## How can I store my database data

For this we should create named volumes in docker

docker-compose.yml

```yml
services:
  api:
    build: ./api
    ports:
      - "4000:4000"

  myblog:
    build: ./myblog
    ports:
      - "5173:5173"

  db:
    image: postgres
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: root
      POSTGRES_DB: mydb
    volumes:
      - db:/var/lib/postgresql/data

volumes:
  db:
```

Overtime the volumes build up so you have to delete them but not the db ones

You will also have to make sure that you do not delete the volumes. So for that keep your container
running. That way when you prune the volumes it will not delete the db ones.

Then run the following command

```sh
docker volume prune
```
