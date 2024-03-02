# LINUX

### Turn off the power management for the wifi network card. (Occasionally it disconnects 😥)

Get the stats of your network card.

```sh
rfkill list && iwconfig && mokutil --sb-state
```

The command rfkill list displays the state of various wireless devices, iwconfig shows the configuration of network interfaces, and mokutil --sb-state checks the status of Secure Boot.

If in the output Power Management is 'on' then maybe turn it off.

You will have to change the config file to do that, Here are the steps,

- Open terminal as root user

```sh
sudo -i
```

- Now navigate to the config file and update it to disable the power saving for network card.

```sh
nano /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf
```

- Now change the value as per the requirement
  - 0: Disable Wi-Fi power saving.
  - 1: Enable Wi-Fi power saving.
  - 2: Enable Wi-Fi power saving, but allow the Wi-Fi card to wake up at longer intervals.
  - 3: Enable Wi-Fi power saving with a more aggressive power-saving mode.
