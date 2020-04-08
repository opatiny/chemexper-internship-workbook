# `chemexper/reference-database`

Link: [https://github.com/cheminfo/mgf-parser](https://github.com/cheminfo/mgf-parser)

## Goal
Filter a database in the browser based on search parameters in the url. Boiling point, melting point, molecular formula and SMILES are the possible filters, with operators "" (equal), >, <, >=, <= and ~.

## Context
Allow people that work on perfumes to see wether they have already studied a molecule or not.

**Client:** Firmenich

## Query example

```
http://127.0.0.1:8080/search?smiles=~C=CC(C)(C)C&bp=<=100
```

## Possible query parameters

- Melting point `mp` can be used with operators '>', '<', '>=', '<='
- Boiling point `bp` can be used with operators '>', '<', '>=', '<='
- Molecular formula `mf` can be used with no operators
- SMILES `smiles` can be used with operator '~' (no stereochemistry)

## Packages used
- `fastify`: allowed to create the web server easily
- `mf-parser`: convert molecular formula to mono-isotopic mass
- `openchemlib`: huge library to do chemistry stuff in js, we used the `Molecule`class to convert SMILES to ID code
- `loadtest` (dev): allows to test the responsiveness of the web server  
  ```bash
  loadtest -n 10000 -c 10 \"http://127.0.0.1:8080/search?smiles=~C=CC(C)(C)C\"
  ```
  `-n`: total number of requests, `-c`: number of simultaneous requests

## Developer bash commands

- `npm start`: start the web server
- `npm run stress`: test the web server speed and stress resistance (`loadtest`)
