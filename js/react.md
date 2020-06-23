# React

## A React exercise

I have followed a tutorial to start getting used to React, the resulting code is in its own repository: [https://github.com/opatiny/react-exercise](https://github.com/opatiny/react-exercise).

## Context

React is a library that was created and is maintained by FaceBook. It allows to make responsive, mobile-friendly GUIs. Each thing on the webpage / interface is inside of an independent components.

**Important:** When using React, you have to use **immutable javascript**, which means that a copy of an object/array must be made every time the structure is modified.

## Create new React+Tailwind project with `yo`

We have created a new `yo` generator for frontend projects requiring React and Tailwind. It can be used by first installing globally `yo` and the generators package:

```bash
npm i -g yo generator-cheminfo
```

Then, create a folder in which you want your new frontend repository to be and run in it:

```bash
yo cheminfo:react-frontend
```

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

Go in the `build` folder, right-click on `index.html` and select "Run with Live Server" (vscode extension). A window pops-up in your default browser.

## Files conventions

## Components

There should be one component definition per file.

**Standard syntax:** components' names should have an uppercase first letter. Each component contains an independent building block of the app. They are class-based and function-based components, but the class ones are outdated.

### Extension

React components are written in javascript, but since the syntax is very different from normal js, the files have their own file extension: `.jsx`. However, you can use `.js`.

## `props`

All components accept a `props` object as a default parameter. The props are passed in this way on the component call:

```js
<Header title={'Hello world'} />
```

In this example, a prop `title` is passed to the component `Header` with value `Hello world`.
The `Header` component, on its side, would refer to the props as follows:

```js
import React from 'react';

export default function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
```

## Hooks

Hooks are a recent addition to React which allow you not to use classes anymore (no more class based components).

### `useState()` - State variables

Often, you want to share variables between different component -> pass a parameter from parent to child. These variables are called "state variables, and they are defined as follows:

```js
const [state, setState] = useState(initialState);
```

`state`is the the new state variable, `setState` is a function that allows to change its value and `initialState` is the initial value of the variable. The name of the function to set the value should always start with the word `set`.

State variables and the functions to set them can be passed as `props` to components.

### `useEffect()`

The `useEffect` hook allows you to listen to changes in the DOM, or changes of state variables. You can therefore execute a function only when there is a change. You can call this function inside of a component, before the `return`.

```js
const [results, setResults] = useState({});

useEffect(() => {
  console.log(results);
}, [results]);
```

In the above example, the `results` variable would be printed in the console whenever any of the components of the app changes its value using `setResults`

## VScode plugins

To create components more easily: `ES7 React/Redux/GraphQL/React-Native snippets`

To create a new component:

- create new file.js
- in it, type
  - `rce+tab` for class-based component
  - `rfc+tab` for function-based component

## Vocabulary

- **DOM**: Document Object Model -> the hole HTML
- **jsx**: React files extension -> because when you use React, the syntax is very different from standard js
