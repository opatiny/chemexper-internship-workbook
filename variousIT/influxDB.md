# Influx DB

## Context
Influx DB is an open-source Time Series Database (TSDB). TSDBs are optimized for time slots queries. They offer "retention policies", which define how long you want to keep the real entries, and then how you want to make averages on the data. This allows to importantly reduce the size of the database.

## Basic commands

### Show all databases

```bash
SHOW databases
```

### Create new database

```bash
CREATE DATABASE newDB
```

### Switch to a database

```bash
use newDB
```

### Create a new table in a db
The two lines underneath create a new table called `newTable` in current database with two columns `col1` and `col2`.
```bash
INSERT newTable, col1=1 col2=45
INSERT newTable, col1=2 col2=44
```

### Show table entries

```bash
select * from "newTable"
```

Showing the `newTable` of `newdb` would look like this:

time    col1    col2
epoch1        1       45
epoch2        2       46

Where the time is a time stamp added automatically whenever an entry is added.
