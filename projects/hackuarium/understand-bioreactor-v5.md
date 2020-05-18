# Understanding bioreactor v5 serial monitor UI

[Home](../../README.md) | [Projects TOC](../projects.md)

Link to the existing project: [https://github.com/Hackuarium/bioreactor](https://github.com/Hackuarium/bioreactor)

## Goal
Understand bioreactor v5 log system and how serial communication works.

## Context
We have to understand how the logs of the bioreactor are constructed and how serial communication works in order to make the serial to mqtt "convertor".

## Parameters

The parameters of the bioreactor are 52 **16 bites integers**, which values can be read or set. They are used to store all of the important variables of the project (for instance temperatures, weight, etc.). For now, they are some of the 52 variables that are not assigned a value.

The first 26 parameters are the most important ones. They are stored in an array and logged regularly, which means that they can be recovered in case of reboot. Each parameter is assigned an uppercase letter, that corresponds to its index in the parameters array (e.g. parameter A has index 0). The parameters are defined in the `BioMain.h` file.

## Using the serial monitor

If you want to access the bioreactor through the serial monitor:
- plug the main board in your computer with a mini USB cable
- open the Arduino IDE
- select the right serial port in Tools -> Port
- open the serial monitor
- type h+Enter for help

## Serial monitor commands

They are three types of commands that you can use in the serial monitor to communicate with the bioreactor main board.

### Lowercase letter(s)

Commands composed of one or two lowercase letters allow you to access **actions** (commands that allow you to interact with the bioreactor to get human readable information).

**Example:** `s` lists all the settings of the bioreactor

### Uppercase letter

Commands composed of one uppercase letter allow you to **retrieve the value** of one of the 26 parameters of the bioreactor. The list of these parameters is [here](https://github.com/Hackuarium/bioreactor/blob/master/docs/arduino/parameters.md).

**Example:** `A` returns value of parameter A

### Uppercase letter + integer

Commands composed of one uppercase letter directly followed by an integer allow you to **set the value** of one of the 26 parameters of the bioreactor.

**Example:** `A123` set value of parameter A to 123

## Compact logs
