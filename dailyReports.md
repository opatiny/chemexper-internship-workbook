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