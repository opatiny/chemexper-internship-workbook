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

If the package is installed globally:

```bash
node-red
```
**NB:** the package files are stored in `~/.node-red/`

Once the server is running, you can access the GUI on port 1880:

```url
http://127.0.0.1:1880/
```

## Flows

### Enable / Disable

Double-click on flow name, at the bottom of the tab, click on the "Enabled" or "Disabled" button to toggle state.

### Subflows

Subflows are a group of nodes that appear as one node in the flow in which they are used. You can then do the same ocmplex thing many times by just copy-pasting the subflow node.

#### Create a subflow
Select some nodes and go to "Settings -> Subflows -> Selection to subflow".

#### Edit a subflow

Double-click on an instance of the subflow. You have a button "Edit subflow template" which appears on the right.

Alternatively, go tho the nodes manager (left sidebar) under the "Subflows" tab and double-click on one of the subflow nodes.

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

### `link in` and `link out`

These two nodes allow you to make virtual links between flows. It is a kind of alternative to sublflows.

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

### Set / get context inside a function

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

## Environment variables

Environment variables are variables that you can access from anywhere in a node-red project. Their value is set when node-red is started. The command below would start node-red with an environment variable called `ENV_VAR`, set to the value `1234`.

```bash
ENV_VAR=1234 node_red
```
### Set node property to env var

In all nodes, you can call env var by using the syntax: `${ENV_VAR}`.

**Warning:** A node property cannot be an environment variable "concatenated" with something else.

### Access from functions

```js
let test = env.get("ENV_VAR");
```

## Plugins/ non-standard nodes

In node-red, all the nodes that you have available are called the "palette". You can add some new nodes by going in Settings -> Manage Palette -> Install.

### Some useful plugins

- `node-red-dashboard`: To build GUI with graphs
- `node-red-contrib-influxdb`: To read and write to an InfluxDB database
- `node-red-contrib-telegrambot`: To send / reply to message on Telegram
- `node-red-contrib-simple-gate`: To block some messages on a flow
- `node-red-node-ui-table`: Display tables in dashboard


## Add non-standard npm packages

If you want to use an npm package that ain't specific to node-red:
- open the folder `~/.node-red` in vscode
- run `npm i <packageName>`
- add a new property to the `functionGlobalContext` object of `settings.js` similar to this:

```js
LegoinoUtil:require('legoino-util'),
```

## Projects

### Enabling

Node-red projects allow to have version control. They can be enabled in `settings.js`:
```js
    editorTheme: {
        projects: {
            // To enable the Projects feature, set this value to true
            enabled: true
        }
    }
```

Once this is done, the next time node-red is restarted, it will ask you if you want to create a project with the current flows. Follow the steps and you will create your first project.

### Add remote

If you want to add a remote GitHub repository to your node-red project, follow this procedure:
- create new github repository
- got to "Settings -> Project -> Project Settings -> Settings -> Project remotes" and click on "add remote" -> copy paste the link from the github repo (e.g. ssh://git@github.com:opatiny/historical-weather-dashboard.git)
- access the project handler in the right sidebar, in the tab with the little branch icon -> this is where you add and commit things
- in this sidebar, click on "Commit History"
- On the right, you have a little icon with one arrow up and one arrow down -> this is where you will be able to push/pull
- this is where you set the remote branch on which you want to commit. Type "master" in the input text field -> it lets you create a new remote branch called "origin/master"
- once the branch is created, you can pull and push changes to github

**Warning:** The file changes are updated only once the flows are deployed!

## Disable encryption

If you have checked the "enable encryption" box when creating the project and you do not which the credentials to be encrypted anymore, start by deleting the credentials file (e.g. `flow_cred.json`). Then go to the `.config.json` file and set `projects.<yourProjectName>.credentialSecret` to false. Start node-red over and deploy some changes. The credentials files will be created again, this time not encrypted.

## Problems

- [https://discourse.nodered.org/t/node-red-project-cannot-pull-from-remote-when-repository-is-private/](https://discourse.nodered.org/t/node-red-project-cannot-pull-from-remote-when-repository-is-private/)
- [https://discourse.nodered.org/t/brave-browser-stored-data-charts-have-too-many-x-labels/26487](https://discourse.nodered.org/t/brave-browser-stored-data-charts-have-too-many-x-labels/26487)

## Links

- [Dockerize node-red project](https://nodered.org/docs/getting-started/docker)
- [Iterate on array](https://cookbook.nodered.org/basic/operate-on-array)
