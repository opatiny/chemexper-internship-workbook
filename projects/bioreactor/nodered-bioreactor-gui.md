# `opatiny/nodered-bioreactor-gui`

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/opatiny/nodered-bioreactor-gui](https://github.com/opatiny/nodered-bioreactor-gui)

## Goal

Work on the bioreactors GUI using node-red.

## Context

Building a functional and practical user interface to manage the bioreactors is one of the main goal of my internship. We use node-red to build it in order to make it easier for people with little programming experience to modify the GUI according to their needs.

## Database structure

We want to store the parsed logs in an InfluxDB database called `bioreactors`. Each bioreactor should have its own measurement called `bio_<bioreactorID>`.

## Serial commands

The useful serial commands of the bioreactor are:
- `lm`: for multilog, follow it with a number that indicate from which log you want to retrieve the data
- `uc`: to retrieve the current settings

## Packages used

- `legoino-util`: to parse the logs (installed as a global variable)
- `node-red-contrib-loop-processing`: to loop over nodes

## Links
