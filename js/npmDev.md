# NPM developer command and packages

## Run tests
### `jest`
To run tests and check that the code works:

```bash
npx jest --watch
```
This will run all tests in the folders called `__tests__` whenever a file is modified.

### `npm run test`

Just running `jest`does not execute the same tests as in GitHub, which means that when you push, some tests can be indicated as failing. You see that tests fail in GitHub when there is a little cross next to the last commit message (see image). By clicking on the cross, you can have all the details of the tests failing.

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

## JS docs

Install the following `cheminfo` package:

```bash
npm i cheminfo-tools --global
```

It will give you the command `cheminfo docs`. Running this command automatically creates a folder `docs`in which the js-docs are processed into an html file. You can also run this command to update the docs if changes have been made.

To open the html file, install the Live Server Code plugin, right-click on `index.html` and click "Open with Live Server".