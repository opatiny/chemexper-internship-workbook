# Bioreactors setup overview

[Home](../../README.md)

## Bioreactors

Each [bioreactor](https://github.com/Hackuarium/bioreactor) is powered using a 12V power supply. It can run independently from any computer. The LCD screen of the device allows you to have basic interaction and to change some parameters values. The bioreactor logs 26 parameters in its flash memory, which is non-volatile. The logs format is a string of 136 hexadecimal symbols, which we call a "compact log". Each bioreactor has a unique ID that must be attributed to it when doing the setup. The ID is composed of two characters. The first one, which specifies the device kind, must be a "\$".

## Serial to MQTT bridge

One or many bioreactors are connected to a computer with USB cables. The computer runs [a script](https://github.com/Hackuarium/serial-mqtt-brigde) that acts as a serial to MQTT bridge. This means that when an MQTT "query" message is received, the computer sends a serial command to the appropriate bioreactors in order to get the most recent logs. Then, the logs are sent over as an MQTT message.

## MQTT broker

Between the bridge and the GUI, an MQTT broker must run in order to handle all the messages.

## GUI

Finally, the GUI can run in a completely different place as where the bioreactors are. It contains an MQTT publisher and an MQTT subscriber. Regularly, the GUI sends messages asking for the last logs of each bioreactor. These logs are then parsed using the [legoino-utils](https://github.com/Hackuarium/legoino-util) project. Finally, they are stored in an InfluxDB database.

On the other hand, a node-red dashboard allows the user to see all the stored data in gauges, charts and tables. Moreover, the user can send commands to every bioreactor on the network, in order to inspect and debug.
