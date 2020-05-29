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

Warning: The field name "weightSinceLast" is a typo mistake! It should have been "waitSinceLast".

### Continuous queries

Each `bio_<bioreactorID>` measurement should be queried by two continuous queries. One of them should aggregate the data by hour (`bioreactors_hour`) whereas the other one should aggregate it by day (`bioreactors_day`). The measurement names should be the same as in `bioreactors`.

The functions to aggregate the fields should be the following:
- don't aggregate the "eventId" -> drop it
- make a bitwise OR of "error" and "status"? -> if feasible
- for all other fields, take the median

To solve this problem, we use what is called "back-references".

#### Hour aggregation db

To run when using `bioreactors`!!!

```sql
CREATE CONTINUOUS QUERY bio_hour_cq ON bioreactors 
BEGIN 
  SELECT max(error) AS max_error, count(distinct(eventId)) AS count_distinct_eventId, median(grWeight) AS median_grWeight, median(id) AS median_id, median(maxWeight) AS median_maxWeight, median(minWeight) AS median_minWeight, median(pcbTemp) AS median_pcbTemp, median(pidTemp) AS median_pidTemp, min(status) AS min_status, median(targetTemp) AS median_targetTemp, median(weight) AS median_weight, median(weightSinceLast) AS median_weightSinceLast 
  INTO bioreactors_hour.autogen.:MEASUREMENT 
  FROM /.*/ 
  GROUP BY time(1h), * 
END
```

#### Day aggregation db

To run when using `bioreactors`!!!

```sql
CREATE CONTINUOUS QUERY bio_day_cq ON bioreactors 
BEGIN 
  SELECT max(error) AS max_error, count(distinct(eventId)) AS count_distinct_eventId, median(grWeight) AS median_grWeight, median(id) AS median_id, median(maxWeight) AS median_maxWeight, median(minWeight) AS median_minWeight, median(pcbTemp) AS median_pcbTemp, median(pidTemp) AS median_pidTemp, min(status) AS min_status, median(targetTemp) AS median_targetTemp, median(weight) AS median_weight, median(weightSinceLast) AS median_weightSinceLast 
  INTO bioreactors_day.autogen.:MEASUREMENT 
  FROM /.*/ 
  GROUP BY time(1d), * 
END
```

#### Test CQ (aggregate by minute)

To run when using `bioreactors`!!!

```sql
CREATE CONTINUOUS QUERY bio_minute_cq ON bioreactors BEGIN SELECT max(error) AS max_error, count(distinct(eventId)) AS count_distinct_eventId, median(grWeight) AS median_grWeight, median(id) AS median_id, median(maxWeight) AS median_maxWeight, median(minWeight) AS median_minWeight, median(pcbTemp) AS median_pcbTemp, median(pidTemp) AS median_pidTemp, min(status) AS min_status, median(targetTemp) AS median_targetTemp, median(weight) AS median_weight, median(weightSinceLast) AS median_weightSinceLast  INTO bioreactors_minute.autogen.:MEASUREMENT FROM /.*/ GROUP BY time(1m), * END
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
