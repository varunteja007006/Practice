# mySQL setup on linux

MySQL Documentation [👉 Link ](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-linux-quick.html)

To start the mysql service

```sh
sudo systemctl start mysql
```

To restart the mysql service

```sh
sudo systemctl restart mysql
```

To stop the mysql service

```sh
sudo systemctl stop mysql
```

### Change the root user & password

Check for the user
`Here root can be your system user login name - john therefore replace root with your username`  
Still confused ?? open your terminal and type the below command to know the username

```sh
whoami
```

 <br />

1. Access mysql shell

```sh
sudo mysql
```

2. Run the following commands

```sh
USE mysql;
```

Back to MySQL

```sh
SELECT user FROM mysql.user WHERE user = 'root' AND Host = 'localhost';
```

#### _If the user does not exist_

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

#### _If the user already exists_

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

### Install the DBeaver

Now its time to connect the mysql with a GUI for better experience. Before doing this make sure you
started mysql and logged into the connection with your password

```sh
sudo systemctl start mysql
```

```sh
mysql -u root -p
```

#### In the DBBeaver

To make new connection, use the below keyboard shortcut

```
ctrl+shift+N
```

Now from all the available options pick `MySQL`. <br />
<br />
![Add New Connection](https://github.com/varunteja007006/Practice/blob/main/Practice%20SQL/assets/Add%20New%20Connection.png)

Keep all the settings as default and now provide the user and password that you use to login into mysql connection. <br/>
<br />
![Test Connection](https://github.com/varunteja007006/Practice/blob/main/Practice%20SQL/assets/Test%20Connection.png)

Test the connection (You can find a button Test Connection ...)

If the Test connection is successful press Finish button in the bottom.s
