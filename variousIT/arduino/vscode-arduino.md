# Using VS Code Arduino extension

## Context

The bioreactor project is using an Arduino-compatible micro-controller and it has been initially programmed with the [Arduino IDE](https://www.arduino.cc/en/main/software). However, this program is not the best for debugging, for it does not feature auto-completion and good color syntaxing. For these reasons, we want to be able to program Arduino micro-controllers from [VS Code](https://code.visualstudio.com/), which is the IDE we use for all programming projects. VS Code has an extension that serves this purpose.

## Install

You must have the Arduino IDE installed for the extension to work!

Go to the extensions tab and search for "Arduino". Click install.

## Arduino IDE path

You might have troubles with the path of the Arduino IDE, which is a setting of the extension.

To open vscode settings, type shift+cmd+p and type "Preferences: Open Workspace Settings". Then, type `arduino.path` and modify the preference to match the path where you installed the Arduino application.

## Commands

Use shift+cmd+p to access commands menu. These are a few basic commands:

- Arduino: Change Board Type
- Arduino: Select Serial Port
- Arduino: Change Baud Rate
- Arduino: Verify
- Arduino: Upload

**N.B.:** The board type, baud rate ans serial port currently in use are indicated in the footer of vscode.

## Serial monitor

Commands to open the **read-only** serial monitor:

- Arduino: Open Serial Monitor
- Arduino: Close Serial Monitor

To write to the serial port, you can however use the command:

- Arduino: Send Text to Serial Port
