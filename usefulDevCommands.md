# Various useful development commands

## Run tests

```bash
npx jest --watch
```
This will run all tests in the folders called __tests__ whenever a file is modified.

## Run a script automatically on change: `nodemon`

The file will be run whenever any of the project's files is modified and saved.

```bash
npm i nodemon
npx nodemon ./path/to/file.js
```

Use Ctrl+C to exit.