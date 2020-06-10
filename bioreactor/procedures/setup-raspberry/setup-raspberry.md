# Setting up a Raspberry Pi to use it as bioreactors monitor

[Home](../../../README.md)

## What you need

- Raspberry Pi v4
- SD card (empty, at least 8GB)
- Raspberry Pi v4 USB-C power supply
- Raspberry Pi 7 inch touchscreen display

insert image

## Install the OS

I tried to use the on MacOS **Raspberry Pi Imager**.

What you must do in this step is flash the SD card with the recommended image of Raspberry Pi OS.

Download the software [here](https://www.raspberrypi.org/downloads/) and follow the instructions in the software. Flashing takes around 10min.

Put the SD card in the Raspberry Pi.

## Fix screen to Raspberry

The screen comes with one ribbon cable, four jumper cables and four screws.

- Plug the red jumper cable on the 5V pin of the screen and the black jumper cable on the GND pin.
- Put the ribbon cable with the text facing up in the connector. You can open it by pulling on the black part (gently).
- Attach the Raspberry Pi on top of the screen PCB using the four screws.
- Plug black jumper cable into GND, red jumper cable in 5V and ribbon cable with text towards bottom in the appropriate connector.

<img src="./images/raspberry-v4-pinout.png" alt="./images/raspberry-v4-pinout.png" width="80%" class="center">

## Links

- [setup screen](https://www.instructables.com/id/Raspberry-Pi-Touchscreen-Setup/)
