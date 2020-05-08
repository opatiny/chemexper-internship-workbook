# Historical weather dashboard

Link: [https://github.com/opatiny/historical-weather-dashboard](https://github.com/opatiny/historical-weather-dashboard)

## Goal

Use **node-red** to store the weather data of 4 cities in an InfluxDB database and show it in a dashboard.

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
- `clouds`: Cloudiness in [%] (I forgot about this one...)

### Tags

- `city`: Location of the measurement
- `weather`: Weather description in a few words

### Database sample example

<img src="./weather_db_sample.png" alt="./weather_db_sample.png" width="50%" class="center">

## Dashboard

Node-red package for dashboards: `node-red-dashboard`

## Links

- Nodered dashboard tutorial: [https://www.youtube.com/watch?v=X8ustpkAJ-U](https://www.youtube.com/watch?v=X8ustpkAJ-U)
- Node-red charts and influxdb: [https://funprojects.blog/2020/02/01/influxdb-with-node-red/](https://funprojects.blog/2020/02/01/influxdb-with-node-red/)
