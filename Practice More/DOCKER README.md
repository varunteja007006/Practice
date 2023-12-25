# Docker Course

There are three important files for docker:

- docker-compose.yaml
- .dockerignore
- Dockerfile

#### .dockerignore file

This is very similar to the .gitignore file. The files and directories mentioned in this file will
be ignored by docker

```sh
node_modules #this file is ignored

**/*.txt #explanation given below
```

`*.txt` This matches any file that ends with the .txt extension.
`**/` This pattern matches any file or directory at any depth within the build context.

#### Dockerfile

```yaml
FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]
```

#### docker-compose.yaml

```yaml
version: "3.8"
services:
  api:
    build: ./api
    container_name: api_c
    ports:
      - "4000:4000"
    volumes:
      - ./api:/app
      - ./app/node_modules
  myblog:
    build: ./myblog
    container_name: myblog_c
    ports:
      - "3000:3000"
    stdin_open: true
```
