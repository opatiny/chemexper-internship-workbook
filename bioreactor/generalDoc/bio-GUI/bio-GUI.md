# Bioreactors GUI user-guide

This doc was written on the 2020.06.16, and the interface may have changed significantly since then.

## General

The main menu can be accessed using the button in the top-left corner. Clicking the button displays a sidebar menu with a list of all the available tabs.

The GUI of the bioreactors is composed of the tabs:

- _Advanced_
- _Inspect logs_
- _Debug_

## Advanced

The _Advanced_ tab allows you to select one of the serial devices that has been identified as a bioreactor. Once the device is selected, you can see its current settings. This information is updated every second. Additionally, you can send any serial command, as you would from the Arduino IDE serial monitor.

<img src="./images/bioreactor-gui-advanced.png" alt="./images/bioreactor-gui-advanced.png" width="100%" class="center">

## Inspect logs

The _Inspect logs_ tab allows you to see the logs stored in the database. Charts that display the liquid temperature and the weight are shown. The user can set the time spans using a dropdown menu.

<img src="./images/bioreactor-gui-inspectLogs.png" alt="./images/bioreactor-gui-inspectLogs.png" width="100%" class="center">
