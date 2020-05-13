# Daily reports

## March

### 2020.03.30 - w1

- set up work environment
- started working on a small project for Firmenich: `chemexper/reference-database`
- created an npm module using `yo cheminfo-generator`
- set up a web server with `fastify`
- auto run script on change with `nodemon`
- started writing test cases

### 2020.03.31

- globally finished `chemexper/reference-database`
    - tested the web server using `loadtest`
    - implemented SMILES filtering
- learned how SMILES work
- started  working on a project for UNIGE: `cheminfo/mgf-parser`

## April

### 2020.04.01

- finished `cheminfo/mgf-parser`: the module only has one method, `parse()`, which allows to parse an mgf file into a JSON
    - wrote tests
    - made a function to verify data quality (`verifyData()`)
- discussed with Luc on how to do the similarity between predicted and experimental MS data

### 2020.04.02

- added options to `cheminfo/mgf-parser` and corresponding tests
published my first package on npm: `cheminfo/mgf-parser`
- started developing a new method for the `mljs/spectra-processing` package, to find common x values between 2 spectra

### 2020.04.03

- enhanced reference-database coverage to reach 100% and found bugs doing so
- wrote the `align` method for `mljs/spectra-processing` and made loads of test cases
- started working on `cheminfo/dereplication`
- published `align` to npm -> new version of `spectra-processing`
- added new feature to `cheminfo/mgf-parser` : it now accepts other delimiters for the spectrum
- pushed `cheminfo/mgf-parser` to npm

### 2020.04.06 - w2

- fixed `cheminfo/mgf-parser` to handle empty lines
- followed NMR introduction lesson
- worked on `cheminfo/dereplication`: trying to export predicted and experimental data as JSON
    - also wrote a script to check if all entries of experiments have a match with predictions

### 2020.04.07

- started working with issues in github
- work all day on `cheminfo/dereplication`
    - enhanced the generation of `predictions.json` and `experiments.json`
    - wrote `loadData.js`, `similarity.js` and `bestMatch.js`
    - wrote tests for `loadData.js` and `similarity.js`

### 2020.04.08

- worked all day on `cheminfo/dereplication`
    - fixed a few bugs
    - wrote a lot of documentation
    - create git pages for the project 

### 2020.04.09

- worked all day on `cheminfo/dereplication`
    - created the `testSimilarity` function to get the `matchIndex` for many experiments
    - created `testAllAlgorithms` to run `testSimilarity` for all the similarity algorithms of `ml-array-distance`
    - wrote a lot of doc about how varying parameters influences the `matchIndex`
- added a new option to `align()` (`ml-spectra-processing`) which allows to weight the delta depending on the X values of the spectrum

### 2020.04.14 - w3

- worked all day on `cheminfo/dereplication`
    - added `massWeight` and `norm` options to nearly all options. THis allows to do everything from the highest level function: `testSimilarity()`
    - readapted docs
    - created `median()` method optimized for the application
    - added the `massFilter` option which allows to filter the predictions to test, by comparing the experiment's and the prediction's `PEPMASS`

### 2020.04.15

- preparing this afternoon's presentation of `dereplication` to the people of UNIGE
- refactoring the options of `cheminfo/dereplication` in a new branch `refactor-options` -> be careful with the branches!
- presentation of the project and feedback

### 2020.04.16

- fix last bugs on branch `refactor-options` and merge with master
- add new method to `mljs/spectra-processing/xy`, `getNMaxY` and pushed to npm
    - this function takes in a spectrum and returns a filtered spectrum with only the N most intense peaks.
- added an option to `loadData` to use this new function instead of merging too close x values
    - it gave bad results...
- started learning React

### 2020.04.17

- TO DO: in the `dereplication` project, in `loadData` function, remove the file loading so that the function accepts a txt file instead of a path!
- created the `cheminfo/mgf-generator package`
- worked on my registration for HEIG-VD

### 2020.04.20 - w4

- worked on the react tutorial all day
    - created a few new components: Header, About
    - imported components from existing libraries -> Router: handling urls
    - added methods to add / remove items
    - started thinking about how to use local storage

### 2020.04.21

- received and signed contract
- working on `react-todo-list`
    - v1.0.0 is working fine
    - made v2.0.0 with react hooks on a new branch (`react-hooks`), works as well
    - tried to add new features to v2
- created `rect-mol-structures` to test using Zakodium react components

### 2020.04.22

- learn to create github workflows
- worked all day on `react-mol-structures`
    - created header with a menu
    - input bar for molecular formulas
    - showing possible molecular structures for the input
    - error message if mf invalid
    - loading info
- pushed the web app to gh pages

### 2020.04.23

- fixed yesterday's github workflow bug (I didn't push the app to the right repository)
- started working on `reference-database-front-end`
    - this will be the GUI that shows the results of a search in the database
    - start learning tailwind

### 2020.04.24

- worked all day on `reference-database-front-end`

### 2020.04.27 - w5

- worked all day on `reference-database-front-end`
    - learned to make responsive design for different screen sizes with tailwind

### 2020.04.28

- worked all day on `reference-database-front-end`
    - react tables
    - implementing the js behind all the inputs
    - creating tables in react

### 2020.04.29

- worked all day on `reference-database-front-end`
    - made next/previous feature for table
    - enhanced some of the layout
- meeting with Columbia to talk about the bioreactor project. I will have to work on the logging/GUI using technologies like:
    - NodeRed
    - InfluxDB
    - MQTT
    - Docker

### 2020.04.30

- worked all day on `reference-database-front-end`
    - decided that the frontend was finished
    - the table is working and the layout is fairly decent for small and large screens
- wrote a lot of doc about React and Tailwind
- started working on bioreactor project
    - learning basics of InfluxDB and Grafana


## May

### 2020.05.01

- continued learning InfluxDB
    - created a little project in `opatiny/influxdb-cores-temperature`
    - installed Influx DB form binaries, started server and client
    - accessed the db server from node
    - stored the temperature of my computer's cores in the db
    - wrote debug messages to see last entries of the db

### 2020.05.04 - w6

- having troubles with computer not wanting to boot because it was trying to mount servers
    - had to boot on rescue version (second to last)
    - opened `/etc/rc.d/rc.local` in vi as root and added an `exit;` after the file type line
    - reboot
- learning new influxdb commands -> how to filter measurement entries
- installed node RED and started learning how to use it
    - started working on telegram weather forecast bot

### 2020.05.05

- debug gh pages of `reference-database`: do not work anymore because of docker
- worked on node-red telegram bot
    - HTTP request node
    - switch node
    - bot is fetching data on the web page and can show some of it when asked with various commands

### 2020.05.06

- finished @annoyingWeatherMasterBot
- learned how to push data to influxdb from node-red
- started creating a dashboard using nodered dashboard to show past weather data in four cities

### 2020.05.06

- working on node-red weather dashboard
    - learned how to use context
    - learned subflows
    - starting flow once on node-red start with `inject` node
    - use dashboard `ui control` node
    - used `gate` node to block messages on flow

### 2020.05.06

- working on node-red weather dashboard
    - many tabs in the dashboard
    - node-red projects (-> version control)
    - node-red tables
    - node-red dashboard gauges
    - charts do not work, even basic test case

### 2020.05.11 - w7

- struggling with node-red charts which do not work (for a real long time), it still does not work...
- created a node-red project for the telegram bot: `weather-bot` (private repo)
    - had problems with pulling from github through the graphic interface
- started learning docker
- finally solved the charts problem in nodered!
- contributed on the node-red forum

### 2020.05.12

- working on node-red weather dashboard
    - learned to use links
    - learned how to show/hide tabs and groups
- restructured the influxdb database
    - learned more about retention policies
    - learned to use continuous queries

### 2020.05.13