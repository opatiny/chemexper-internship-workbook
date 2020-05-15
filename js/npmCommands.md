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

## `npx`: Run packages that are not global from bash

When a package is installed globally, it's name can (often) be used as a normal bash command. If it is not global, however, you have to preceed the package name by the command `npx`.

```bash
npx jest --watch # for example
```

## `uninstall`: Uninstall package

```bash
npm uninstall yourPackage
```