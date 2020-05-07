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

### `inject` node run on startup

`inject` node allows you to input a variable on a flow. If you want it to inject a value on node-red startup, check the "Inject once after ... seconds, then" checkbox.

## Context
[https://nodered.org/docs/user-guide/context](https://nodered.org/docs/user-guide/context)

Node-red context allows to save state variables and share it between nodes/flows without using msg!

### Enabling
You can enable the context in `settings.json`, by setting the `contextStorage` property to this:

```js
contextStorage: {
   default: "memoryOnly",
   memoryOnly: { module: 'memory' }, // storing values in RAM -> lost if node-red is restarted
   file: { module: 'localfilesystem' } // storing data to file every 30s -> permanent
}
```

### Set a context variable easily

Use the `change` node and add a new property to "flow".

### Set / get context from inside function

Use the following syntax:
```js
var myCount = flow.get("count"); // get context variable
flow.set("count", 123); // set context variable
```

### Set / get parent context variable

If you are inside of a subflow and want to modify the context of the flow calling the subflow, you have to use the `$parent` variable:

```js
var myCount = flow.get("$parent.count"); // get context variable of parent
flow.set("$parent.count", 123); // set context variable of parent
```

## Plugins/ non-standard nodes

In node-red, all the nodes that you have available are called the "palette". You can add some new nodes by going in Settings -> Manage Palette -> Install.

### Some useful plugins

- `node-red-dashboard`: To build GUI with graphs
- `node-red-contrib-influxdb`: To read and write to an InfluxDB database
- `node-red-contrib-telegrambot`: To send / reply to message on Telegram
- `node-red-contrib-simple-gate`: To block some messages on a flow
