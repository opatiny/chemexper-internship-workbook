# How to use tailwind CSS?

## What it does

It allows you to replace standard css classes by inline styling. You have a bunch of options to chose from to change things size, color, etc.

## Install

Use `create-react-app` to start a project and in this folder:

```bash
npm install tailwindcss
npx tailwind init tailwind.config.js
cd src ; mkdir css ; cd css ; touch tailwind.css; touch main.css
```

In `tailwind.css`:
```css
/* Init Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Custom CSS */
```

Copy this file at project first level: [tailwind.js](./examples/tailwind.js).

Modify `package.json` scripts to include these four:
```json
    "build:css": "postcss src/css/tailwind.css -o src/css/main.css",
    "watch:css": "postcss src/css/tailwind.css -o src/css/main.css -w",
    "start": "npm watch:css & react-scripts start",
    "build": "npm run build:css && react-scripts build",
```

Build the project -> this will fill `main.css`:
```bash
npm run build
```

## Links

- Integrating Tailwind UI in react project: [https://tailwindui.com/documentation#integrating-with-javascript-frameworks](https://tailwindui.com/documentation#integrating-with-javascript-frameworks)