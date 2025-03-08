# Postgresql

Run the server

```sh
sudo systemctl start postgresql.service
```

Switch to the postgres user

```sh
sudo -i -u postgres
```

psql prompts

```sh
psql
```

exit the prompts

```sh
\q
```

If you are switched to postgres user and want to create a role

```sh
createuser --interactive
```

Creating a database

```sh
createdb database_name
```

List the databases in the prompts

```sh
\l
```

List the roles not users

```sh
\du
```

List of users

```sh
SELECT * FROM USER;
```

Drop the database

```sh
dropdb 'database name'

```

Create a role using query

```sh
CREATE ROLE new_user WITH LOGIN PASSWORD 'your_password';
```

Delete a role

```sh
DROP ROLE new_user;
```

```sh
CREATE ROLE new_user SUPERUSER LOGIN PASSWORD 'password';
```

## Postgresql on Docker

Download the images from docker

```sh
sudo docker pull postgres
```

Run the docker image

```sh
sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -d postgres
```

Mounting volumes

```sh
sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -v /path/to/local/storage:/var/lib/postgresql/data -d postgres:latest
```

replace this /path/to/local/storage with your local path

Now to expose the port

```sh
sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -v /path/to/local/storage:/var/lib/postgresql/data -p 5432:5432 -d postgres:latest
```
