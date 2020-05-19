# mljs/spectra-processing/xy/align.js

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/mljs/spectra-processing](https://github.com/mljs/spectra-processing)

## Goal

Add a method to this array manipulation package which allows to "align" the data of two spectra. This means that if x values of the two spectra are close to each other, they are considered as common and the corresponding y values are put in the same slot.

## Context

This method will be needed to make a similarity algorithm for mass spectroscopy spectra.