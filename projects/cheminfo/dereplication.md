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
5. Write a method `similarity()` that returns the similarity between two spectra. The similarity function should be an option, default is `cosine()`. Main functions used: `align()`, `norm()`and `cosine()`.
6. Write a function `findBestMatches()` that runs `similarity()` for one experimental spectrum and an array of predicted spectra. It should return the best matches and meta-information.

## Packages used

- `mgf-parser`: To parse the mgf files
- `papaparse`: To parse the csv files
- `openchemlib`: Obtain the id code from SMILES
- `ml-array-xy-weighted-merge`: Weighted merge of x values that are too close to each other in `loadData.js`
- `ml-spectra-processing`: Use the `align` method to align experimental and predicted spectrum for similarity
- `ml-distance`: Access to the similarity algorithms (e.g. cosine similarity)
- `ml-array-normed`: To normalize the aligned spectra
- `ml-array-min`, `ml-array-max`, `ml-array-mean`, `ml-array-median`: To generate stats on the matchIndex of many experiments
- `debug` (dev): to output things from `testSimilarity()` in the console

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

### Step 6: Bad similarity results

After the `findBestMatches()` function was written, we started testing it on 10 experiments and the complete predicted data. To evaluate if the similarity is good or not, we want to optimize the `matchIndex`: the index of the exact match (the predicted spectrum that actually corresponds to the experiment) in an array of all predictions sorted by similarity with the experiment. 

Ideally, `matchIndex`should be 1, which would mean that the best similarity is between the experiment and the correct predicted spectrum.

The first tests we made, however, were fairly bad. Here is what we obtained for the first 10 experiments with all default options (mergeSpan = 1, alignDelta = 1):

```bash
experiment   common     matchIndex
1            32         4260
2            31         71345
3            30         40876
4            18         98723
5            11         55451
6            15         11970
7            14         48598
8            21         7381
9            36         39856
10           38         17944
```

To enhance this, we thought about setting the `mergeSpan` of `loadData()` to 0.005, but it did not help.

```bash
experiment   common     matchIndex
1            45         4879
2            32         65890
3            31         41169
4            27         137461
5            33         108171
6            19         24138
7            22         30797
8            32         7090
9            43         17822
10           44         16573
```

Then, we tried changing the `alignDelta` option of `similarity()` to 0.005.

Changing both: `mergeSpan` = 0.005, `alignDelta` = 0.005

```bash
experiment   common     matchIndex
1            45         4879
2            32         65890
3            31         41169
4            27         137461
5            33         108171
6            19         24138
7            22         30797
8            32         7090
9            43         17822
10           44         16573
```

