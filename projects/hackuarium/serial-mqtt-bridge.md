# `hackuarium/serial-mqtt-bridge`

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/hackuarium/serial-mqtt-bridge](https://github.com/hackuarium/serial-mqtt-bridge)

## Goal
Retrieve data from serial devices when an MQTT message is received with a given topic is received, and publish it as MQTT messages.

## Context

This project will serve as an interface between the bioreactors, and the GUI controlling them. It is planned to build the GUI using Node-red.

## MQTT topics standard

### Send a command to a serial device
We define an MQTT topics standard: each topic sent to the bridge is composed of the device type, followed by a "q" (query) or "a" (answer), followed by the device unique id and finally the command asked for. The packages that will be sent from node-red to the bridge won't have any content. Reading MQTT doc confirmed that it is indeed optional for publish messages.

The query topics format:
```bash
bioreactor/q/<id>/<cmd>
```
### Query for all connected serial devices

Use the following topic to get a list of all existing serial devices:
```bash
bioreactor/q/list
```

### Answer topics

To listen to all the answers of the bridge, subscribe to this topic:
```
bioreactor/a/#
```

## Testing

I tried making writing a test to verify that the project works properly, but I have had many troubles with asychronous things. What happened is that I created an mqtt client that was supposed to query the bridge, and verify that the answer was correct. But when I ran the test, the test was completed before the bridge had answered...

## Packages used

- `mqtt`: to publish and subscribe to topics
- `serial-requests`: allows to send commands to serial devices

## Developer bash commands
- `npm start`: run index.js

## Links
