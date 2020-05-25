# NPM developer command and packages

## Run tests
### `jest`
To run tests and check that the code works:

```bash
npx jest --watch
```
This will run all tests in the folders called `__tests__` whenever a file is modified.

WARNING: This command has to be run at the first level of the repository!

### `npm run test`

To run more complete tests than with `jest` and avoid having tests failing in GitHub. Do this before pushing.

Just running `jest`does not execute the same tests as in GitHub, which means that when you push, some tests can be [indicated as failing](../variousIT/github.md). 

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

## Apply Cheminfo formatting rules

To apply the auto formatting rules of Cheminfo, you have to do the following things inside of your project folder.

WARNING: Be super careful with the commas and alphabetical order when editing `package.json`.

### Add dev dependencies

Add these lines to the dev dependencies of `package.json`:
```json
    "prettier": "^2.0.4",
    "prop-types": "^15.7.2",
    "eslint": "^6.8.0",
    "eslint-config-cheminfo-react": "^4.0.0",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-jest": "^23.8.2",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-react": "^7.19.0",
    "eslint-plugin-react-hooks": "^3.0.0"
```

Then run `npm i` to have all the packages installed.

### `eslintConfig`

In `package.json`, replace the `eslintConfig` object (if it exists) by: 

```json
  "eslintConfig": {
    "extends": "cheminfo-react",
    "parser": "babel-eslint",
    "rules": {
      "import/no-unresolved": "off"
    }
  },
```

### Create or replace `.eslintrc.yml`
If it doesn't exist, create a `.eslintrc.yml` file at the first level of the project.

If your project is a module, this file should already exist. If you are creating a project from scratch, create the file. This should be the contents of the file:
```yml
extends: cheminfo
``` 

### Create or replace `.prettierrc` file

If it doesn't exist, create a `.prettierrc` file at the first level of the project and put this in it:

```
{
  "arrowParens": "always",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

### Add some scripts

In `package.json`, add these lines to the `scripts` object: 

```json

    "eslint": "eslint src --ext js,jsx",
    "eslint-fix": "npm run eslint -- --fix"
```

Run `npm run eslint-fix` to see the formatting errors.
