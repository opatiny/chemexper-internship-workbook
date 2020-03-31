# `npm` useful commands

## `npm i` options

`npm i ...` is equivalent to `npm install ...`

### `-g`
Installs a package globally: this means that it will be accessible from every project on the computer, until `node` is updated (then all global packages are lost).

```bash
npm i -g aPackage
```

### `--save-dev`

Modifies `package.json`to add the package (and its version) to the dev dependencies.

```bash
npm i aPackage --save-dev
```

## Jump to a package doc from command line: `npm home ...`

```bash
npm home aPackageName
```

Opens a new tab in a browser on the package github repo main page.

## Run packages that are not global from bash: `npx`

When a package is installed globally, it's name can (often) be used as a normal bash command. If it is not global, however, you have to preceed the package name by the command `npx`.

```bash
npx jest --watch # for example
```
