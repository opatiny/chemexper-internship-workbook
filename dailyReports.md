# Daily reports

## 2020.03.30

- set up work environment
- started working on a small project for Firmenich: `chemexper/reference-database`
- created an npm module using `yo cheminfo-generator`
- set up a web server with `fastify`
- auto run script on change with `nodemon`
- started writing test cases

## 2020.03.31

- globally finished `chemexper/reference-database`
    - tested the web server using `loadtest`
    - implemented SMILES filtering
- learned how SMILES work
- started  working on a project for UNIGE: `cheminfo/mgf-parser`

## 2020.04.01

- finished `cheminfo/mgf-parser`: the module only has one method, `parse()`, which allows to parse an mgf file into a JSON
    - wrote tests
    - made a function to verify data quality (`verifyData()`)
- discussed with Luc on how to do the similarity between predicted and experimental MS data
