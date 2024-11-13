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

If you are switched to postgres user and want to create a user

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

List the users

```sh
\du
```

Drop the database

```sh
dropdb 'database name'

```
