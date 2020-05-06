# Historical weather dashboard

## Goal

Store the weather data in Denges in an InfluxDB database and show it in graphs.

## Database structure

Node-red package for InfluxDB: `node-red-contrib-influxdb`

We create an InfluxDB database called `weather_db`. The database should contain one measurement called `weather`.

The measurement contains fields and tags.

### Fields

- `temp`: Temperature in [°C]
- `tempFeel`: Temperature in [°C] as perceived by humans
- `humidity`: Humidity in [%]
- `wind`: Wind speed in [m/s]
- `rain`: Amount of rain fallen over last hour in [mm]
- `clouds`: Cloudiness in [%]

### Tags

- `city`: Location of the measurement
- `weather`: Weather description in a few words

## Dashboard

Node-red package for dashboards: `node-red-dashboard`

## Links

- Nodered dashboard tutorial: [https://www.youtube.com/watch?v=X8ustpkAJ-U](https://www.youtube.com/watch?v=X8ustpkAJ-U)
- Node-red charts and influxdb: [https://funprojects.blog/2020/02/01/influxdb-with-node-red/](https://funprojects.blog/2020/02/01/influxdb-with-node-red/)
