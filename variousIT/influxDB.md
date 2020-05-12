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

**Caution:** Only uppercase, lowercase, underscore and numbers are accepted in db names!

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

### Delete table from a db
```sql
DROP measurement myTable
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
- `mean()` makes the average of the specified entries of a column -> `mean()` is an ** aggregate function**

```sql
SELECT MEAN(core1) FROM temperatures WHERE time > now() - 1h
```

### Count measurement entries

```sql
select count(column) from myMeasurement
```

### Sort results by tag

Use `group by` to sort the results of a query by a tag.

```sql
select * from weather group by "city"
```

### Multiple tag values in where clause

You can use **regular expressions** in Influx queries using this syntax:
```sql
select * from weather where city =~ /denges|lausanne/
```

Here, `denges` and `lausanne` are the possible `city` tag values for the entry to be returned.

### `SHOW SERIES`

This command allows to show all the values tags have in a db.

```sql
SHOW SERIES FROM dbName
```

### Renaming a database

There seems to be no existing command to do this directly, so what you have to do is create a new db, and then copy the data of the old one to the new one using this command:

```sql
SELECT * 
INTO <my_newDB>.<RP>.<MEASUREMENT> 
FROM <my_oldDB>.<RP>.<MEASUREMENT> 
WHERE time > now() - <someAmountOfTime> and time < now()
GROUP BY  * 
```

RP is the retention policy name, by default `autogen`.

The time `WHERE` clause is used if the db is really large, so that you copy it part by part. You should run this command many times, changing the time slot every time.

## Retention policies

### Links
- [concepts explanation](https://www.influxdata.com/blog/influxdb-shards-retention-policies/)
- [example](https://towardsdatascience.com/influxdb-data-retention-f026496d708f)

### Definition

Retention policies define for how long the data in the database should be kept before being discarded. For example, you could delete all data older that a week. By **default**, all data put in an InfluxDB database will be kept "indefinitely". The default retention policy is called `autogen`.

### Usage
You can define the retention policy while you create a new db as follows:

```sql
CREATE DATABASE longterm WITH DURATION 156w
```

Here, you create a db called `longterm`, in which the last 156 weeks of data are kept.

## Continuous queries - aggregate longterm data

Often, you don't want to keep as many data points for old data as for the most recent one. When using databases, you can achieve this by using retention policies and continuous queries.

### Definition

Continuous queries are queries which are run inside of the databases. They will continuously take data from one db, process it, and put it in another db.

So when you want to down-sample data from a db, you want to create a short-term db with a short retention policy, and a long-term db that will take the data from the first one and aggregate it, using a continuous query.

only keep the average values over 1h time spans for entries older than a day

### Create a CQ

Here, entries of the `short_term` db are aggregated by 15m time slots and put in an measurement `new_measurement` that is in the `long_term` db.
```sql
CREATE CONTINUOUS QUERY CQ_name ON long_term
BEGIN
  SELECT max(column_name) AS long_term_column_name 
  INTO long_term.autogen.new_measurement 
  FROM short_term.autogen.measurement_name
  GROUP BY time(15m), * 
END
```

### Delete a CQ

```sql
DROP CONTINUOUS QUERY <name> ON <database>
```

### See which CQs are running

```sql
SHOW CONTINUOUS QUERIES
```

### Debugging

In the folder where Influx is installed:

```bash
tail -f ./var/log/messages | grep "Finished continuous"
```

## Links

- [InfluxDB command](https://docs.influxdata.com/influxdb/v1.8/query_language/explore-data/)
- [Continuous queries official doc](https://influxdbcom.readthedocs.io/en/latest/content/docs/v0.9/query_language/continuous_queries/)