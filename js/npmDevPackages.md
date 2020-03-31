# Various useful bash development commands

## Run tests: `jest? 

```bash
npx jest --watch
```
This will run all tests in the folders called `__tests__` whenever a file is modified.

## Run a script automatically on change: `nodemon`

The file will be run whenever any of the project's files is modified and saved.

```bash
npm i nodemon
npx nodemon ./path/to/file.js
```

Use Ctrl+C to exit.

## Check all dependencies updates: `ncu`

This is an npm package that has to be installed globally. It then gives the command `ncu`. When this command is run, the package verifies wether there is a new version for all the dependencies of the project.

### Install

```bash
npm i --global npm-check-updates
```

### Usage (to run regularly!)

```bash
ncu -u
```

