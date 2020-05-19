# `hackuarium/serial-mqtt-bridge`

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/hackuarium/serial-mqtt-bridge](https://github.com/hackuarium/serial-mqtt-bridge)

## Goal
Retrieve data from serial devices when an MQTT message is received on a with a given topic, and publish it as MQTT messages.

## Context

THis project will serve as an interface between the bioreactors, and the GUI controlling them. It is planned to build the GUI using Node-red.

## Packages used

- `mqtt`: to publish and subscribe to topics
- `serial-requests`: allows to send commands to serial devices

## Developer bash commands
- `npm start`: run index.js

## Links
