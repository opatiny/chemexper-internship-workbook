# Daily reports

## March

### 2020.03.30 - w1

- set up work environment
- started working on a small project for Firmenich: `chemexper/reference-database`
- created an npm module using `yo cheminfo-generator`
- set up a web server with `fastify`
- auto run script on change with `nodemon`
- started writing test cases

### 2020.03.31

- globally finished `chemexper/reference-database`
    - tested the web server using `loadtest`
    - implemented SMILES filtering
- learned how SMILES work
- started  working on a project for UNIGE: `cheminfo/mgf-parser`

## April

### 2020.04.01

- finished `cheminfo/mgf-parser`: the module only has one method, `parse()`, which allows to parse an mgf file into a JSON
    - wrote tests
    - made a function to verify data quality (`verifyData()`)
- discussed with Luc on how to do the similarity between predicted and experimental MS data

### 2020.04.02

- added options to `cheminfo/mgf-parser` and corresponding tests
published my first package on npm: `cheminfo/mgf-parser`
- started developing a new method for the `mljs/spectra-processing` package, to find common x values between 2 spectra

### 2020.04.03

- enhanced reference-database coverage to reach 100% and found bugs doing so
- wrote the `align` method for `mljs/spectra-processing` and made loads of test cases
- started working on `cheminfo/dereplication`
- published `align` to npm -> new version of `spectra-processing`
- added new feature to `cheminfo/mgf-parser` : it now accepts other delimiters for the spectrum
- pushed `cheminfo/mgf-parser` to npm

### 2020.04.06 - w2

- fixed `cheminfo/mgf-parser` to handle empty lines
- followed NMR introduction lesson
- worked on `cheminfo/dereplication`: trying to export predicted and experimental data as JSON
    - also wrote a script to check if all entries of experiments have a match with predictions

### 2020.04.07

- started working with issues in github
- work all day on `cheminfo/dereplication`
    - enhanced the generation of `predictions.json` and `experiments.json`
    - wrote `loadData.js`, `similarity.js` and `bestMatch.js`
    - wrote tests for `loadData.js` and `similarity.js`

### 2020.04.08

- worked all day on `cheminfo/dereplication`
    - fixed a few bugs
    - wrote a lot of documentation
    - create git pages for the project 

### 2020.04.09

- worked all day on `cheminfo/dereplication`
    - created the `testSimilarity` function to get the `matchIndex` for many experiments
    - created `testAllAlgorithms` to run `testSimilarity` for all the similarity algorithms of `ml-array-distance`
    - wrote a lot of doc about how varying parameters influences the `matchIndex`
- added a new option to `align()` (`ml-spectra-processing`) which allows to weight the delta depending on the X values of the spectrum

### 2020.04.14 - w3

- worked all day on `cheminfo/dereplication`
    - added `massWeight` and `norm` options to nearly all options. THis allows to do everything from the highest level function: `testSimilarity()`
    - readapted docs
    - created `median()` method optimized for the application
    - added the `massFilter` option which allows to filter the predictions to test, by comparing the experiment's and the prediction's `PEPMASS`

### 2020.04.15

- preparing this afternoon's presentation of `dereplication` to the people of UNIGE
- refactoring the options of `cheminfo/dereplication` in a new branch `refactor-options` -> be careful with the branches!
- presentation of the project and feedback

### 2020.04.16

- fix last bugs on branch `refactor-options` and merge with master
- add new method to `mljs/spectra-processing/xy`, `getNMaxY` and pushed to npm
    - this function takes in a spectrum and returns a filtered spectrum with only the N most intense peaks.
- added an option to `loadData` to use this new function instead of merging too close x values
    - it gave bad results...
- started learning React
