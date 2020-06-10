# Installing the bioreactor GUI on MacOS

[Home](../../README.md) | [Projects TOC](../projects.md)

The bioreactor user interface is a fairly complex problem involving Node.js, Node-Red, InfluxDB, Mosquitto and a serial to MQTT bridge.

Lets see how to install all of this on a MacOS.

In case you are using a linux distribution, you can likely install all things using `brew` with `dnf`.

## Install or update `brew`

`brew` allows you to install all default packages on MacOS (it is a package manager).

### Install

Refer to [https://brew.sh/](https://brew.sh/).

### Update

```bash
brew update
```

## InfluxDB

### Install

```bash
brew install influxdb
```

### Start server

```bash
influxd
```

### Start client

This command opens a terminal that allows you to query the database and interact with it.

```bash
influx
```

## Mosquitto

`mosquitto` is an MQTT broker.

### Install

```bash
brew install mosquitto
```

Once the install is complete, try running `mosquitto` in a new bash. If this doesn't work, you might have to add a directory to you PATH using:

```bash
echo 'export PATH="/usr/local/sbin:$PATH"' >> /Users/music/.bash_profile
```

Now `mosquitto` should work.

### Start broker

To start an MQTT broker, just type:

```bash
mosquitto
```

This will start the broker on default port 1883.

## Installing Node.js

[Tutorial](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

### Install `nvm`

Use curl:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Check nvm version:

```bash
nvm --version
```

### Install node

Use this to install Node.js v10 (necessary at some point for the bridge to work!):

```bash
nvm install 10
```

Or in case you want the latest version:

```bash
nvm install node
```

Installing `node` gives you access to `npm` commands.

## Serial to MQTT bridge

Project: [https://github.com/Hackuarium/serial-mqtt-brigde](https://github.com/Hackuarium/serial-mqtt-brigde)

### Install

```bash
git clone https://github.com/Hackuarium/serial-mqtt-brigde.git
```

Then go to the repository folder and run `npm i` to get the dependencies.

**Warning:** One of the dependencies of this project is old and does only work with node 10, so be sure to be using that one when trying to install the dependencies!

### Run

To run in debug mode:

```bash
npm run start-dev
```

Or if you do not need feedback on what is happening:

```bash
npm start
```

## Node-Red

### Install

```bash
npm i -g node-red
```

### Configuration

Running `node-red`once and quitting it will create a `.node-red` folder in your home directory. Go to this folder and open it in vscode. Edit the `settings.js` file:

- enable projects: set `editorTheme.projects.enabled` to true
- disable credentials encryption: uncomment `credentialSecret` and set it to false

### Starting node-red

Just use the command `node-red`. You can then access the IDE by typing `127.0.0.1:1880` in a browser.

A popup appears asking you if you want to create or clone a project.

## Install bioreactor GUI project

Project: [https://github.com/opatiny/nodered-bioreactor-gui](https://github.com/opatiny/nodered-bioreactor-gui)

### Clone project

- In the node-red IDE, after enabling projects, click on "Clone Repository".
- Enter your GitHub username and name
- Enter project name: `nodered-bioreactor-gui`
- Enter repository url (https): [https://github.com/opatiny/nodered-bioreactor-gui](https://github.com/opatiny/nodered-bioreactor-gui)
- Don't add any encryption key
- Click on clone project
- The flows are deployed automatically

**Warning:** You might have a problem with some nodes missing. Then, you have to install the packages from "Menu -> Manage palette"

### Accessing the GUI

The GUI can be accessed on [127.0.0.1:1883/ui](127.0.0.1:1883/ui).

You are done!
