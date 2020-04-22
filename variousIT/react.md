# React

## A React exercise

I have followed a tutorial to start getting used to React, the resulting code is in its own repository: [https://github.com/opatiny/react-exercise](https://github.com/opatiny/react-exercise).

## Context

React is a library that was created and is maintained by FaceBook. It allows to make responsive, mobile-friendly GUIs. Each thing on the webpage / interface is inside of an independent components.

When using React, you have to use **immutable javascript**, which means that a copy of an object/array must be made every time the structure is modified.

## Create a new React app

```bash
npx create-react-app .
```

## Run the server

Once the server is started, it will update automatically when changes are done in the code.

```bash
npm start
```

## Build

Once the app works as expected, you want to build it to make it executable by a browser. To do that, in a `create-react-app` project, you have to add a line to the first level of `package.json`. This allows to build using relative paths. Having relative paths is mandatory for the app to be launched properly.

Add this line to `packages.json`:

```json
  "homepage": "./",
```

Once this is done, proceed to building the project with:
```bash
npm run build
```

This creates a `build` folder at the first level of the project.

## Running the build

Go in the `build` folder, right-click on `index.html` and select "Run with Live Server". A window pops-up in your default browser.

## Components

Standard syntax: components' names should have an uppercase first letter. Each component contains an independent building block of the app. They are class-based and function-based components, but the class ones are outdated.

## VScode plugins

To create components more easily: `ES7 React/Redux/GraphQL/React-Native snippets`

To create a new component:
- create new file.js
- in it, type 
    - `rce+tab` for class-based component
    - `rfc+tab` for function-based component

## Vocabulary

- DOM: Document Object Model -> the hole HTML
- jsx: React files extension -> because when you use React, the syntax is very different from standard js