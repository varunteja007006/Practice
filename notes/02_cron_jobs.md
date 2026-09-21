# CRON JOBS

Refer the article for understanding the Cron Jobs -
https://www.freecodecamp.org/news/cron-jobs-in-linux/
<br />

Practice the cron jobs at [crontab.guru](https://crontab.guru/)

Cron is a job scheduling utility present in Unix-like systems. The crond daemon enables cron functionality and runs in the background. The cron reads the crontab (cron tables) for running predefined scripts.

Any task that you schedule through crons is called a cron job. Cron jobs help us automate our routine tasks, whether they're hourly, daily, monthly, or yearly.

### Check for the Cron in linux

```sh
sudo systemctl status cron.service
```

### Control Access to Cron Jobs

A user has to be present in '/etc/cron.allow' file

```sh
sudo cat cron.allow
 > John # any user's name
```

Users can also be denied access to Cron jobs by adding them to file at 'etc/cron.d/cron.deny'

### Cron job syntax

Use following flags for adding and deleting the tasks/jobs

1. Edits to crontab entries to add, delete, or edit cron jobs.

```sh
crontab -e
```

2. List all cron jobs for the current user.

```sh
crontab -l
```

3. List another user's cron.

```sh
crontab -u username -l # username example - John
```

4. Edit another user's cron jobs.

```sh
crontab -u username -e # username example - John
```

### Understanding a sample cron job

```sh
# Cron job example
* * * * * sh /path/to/script.sh
```

Explanation: <br />
`* *  * * *` represents minutes, hours, days, months and weekdays respectively.

- Minutes (0 - 59): Command can be executed at any specific minute.
- Hours (0 - 23): Command can be executed at any specific hour.
- Days (1 - 31): Command can be executed at any specific Day.
- Months (1 - 12): The month in which the command as to run.
- Weekdays (0 - 6): Days of the week where commands would run, Here 0 is Sunday.

`sh` represents that the script is bash script and should be run from `/bin/bash`.

`/path/to/script.sh` represents the path to script file.

### Cron job examples

The following are commands and the meaning.

`0 22 * * 1-5` - At 04:05 on Saturday.

`5 4 * * 6` - At 22:00 on every day-of-week from Monday through Friday.

### Create cron job

1. Create a script.
2. Make the script executable.
3. Add script in crontab, `crontab -e`

### Troubleshooting cron jobs

1. Check the schedule.

2. Check cron logs. The log file can be found at `var/log/cron` location. In some distros `/var/log/syslog`. <br />
   if there is an entry in these logs at the correct time, it means the cron has run according to the schedule you set.

3. Redirect cron output to a file.

```sh
# Redirect cron output to a file
* * * * * sh /path/to/script.sh &> log_file.log
```
