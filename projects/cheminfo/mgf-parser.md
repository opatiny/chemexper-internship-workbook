# cheminfo/mgf-parser

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/cheminfo/mgf-parser](https://github.com/cheminfo/mgf-parser)

## Goal

Create a parser that inputs an `mgf` format database and converts it into a `JSON`.

## Context
We are in the scope of GCMS (gaz chromatography mass spectroscopy) data analysis. Some researchers at UNIGE, specialized in natural products, want to identify what molecules they have inside of a very large mix. Doing so, they can determine which molecules are already known and therefore not interesting to study (by study, we mean for example test for anti-bacterial properties). To quickly identify known molecules, they have created a database which contains predicted mass spectra for known pure products (like caffeine). The prediction is useful because you can not be possessing some of the product in a lab, and you can therefore not make a mass spectrum.

Since you have the predicted mass spectra for a lot of molecules, you can then quickly compare experimental mass spectra to them and determine wether the product is known or not.

The database we have been provided is in the MGF format. We want to parse it to then be able to write a comparison script.

**N.B.:** "Natural products are chemical compounds found in nature originating in plants, animals, and microbial and marine sources. Such products are important in the cosmetics, food, and nutrition industries because of their many beneficial properties and positive commercial image. Many active pharmaceutical compounds are natural products or derivatives of natural compounds, and it is estimated that some 40% of the drugs marketed today are derived from chemical structures found in nature. (https://www.molport.com/shop/natural-compound-database)"

**Client:** UNIGE

## Options

## Packages used

- `ml-array-xy-sort-x`: sort by x plot (format: `{x: [], y: []}`), we used it to sort the mass spectrum data)
- `ml-arrayxy-uniquex`: used to remove any recurring values from sorted plot data (format: `{x: [], y: []}`)
- `ml-array-normed`: used to normalize the ms spectra (sum of y values = 1) and to rescale the MS spectrum (rule of three bringing max peak to a given value)

## `verifyData`

We created a `verifyData` folder above `src`. In this folder, we wrote a function which allows to verify the data quality by comparing the mono-isotopic mass to a reference. The reference mass is returned by the `mf-parser` package using `new MF(mf).getInfo()`. This function returns data on a molecule based on the molecular formula. We get the molecular formula by using the `openchemlib` `Molecule` class. We create a new instance of `Molecule` based on the SMILES found in the data to verify.

```js
const molecule = Molecule.fromSmiles(dataSmiles);
let mf = molecule.getMolecularFormula().formula
```
