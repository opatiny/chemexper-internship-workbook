# Docker

## Context

Docker basically allows you to run some script inside of a closed environment that contains all of the things that it needs to run (like node, sql, ...), without installing these directly on the computer. It is a little bit similar to virtual machines, but a lot lighter.

## Install

Just run `dnf install docker`.

This will give you the `docker` command.

## Commands
[List of useful commands](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3)

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
- `-it`: interactive mode -> attach a terminal session in which logging will be made
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
