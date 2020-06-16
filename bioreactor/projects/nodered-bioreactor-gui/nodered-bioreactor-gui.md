# `opatiny/nodered-bioreactor-gui`

[Home](../../../README.md)

Link: [https://github.com/opatiny/nodered-bioreactor-gui](https://github.com/opatiny/nodered-bioreactor-gui)

## Goal

Create a GUI for the bioreactors using node-red.

## Context

Building a functional and practical user interface to manage the bioreactors is one of the main goals of my internship. We use node-red dashboard to build it in order to make it easier for people with little programming experience to modify the GUI according to their needs.

## Database structure

We want to store the parsed logs in an InfluxDB database called `bioreactors`. Each bioreactor should have its own measurement called `bio_<bioreactorID>`.

Two other databases contain data aggregated by hours and day. They are called `bioreactors_hour` and `bioreactors_day`.

**Warning:** The field name "weightSinceLast" is a typo mistake! It should have been "waitSinceLast".

One last database called `bioreactors_debug` is used to store the debug messages of the past month.

### Continuous queries

Each `bio_<bioreactorID>` measurement should be queried by two continuous queries. One of them should aggregate the data by hour (`bioreactors_hour`) whereas the other one should aggregate it by day (`bioreactors_day`). The measurement names should be the same as in `bioreactors`.

The functions to aggregate the fields should be the following:

- `eventId`: count number of distinct entries
- `status`: `min()`
- `error`: `max()`
- all other fields: `median()`

To solve this problem, we use what is called "back-references".

#### Minute aggregation db

```sql
CREATE CONTINUOUS QUERY bio_minute_cq ON bioreactors
BEGIN
  SELECT max(error) AS max_error, count(distinct(eventId)) AS count_distinct_eventId, median(grWeight) AS median_grWeight, median(id) AS median_id, median(liquidTemp) as median_liquidTemp, median(maxWeight) AS median_maxWeight, median(minWeight) AS median_minWeight, median(pcbTemp) AS median_pcbTemp, median(pidTemp) AS median_pidTemp, min(status) AS min_status, median(targetTemp) AS median_targetTemp, median(weight) AS median_weight, median(weightSinceLast) AS median_weightSinceLast
  INTO bioreactors_minute.autogen.:MEASUREMENT
  FROM bioreactors.autogen./.*/
END
```

#### Hour aggregation db

```sql
CREATE CONTINUOUS QUERY bio_hour_cq ON bioreactors
BEGIN
  SELECT max(error) AS max_error, count(distinct(eventId)) AS count_distinct_eventId, median(grWeight) AS median_grWeight, median(id) AS median_id, median(liquidTemp) as median_liquidTemp, median(maxWeight) AS median_maxWeight, median(minWeight) AS median_minWeight, median(pcbTemp) AS median_pcbTemp, median(pidTemp) AS median_pidTemp, min(status) AS min_status, median(targetTemp) AS median_targetTemp, median(weight) AS median_weight, median(weightSinceLast) AS median_weightSinceLast
  INTO bioreactors_hour.autogen.:MEASUREMENT
  FROM bioreactors.autogen./.*/
  GROUP BY time(1h), *
END
```

#### Day aggregation db

```sql
CREATE CONTINUOUS QUERY bio_day_cq ON bioreactors
BEGIN
  SELECT max(error) AS max_error, count(distinct(eventId)) AS count_distinct_eventId, median(grWeight) AS median_grWeight, median(id) AS median_id, median(liquidTemp) as median_liquidTemp, median(maxWeight) AS median_maxWeight, median(minWeight) AS median_minWeight, median(pcbTemp) AS median_pcbTemp, median(pidTemp) AS median_pidTemp, min(status) AS min_status, median(targetTemp) AS median_targetTemp, median(weight) AS median_weight, median(weightSinceLast) AS median_weightSinceLast
  INTO bioreactors_day.autogen.:MEASUREMENT
  FROM bioreactors.autogen./.*/
  GROUP BY time(1d), *
END
```

### Debug database

The debug database will store the debug messages of the past month. We set its retention policy to be 30 days. The DB contains one measurement called `logs`.

```sqL
CREATE DATABASE "bioreactors_debug" WITH DURATION 30d REPLICATION 1 SHARD DURATION 1h NAME "oneMonth"
```

### Overview

InfluxDB will contain four databases:

- `bioreactors`: "raw" logs
- `bioreactors_minute`: logs aggregated by minute (CQ on `bioreactors`)
- `bioreactors_hour`: logs aggregated by hour (CQ on `bioreactors`)
- `bioreactors_day`: logs aggregated by day (CQ on `bioreactors`)
- `bioreactors_debug`: debug messages of the past 30 days, contains 1 measurement called `logs`

The measurements in these databases have the format `bio_<bioreactorID>`.

The file [`startup.iql`](./layouts/startup.iql) contains all of the Influx commands that have to be run when recreating the database.

### Dumping all logs stored on bioreactor

We consider the "worst" case where a bioreactor has run autonomously for 15 days and has filled its memory. It has then stored 125000 logs. We fetch maximally 64 logs every 10 seconds, which means that it would take about **5.43 hours** to dump all of the logs in the database.

## Serial commands

The useful serial commands of the bioreactor are described in [bioreactor-commands.md](../generalDoc/bioreactor-commands.md).

## Debug system

We developed a system that allows the user to inspect the last 100 debug messages of the GUI. The debug messages are set using the `msg.debug` property, the `debug` subflow and a "link out" node.

The input `msg.debug` object should have properties:

- `id`: the device id
- `type`: the message type
- `message`: the debug message


## Dashboard

### Color

The main color theme of the dashboard is: #dba100

## Results
<img src="./images/2020.06.15/gui-raspi.JPG" alt="./images/2020.06.15/gui-raspi.JPG" width="80%" class="center">

## Packages used

- `legoino-util`: to parse the logs (installed as a global variable in `settings.js`)
- `node-red-contrib-influxdb` (v0.4.0): writing/reading influx DB
- `node-red-contrib-simple-gate` (v0.3.1): block messages of let them through
- `node-red-dashboard` (v2.22.1)
- `node-red-node-rbe`(v0.2.9): let message though only if it is different form the previous one
- `node-red-node-ui-table` (v0.3.1)

**Comment:** MQTT nodes are built in the basic install.
