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
