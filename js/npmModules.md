# Working with node modules

## Create an npm module from scratch

```bash
npm i yo cheminfo-generator
mkdir newModule
cd newModule
yo cheminfo:module # all project is set up (tests, syntax correction, etc)
```
## Avoid publishing by mistake

To avoid publishing your module by mistake, set the module to private at the first level of the `package.json` file.

```json
  "author": "Océane Patiny",
  "license": "MIT",
  "private": true
  }
```

## How to run `js` files? 

You cannot just use `npm run aFile.js` in modules.

Install `esm`:

```
npm i esm --save-dev
```
Then run the script using `node -r esm path/to/file.js`.

Optionally, add a line to the `package.json` file:

```json
  "scripts": {
    "start":"node -r esm path/to/file.js"
  }
```

Then, you can execute this specific file by running `npm start`.

## Publish an npm package

Get the `cheminfo-publish` command:

```bash
npm i yo cheminfo-publish --global
```

Login to npm on your computer by using `npm login`.

Run: 

```bash
cheminfo-publish
```

This will ask you to confirm the bump (version), chose default. The package is published to npm. Go to the package settings to add some maintainers.

If you do not have `cheminfo-publish`, this is what you would have to do:

- ?? ;)>