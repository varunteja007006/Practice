# Docker Course

There are three important files for docker:

- docker-compose.yaml
- .dockerignore
- Dockerfile

## .dockerignore file

This is very similar to the .gitignore file. The files and directories mentioned in this file will
be ignored by docker

```sh
node_modules #this folder is ignored

**/*.txt #explanation given below
```

`*.txt` This matches any file that ends with the .txt extension.
`**/` This pattern matches any file or directory at any depth within the build context.

<br />
<br />

## Dockerfile

This file tells the docker to how to create an image.

```yaml
FROM node:16-alpine # initial layer - we need a node image as an initial layer

WORKDIR /app # setting up a work dir where all our code sits

COPY package.json . # We copy the local package.json (relative path) to docker image work dir '. '(/app)

RUN npm install # install dependencies while the image is built, this command runs in work dir

COPY . . # copy rest of the files from local to docker image work dir

EXPOSE 3000 # required for docker desktop port mapping

CMD ["npm", "start"] # We do not want to run the app when image is built rather we need it to run after image is built
```

### Docker build

Go to the root directory and run the below command to create an image based on the Dockerfile. Images are read-only.

```sh
docker build -t myapp .
```

flags:

- t (to give a name, in this case it is 'myapp')

### Docker images

```sh
docker images
```

### Docker run image

This command runs a container with image name 'myapp' with a random name(A running container will have
different name).

```sh
docker run --name my_app_container -p 4000:4000 -d myapp
```

flags:

- name (to give a name to the container)

- p (port to be exposed, left side of the colon port is port on local system to be mapped with the container and right side of the colon port is exposed by container )

- d (detached mode, the terminal will not be blocked)

### Docker stop

Stop running of the docker containers

Let us first check all the docker processes

```sh
docker ps -a
```

flags:

- a (all docker processes, both running and not running)

Then we stop the specific container by using its name or container ID

```sh
docker stop my_app_container
```

### Docker restart

```sh
docker start my_app_container
```

Difference between `docker run` and `docker start` is that docker run will create a new container whereas
docker start will start the existing container.

### Deleting docker images

This deletes the docker image named 'myapp'. This fails if there exists a container that uses this
image.

```sh
docker image rm myapp
```

To forcefully delete such images we can use `-f` flag

```sh
docker image rm myapp -f
```

### Deleting docker containers

```sh
docker container rm my_app_container
```

### Delete all my containers and images

```sh
docker system prune -a
```

### Creating a image version and running a container

Creating a image of some version

```sh
docker build -t myapp:v1 .
```

Running a image of some version

```sh
docker run --name my_app_container -p 4000:4000 myapp:v1
```

Delete a docker container once stopped using --rm flag

```sh
docker run --name my_app_container -p 4000:4000 --rm myapp:v1
```

<br />
<br />

## Volumes

Docker images are read-only. Once an image is built you cannot change any files and any new changes
made to the local files will not reflect. A new image has to be created and a new container has to
be run for every new change to be shown.

### What if we want to reflect the changes made in the local reflect in the container?

Volumes can be used for this. We can map the local folders to the folders in the container so that the
changes in the local file will be reflected in the container currently running.

Remember images are read-only hence they will not change. New image has to be created to have all the
latest changes.

Use nodemon to restart the server on the container. (Nodemon restarts the server whenever a JS file
is modified).

#### Configuring the volume

We use the -v flag for mapping the local directory with container directory so that new changes in the
local are also shown in the container.

```sh
docker run --name my_app_container -p 4000:4000 --rm -v /home/user/Documents/work/demo/api:/app myapp:v1
```

After `-v` we specify the complete path to the project folder that has to be mapped. Then after colon
we mention the path in container.

Now this keeps the container to be in sync with the local folder.

### What if we have delete some folder in the local folder but not in the container?

We need to map such folders to anonymous volume.

```sh
docker run --name my_app_container -p 4000:4000 --rm -v /home/user/Documents/work/demo/api:/app
-v /app/node_modules myapp:v1
```

<br />
<br />

## Docker Compose

If you have multiple containers that need to talk to one another, like a react that talks to backend
node js server.. etc that all have to run on separate container.

It is better to configure all of them in one file. This file is called docker-compose.yaml

#### docker-compose.yaml / compose.yaml

```yaml
version: "3.8" # version of the docker compose to be used (in the newer version this is optional)
services: # nested properties - its all the projects whose images have to be built and container has to be run
  api:
    build: ./api # relative path to the docker file
    container_name: api_c # container name for the above image created.
    ports:
      - "4000:4000"
    volumes:
      - ./api:/app
      - /app/node_modules
  myblog:
    build: ./myblog
    container_name: myblog_c
    ports:
      - "3000:3000"
    volumes:
      - ./myblog:/app
      - /app/node_modules
    stdin_open: true
    tty: true
```

### Run docker compose file

```sh
docker-compose up
```

### Stop docker compose file

```sh
docker-compose down
```

To also delete images, containers and volumes created add extra flags `--rmi` & `-v`

```sh
docker-compose down --rmi all -v
```

## Sharing images on Docker Hub

1. Create a repository in the docker hub and it will generate you a push command.

2. Create an image.

3. Push the image to the docker hub (login into your account).

```sh
docker push username/repo_name:tagname
```

4. To pull down the image.

```sh
docker pull username/repo_name:tagname
```

https://www.youtube.com/watch?v=YS35VHsbS-0&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=13

## References

[Docker documentation](https://docs.docker.com/)

[The net ninja docker playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)
