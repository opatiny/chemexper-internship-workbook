# `cheminfo/dereplication`

## Goal

## Context

## Packages used

- `mgf-parser`: To parse the ISDB mgf files
- `papaparse`: To parse the ISDB csv files

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