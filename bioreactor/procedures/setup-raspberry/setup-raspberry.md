# Setting up a Raspberry Pi to use it as bioreactors monitor

[Home](../../../README.md)

## What you need

- Raspberry Pi v4
- SD card (empty, at least 8GB)
- Raspberry Pi v4 USB-C power supply
- Raspberry Pi 7 inch touchscreen display

<img src="./images/raspi-starter-kit.JPG" alt="./images/raspi-starter-kit.JPG" width="80%" class="center">

- Additional HDMI screen
- HDMI to micro-HDMI cable
- Mouse
- Keyboard

## Install the OS

I tried to use the on MacOS **Raspberry Pi Imager**.

What you must do in this step is flash the SD card with the recommended image of Raspberry Pi OS.

Download the software [here](https://www.raspberrypi.org/downloads/) and follow the instructions in the software. Flashing takes around 10min.

Put the SD card in the Raspberry Pi.

## Fix screen to Raspberry

The screen comes with one ribbon cable, four jumper cables and four screws.

- Plug the red jumper cable on the 5V pin of the screen and the black jumper cable on the GND pin.
- Put the ribbon cable with the text facing DOWN in the connector (the text has to be on the outside of the curve in the end!). You can open it by pulling on the black part (gently).
- Attach the Raspberry Pi on top of the screen PCB using the four screws.
- Plug black jumper cable into GND, red jumper cable in 5V and ribbon cable with text towards the TOP in the appropriate connector.

<img src="./images/raspberry-v4-pinout.png" alt="./images/raspberry-v4-pinout.png" width="60%" class="center">

<img src="./images/touchscreen-cables.jpg" alt="./images/touchscreen-cables.jpg" width="60%" class="center">

<img src="./images/raspi-cables.jpg" alt="./images/raspi-cables.jpg" width="60%" class="center">

## Check that Raspberry boots properly and configure it

- Connect the HDMI screen, mouse and keyboard to the Raspberry
- Power up the Raspberry
- Be sure that the screen source is HDMI
- You should see the Raspberry OS boot screen appear
- A configuration window pops up. Follow the instructions, this will configure localization, keyboard and wifi.

## Add touch keyboard

- Open a terminal on the Raspberry
- Do `sudo apt-get install matchbox-keyboard`
- Reboot
- The keyboard should appear under Menu -> Accessories -> Keyboard

## Configure Raspberry to use the touchscreen as default screen

You actually do not have to do anything in particular! If the ribbon cable is in the correct orientation (with the text on the OUTSIDE), the screen should be detected automatically.

So you can just shutdown the Raspberry, then unplug the power, keyboard, HDMI screen and mouse. Finally, power the device up again. You should see the touchscreen lighting up.

## Links

- [touch screen keyboard (ribbon cable false in this tutorial!!!)](https://www.instructables.com/id/Raspberry-Pi-Touchscreen-Setup/)
