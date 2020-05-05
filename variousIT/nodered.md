# Node-RED

## Context

## Install

Node-RED is basically an npm package so you can just run:

```bash
npm i node-red
```

## Running

If the package is not installed globally:

```bash
./node_modules/.bin/node-red
```

You can also use `npx` to run it. Use the `--userDir` option to run nodered in a specified folder.

```bash
npx node-red --userDir ./
```

Once the server is running, you can access the GUI on port 8080:

```url
http://127.0.0.1:1880/
```

## Flows

### Enable / Disable

Double-click on flow name, at the bottom of the tab, click on the "Enabled" or "Disabled" button to toggle state.

## Nodes

The nodes are building blocks that you can assemble to build your application. Nodes are connected with wires.

### HTTP request

Be careful when clicking the option to append query parameters! `msg.payload` should be a JSON like this:

```json
{
    "q": "denges",
    "appid": "blablabla",
    "units": "metric"
}
```

If you want to parse the result, in the case it is a JSON, change the return type of the node to "a parsed JSON object".
