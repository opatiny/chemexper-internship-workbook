# Bioreactors setup overview

[Home](../../README.md) | [Bioreactor TOC](../bioreactor.md)

## Bioreactors

Each [bioreactor](https://github.com/Hackuarium/bioreactor) is powered using a 12V power supply. It can run independently from any computer and can store 15 days of logs. The bioreactor logs 26 parameters in its flash memory, which is non-volatile. The logs format is a string of 136 hexadecimal symbols, which we call a "compact log". Each bioreactor has a unique ID that must be attributed to it when doing the setup. The ID is composed of two characters. The first one, which specifies the device kind, must be a "\$".

## Serial to MQTT bridge

One or many bioreactors are connected to a computer with USB cables. The computer runs [a script](https://github.com/Hackuarium/serial-mqtt-brigde) that acts as a serial to MQTT bridge. This means that when an MQTT "query" message is received, the computer sends a serial command to the appropriate bioreactors in order to get the answer. Then, the data is sent over as an MQTT message.

In our case, the computer is a Raspberry Pi with a 7 inch touchscreen. The touchscreen displays the GUI for the control of the bioreactors.

## MQTT broker

Between the bridge and the GUI, an MQTT broker must run in order to handle all the messages.

## GUI

Finally, the GUI can run in a completely different place as where the bioreactors are. The GUI consists of an instance of Node-Red. It contains an MQTT publisher and an MQTT subscriber. Regularly, the GUI sends messages asking for the last logs of each bioreactor. These logs are then parsed using the [legoino-utils](https://github.com/Hackuarium/legoino-util) project.

The node-red dashboard allows the user to see all the stored data in gauges, charts and tables. Moreover, the user can send commands to every bioreactor on the network, in order to inspect and debug.

## Database

All the data that comes from the user interface has to be stored in a database. We are using InfluxDB.
