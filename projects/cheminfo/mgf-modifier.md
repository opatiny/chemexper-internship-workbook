# `cheminfo/mgf-modifier`

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/cheminfo/mgf-modifier](https://github.com/cheminfo/mgf-modifier)

## Goal

Write an application specific script that allows to parse an MGF file and add some information inside. In our case, we want to add the `idCode`, `idCodeNoStereo` and SMILES. After the information is added, the script should regenerate an MGF.

## Context

This is necessary to enhance the `dereplication` project. It might be useful in the web view, which accepts mGF files as input ([https://tinyurl.com/y8bxmqdd](https://tinyurl.com/y8bxmqdd)).

## Packages used

- `mgf-parser`: To parse raw data
- `mgf-generator`: To generate the modified MGF at the end
- `openchemlib`: To get `idCode` and `idCodeNoStereo` from SMILES
- `debug`(dev): For debug messages
