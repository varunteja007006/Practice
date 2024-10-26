# Uninstall Docker

https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine

- For linux
  https://askubuntu.com/questions/935569/how-to-completely-uninstall-docker

### Step 1

```sh
dpkg -l | grep -i docker
```

### Step 2

```sh
sudo apt-get purge -y docker-engine docker docker.io docker-ce docker-ce-cli docker-compose-plugin docker-ce-rootless-extras docker-desktop docker-buildx-plugin

sudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce docker-compose-plugin docker-ce-rootless-extras docker-desktop docker-buildx-plugin

```

### Step 3

```sh
sudo rm -rf /var/lib/docker /etc/docker
sudo rm /etc/apparmor.d/docker
sudo groupdel docker
sudo rm -rf /var/run/docker.sock
sudo rm -rf /var/lib/containerd
sudo rm -r ~/.docker
```
