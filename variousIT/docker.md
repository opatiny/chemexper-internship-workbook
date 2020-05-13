# Docker

## Context

Docker basically allows you to run some script inside of a closed environment that contains all of the things that it needs to run (like node, sql, ...), without installing these directly on the computer. It is a little bit similar to virtual machines, but a lot lighter.

## Getting it to work

[docker-ce install tutorial](https://linuxconfig.org/how-to-install-docker-on-fedora-31)

### Kernel hack: revert to `cgroup` v1

To install docker on a Fedora, you first have to hack the kernel (there seems to be no other choice)... 

```bash
sudo dnf install -y grubby
sudo grubby --update-kernel=ALL --args="systemd.unified_cgroup_hierarchy=0"
sudo reboot
```

### Proper install after hack

```bash
dnf install docker docker-compose
```
On recent Fedora, running this command will provide you with `containerd` instead of `docker` (it is really weird). Indeed, it is an alternative that is installed by default on Fedora!

This will give you the `docker` and `docker-compose` commands.

### Give permissions to regular user

Do this to run docker without being root:

```bash
sudo groupadd docker
udo usermod -aG docker USERNAME
```

### Start and enable docker

```bash
systemctl enable --now docker
```

Check that it is up and running:
```bash
systemctl status docker
```

## Commands
[List of useful commands](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3)

### Test docker

Runs a test project.
```bash
docker run hello-world
```

### Run a dockerized project

The `--build` option is necessary if you have "local" images that need to be built. Run this command at the level of the `docker-compose.yml` file.

```bash
docker-compose up --build
```
You can quit this by using Ctrl+C.

#### Run in background

```bash
docker-compose up -d --build
```

#### Quit image running in background

```bash
docker-compose down
```

### Containers
#### Show containers

```bash
docker container ls # or
docker ps
```

#### Enter a container

```bash
docker container exec containerName bash
```

Opens a bash inside of the container called `containerName`.

#### Create new container

```bash
docker container run -d -p containerPort:localPort --name containerName imageName
```

Create a new container that runs the image `imageName`. If the image is not found, it is pulled from dockerhub.

- `containerPort`: port number on the container (must be the one that the image needs)
- `localPort`: port on the local machine, be careful not to have clashes
- `-d`: detach -> to run in the background
- `-it`: interactive mode (foreground) -> attach a terminal session in which logging will be made
- `-p`: publish -> the ports exposed and how internal ports are connected to external ones
- `--name`: gives a name to the container

#### Stop container

```bash 
docker container stop
```

### Images

#### Build an image

You have to create a Dockerfile first!

```bash 
docker image build imageName .
```

#### Run and enter an image
```bash 
docker-compose exec node-red bash
```
