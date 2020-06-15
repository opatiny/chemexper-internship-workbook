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

## `npm init`
To create a `package.json` file in a new Node.js project.

## `npm home`: Jump to a package doc from command line

```bash
npm home aPackageName
```

Opens a new tab in a browser on the package github repo main page.

## `npm link`

This sets the project you have locally as the default with which to work. This means that you can easily work on projects that depend on one another without having to release every time you want to test.

### How to use it

First, go in the folder where you have the package (`modifiedPackage`) that you just modified and type `npm link`. Then, go to the folder of a project which has the linked project as a dependency and run `npm link modifiedProject`. You are now working with the local version of that project.

### Using npm version again

To use the released version of the package again, just run `npm i`.

## `npx`: Run packages that are not global from bash

When a package is installed globally, it's name can (often) be used as a normal bash command. If it is not global, however, you have to preceed the package name by the command `npx`.

```bash
npx jest --watch # for example
```

## `uninstall`: Uninstall package

```bash
npm uninstall yourPackage
```