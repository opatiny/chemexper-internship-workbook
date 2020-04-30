# How to use tailwind CSS?

## Context

Tailwind CSS is an npm package that allows you to replace standard css classes by inline styling. You have a bunch of options to chose from to change things like size, color, placement, etc.

## VScode plugins

- **Tailwind CSS IntelliSense**: autocompletion and info on hover -> use `Ctrl+space` to show autocompletion if it's not showing by default
- **Tailwind Docs**: easily access tailwind docs

## Create new React+Tailwind project with `yo`

Refer to [the react doc](./react.md).

## Install in an npm project

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

At this point, you should be able to use all the tailwind styling.

## Templates

### Form
[https://tailwindcomponents.com/component/simple-form-field](https://tailwindcomponents.com/component/simple-form-field)

### Popup window / Tooltip
 [https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/tooltips/right](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/tooltips/right)

You can base yourself on this example file: [Tooltip.js](./examples/Tooltip.js).

### Sidebar
[https://tailwindcomponents.com/component/sidenav](https://tailwindcomponents.com/component/sidenav)

## Links

- Integrating Tailwind UI in react project: [https://tailwindui.com/documentation#integrating-with-javascript-frameworks](https://tailwindui.com/documentation#integrating-with-javascript-frameworks)