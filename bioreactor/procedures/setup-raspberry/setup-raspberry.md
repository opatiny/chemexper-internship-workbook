# Setting up a Raspberry Pi to use it as bioreactors monitor

[Home](../../../README.md) | [Bioreactor TOC](../../bioreactor.md)

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

You actually do not have to do anything in particular! If the ribbon cable is in the correct orientation (with the text on the OUTSIDE on the curve), the screen should be detected automatically.

So you can just shutdown the Raspberry, then unplug the power, keyboard, HDMI screen and mouse. Finally, power the device up again. You should see the touchscreen lighting up.

## Enable ssh

Just because it is practical.

The doc comes from [here](https://www.raspberrypi.org/documentation/remote-access/ssh/).

- Launch Raspberry Pi Configuration from the Preferences menu
- Navigate to the Interfaces tab
- Select Enabled next to SSH
- Click OK

IP addr: 192.168.1.194

## Install `nvm` as root

Use curl:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

## Install `node.js`

Open a terminal. The command below installs the last stables versions of node.js and npm.

```bash
nvm install stable
```

## Install serial to MQTT bridge

We developed a serial to MQTT bridge that should be running on the computer to which the bioreactors are connected. The bridge serves as an interface between MQTT messages that come from a broker, to serial commands that are sent to the bioreactors over USB.

- Create a folder `~/git/hackuarium/`
- In this folder, run `git clone https://github.com/Hackuarium/legoino-mqtt-bridge.git`
- Inside of the cloned folder, run `npm i` to install all the dependencies

### Testing the bridge

You can start the bridge with the following command:

```bash
npm run start-dev -- -b <urlToBroker> -t bioreactor
```

For example:

```bash
npm run start-dev -- -b mqtt://bioreactor.hackuarium.org:1883 -t bioreactor
```

## Launch bridge on startup using `pm2`

```bash
npm i pm2 --global
```

### Install pm2

This packages allows you to run scripts at boot.

```bash
npm i pm2 --global
```

### Configure startup script

The following command will indicate the exact command you have to use to generate a startup script.

```bash
pm2 startup
```

Once this is done, go to `~/git/hackuarium/legoino-mqtt-bridge` and run the bridge with pm2 (yes, it becomes tedious...):

```bash
pm2 start --name serialMqttBridge npm -- run start-dev -- -b mqtt://bioreactor.hackuarium.org:1883 -t bioreactor
```

Save the startup script new config:

```bash
pm2 save
```

It should work now. You can reboot the raspi and the script should be launched automatically.

### Debugging

To debug, use either `pm2 logs` to see the logs in real time, or use `pm2 monit` to get a whole dashboard in the terminal.

## Running bioreactor UI on startup in full screen

Chromium is the default web browser. You have to edit the file that it executes at boot:

```bash
vi /home/pi/.config/autostart/chromium.desktop
```

Add the following lines to this file:

```bash
[Desktop Entry]
Type=Application
Name=Chromium
Exec=chromium-browser --kiosk --force-device-scale-factor=0.80 <urlToGUI>
```

The `kiosk` option allows to enter full screen. It is a mode where you cannot really see that you are in a browser, and it is difficult to escape. You can however use the following command to kill all windows

The other option rescales all the contents of the web page, so that it fits the raspi screen a little better.

You should replace `<urlToGUI>` with the url to the graphical interface. We deployed one on [https://bioreactor.hackuarium.org](https://bioreactor.hackuarium.org).

### Add touch keyboard for when in kiosk mode

Once you enter the kiosk mode on Chromium, it is pretty difficult to quit, and it does not allow you to access the menu and therefore the touch keyboard we installed previously. To solve this issue, you should install the Chrome extension "[Virtual Keyboard](https://chrome.google.com/webstore/detail/virtual-keyboard/pflmllfnnabikmfkkaddkoolinlfninn?hl=en)".

## Links

- [touch screen keyboard (ribbon cable false in this tutorial!!!)](https://www.instructables.com/id/Raspberry-Pi-Touchscreen-Setup/)
