# MQTT

[Home](../../README.md)

Default port: 8883

## Context

MQTT is a communication protocol that is widely used for IoT, because it is easy to add new devices to the network (since all devices only communicate with the broker).

## Publish / Subscribe

All the devices on the MQTT network can **publish** messages. If you want two devices to exchange information, that least on of them has to be **subscribed** to the a **topic** on which the other device publishes. This is a very flexible and scalable architecture.

## Topics

Topics are basically types given to messages -> they are different categories of messages. They have a kind of hierarchy, defined like paths in the topics name. There is no standard format for the topics names, so you have to be very consistent when naming your topics. They are case sensitive!

**e.g.:** You have a topic `home` and another one called `home/kitchen`, which is a **subtopic** of the first one.

### `+`

Using `+` in topics allows you to get any matching messages.

**e.g.:** You publish on two topics called `lamp/status` and `button/status`. Using the syntax `+/status` will return you all the topics that finish with "status".

### `#`

Allows you to get all subtopics of a topic.

**e.g.:** `home/#`

## Broker

The **broker** is basically a postman. It receives and sorts all the messages, and forwards them to the devices that are concerned.

We will use the mosquitto broker.

## Messages

### Birth

Special message published whenever connection is established between a client and the broker.

### Death

Special message published before closing a connection.

### Will

Special message sent in case of an abrupt/unexpected disconnection.

### Messages quality

They are three messages quality levels:

- 0: Message will be delivered at most once.
- 1: Message will be delivered at lest once.
- 2: Message will be delivered once.

They have rising communication overheads. This means higher quality level implies more crowded network.

## Install and test

### Install broker

```bash
sudo apt-get update
sudo apt-get install mosquitto
```

### Start broker

Start mosquitto broker:

```bash
mosquitto
```

Or start in background mode:

```bash
mosquitto -d
```

Use `ps aux | grep mosquitto` to check if it is actually running. Use `killall mosquitto` to kill the process running in background.

### CLI client

These commands come with the mosquitto package. You can use them to send messages between terminals.

#### Subscribe

Start a client that is subscribed to topic "test":

```bash
mosquitto_sub -t "test"
```

You can use the `-h` option to specify a host.

#### Publish

Publish a message under a given topic (in another terminal than subscriber):

```bash
mosquitto_pub -m "hello world" -t "test"
```

## Securing the broker

