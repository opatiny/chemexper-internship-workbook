# `cheminfo/dereplication`

## Goal
Write a similarity algorithm that allows to find best matches of predicted mass spectra for an experimental mass spectrum.

## Context

Same as [mgf-parser](./mgf-parser.md).

**Client:** UNIGE

## Main steps

1. Parse experimental and predicted mass spectra data that are in .mgf, .csv and .tsv formats. Then generate two JSON files with the data (`experiments.json`and `predictions.json`).
2. Verify if each experimental spectrum has a match in the predictions using the idCode.
3. Generate a file `matchingExperiments,json` with only the spectra with a corresponding prediction.
4. Write a method to load the experimental and predicted data json files and apply a weighted merge to the X values of all the spectra.

## Packages used

- `mgf-parser`: To parse the mgf files
- `papaparse`: To parse the csv files
- `openchemlib`: Obtain the id code from SMILES
- `ml-array-xy-weighted-merge`: Weighted merge of x values that are too close to each other in `loadData.js`
- `ml-spectra-processing`: Use the `align` method to align experimental and predicted spectrum for similarity
- `ml-distance`: Access to the similarity algorithms (e.g. cosine similarity)
- `ml-array-normed`: To normalize the aligned spectra

## Problems

### Handling very large files

While wanting to parse the database, we had a problem with node.js, which threw the error:

```bash
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

Indeed the file was too big to be handled by node as it is. To solve this, we can use the option `--max-old-space-size` like so:

```bash
node --max-old-space-size=8192 -r esm combineMgfCsv.js
```

### Verify if experiments have a match in predictions

We tried to use the InChi to see wether each experiment has a prediction. However, this did not work, because many experiments did not have one. Therefore, we had to find another unique identifier to match predictions and experiments.

We decided to use `openchemlib`and to generate the id code of the molecules using the SMILES. Yet again, around half of the experiments did not have a valid SMILES. It appears that the molecule either have the SMILES or the InCHi. 

We will therefore have to find a way to convert InChi into SMILES, to be able to then work with the other half of the experimental data.
