# `opatiny/nodered-bioreactor-gui`

[Home](../../README.md) | [Projects TOC](../projects.md)

Link: [https://github.com/opatiny/nodered-bioreactor-gui](https://github.com/opatiny/nodered-bioreactor-gui)

## Goal

Work on the bioreactors GUI using node-red.

## Context

Building a functional and practical user interface to manage the bioreactors is one of the main goal of my internship. We use node-red to build it in order to make it easier for people with little programming experience to modify the GUI according to their needs.

## Database structure

We want to store the parsed logs in an InfluxDB database called `bioreactors`. Each bioreactor should have its own measurement called `bio_<bioreactorID>`.

Two other databases contain data aggregated by hours and day. They are called `bioreactors_hour` and `bioreactors_day`.

### Continuous queries

Each `bio_<bioreactorID>` measurement should be queried by two continuous queries. One of them should aggregate the data by hour (`bioreactors_hour`) whereas the other one should aggregate it by day (`bioreactors_day`).

The measurement names should be the same as in `bioreactors`.

To solve this problem, we use what is called "back-references".

#### Hour aggregation db

```sql
CREATE CONTINUOUS QUERY bio_hour_cq ON bioreactors 
BEGIN 
  SELECT mean(*) 
  INTO bioreactors_hour.autogen.:MEASUREMENT 
  FROM /.*/ 
  GROUP BY time(1h), * 
END
```

#### Day aggregation db

```sql
CREATE CONTINUOUS QUERY bio_day_cq ON bioreactors 
BEGIN 
  SELECT mean(*) 
  INTO bioreactors_day.autogen.:MEASUREMENT 
  FROM /.*/ 
  GROUP BY time(1d), * 
END
```

### Overview

InfluxDB will contain three databases:

- `bioreactors`: "raw" logs
- `bioreactors_hour`: logs aggregated by hour (CQ on `bioreactors`)
- `bioreactors_day`: logs aggregated by day (CQ on `bioreactors`)

The measurements in these databases have the format `bio_<bioreactorID>`.

## Serial commands

The useful serial commands of the bioreactor are:
- `lm`: to get the multilogs, follow it with a number that indicate from which log id you want to retrieve the data
- `uc`: to retrieve the current settings

## Packages used

- `legoino-util`: to parse the logs (installed as a global variable)
- `node-red-contrib-loop-processing`: to loop over nodes

## Links
