# `opatiny/nodered-bioreactor-gui`

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/opatiny/nodered-bioreactor-gui](https://github.com/opatiny/nodered-bioreactor-gui)

## Goal

Work on the bioreactors GUI using node-red.

## Context

Building a functional and practical user interface to manage the bioreactors is one of the main goal of my internship. We use node-red to build it in order to make it easier for people with little programming experience to modify the GUI according to their needs.

## Database structure

We want to store the parsed logs in an InfluxDB database called `bioreactors`. Each bioreactor should have its own measurement called `bio_<bioreactorID>`.

## Packages used

- `legoino-util`: to parse the logs

## Links
