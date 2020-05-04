# Influx DB

## Context

Influx DB is an open-source Time Series Database (TSDB). TSDBs are optimized for time slots queries. They offer "retention policies", which define how long you want to keep the real entries, and then how you want to make averages on the data. This allows to importantly reduce the size of the database.

## Install
Get binaries: [https://portal.influxdata.com/downloads/](https://portal.influxdata.com/downloads/)

Configuration files: `/etc/influxdb/influxdb.conf`

## Usage

### Start server
Inside of the previously downloaded folder: 

```bash
./influxd
```

### Start client
Inside of the previously downloaded folder: 

```bash
./influx
```

To kill the client: `quit`.

## Basic commands

### Show all databases

```sql
SHOW databases
```

### Create new database

```sql
CREATE DATABASE newDB
```

### Delete database

```sql
DROP DATABASE newDB
```

### Switch to a database

```sql
use newDB
```

### Show names of tables in a db

```sql
SHOW measurements
```

### Create a new table in a db

**N.B.**: Tables are called "measurements" in InfluxDB.

The two lines underneath create a new table called `newTable` in current database with two columns `col1` and `col2`.
```sql
INSERT newTable, col1=1 col2=45
INSERT newTable, col1=2 col2=44
```

### Show all table entries

```sql
select * from "newTable"
```

Showing the `newTable` of `newdb` would look like this:

time    col1    col2
epoch1        1       45
epoch2        2       46

Where the time is a time stamp added automatically whenever an entry is added.

## More complex commands

### `WHERE`
This command shows entries of measurement "tables" of current db which have the "time" property bigger than 1588343586040724334.

```sql
SELECT * FROM temperatures WHERE time > 1588343586040724334
```

### `now()` and `mean()`

- `now()` allows you to refer to current time.
- `mean()` makes the average of the specified entries of a column

```sql
SELECT MEAN(core1) FROM temperatures WHERE time > now() - 1h
```

### Count measurement entries

```sql
select count(column) from myMeasurement
```
