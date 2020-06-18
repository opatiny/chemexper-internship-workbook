# How to start the bioreactor GUI (with install already done)

[Home](../../README.md) | [Bioreactor TOC](../bioreactor.md)

**Warning:** Be sure that you have already installed all the necessary tools. There is a detailed procedure on how to do this on MacOs [here](./bio-gui-install-macos). In this md, we describe what you have to do every time you start the GUI.

## To do every time you start the GUI

**Warning:** Each of these have to run in a different terminal tab.

### Start node-red

```bash
node-red
```

### Start MQTT broker

```bash
mosquitto
```

### Start serial-MQTT bridge

Go to the folder where you cloned [legoino-mqtt-bridge](https://github.com/Hackuarium/legoino-mqtt-bridge) and run:

```bash
npm run start-dev
```

### Start InfluxDB server

```bash
influxd
```

### Start InfluxDB client (useful for debug)

```bash
influx
```

You can then run this command in the client to have nicely formatted timestamps:
```sql
precision rfc3339
```
