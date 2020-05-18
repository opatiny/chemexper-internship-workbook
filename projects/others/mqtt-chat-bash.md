# Chat between two computers from CLI using MQTT

[Home](../../README.md) | [Projects TOC](../projects.md)

## Goal

Create MQTT broker and two clients on different computers to chat with each other from the CLI.

## Setup broker computer

### Start broker

```bash
mosquitto
```

### Open a port 1883 on firewall

If you open port 1883 on the firewall of your computer, you can talk between computers on the same LAN. To open the port, follow this procedure:
```bash
firewall-cmd --list-ports                              # check open ports
sudo firewall-cmd --zone=public --add-port=1883/tcp    # open port 1883 to tcp connections
sudo firewall-cmd --reload                             # reload firewall
```

To close the port once you're finished, do:
```bash
sudo firewall-cmd --zone=public --remove-port=1883/tcp
sudo firewall-cmd --reload
```

## To do on all computers that want to communicate

### Listen to the `chat` topic

Start a client that is subscribed to the topic "chat":
```bash
mosquitto_sub -h 192.168.1.22 -t "chat"
```

The `-h` option is used to specify a host.

### Send messages

```bash
mosquitto_pub -h 192.168.1.22 -t "chat" -m "hello world"
```
