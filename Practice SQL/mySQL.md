# mySQL setup on linux

```sh
sudo systemctl start mysql
```

Alter the root user password

1. Access mysql shell

```sh
sudo mysql
```

2. Run the following commands

```sh
USE mysql;
```

Check for the user

```sh
SELECT user FROM mysql.user WHERE user = 'root' AND Host = 'localhost';
```

#### If the user does not exist

```sh
CREATE USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

In place of `'new_password'` give your desired password.

Grant all the privileges

```sh
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';
```

```sh
FLUSH PRIVILEGES;
```

#### If the user already exists

```sh
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

3. Exit and restart

```sh
EXIT;
```

```sh
sudo systemctl restart mysql
```

4. Test with new password

```sh
mysql -u root -p
```
