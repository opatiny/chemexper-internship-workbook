# Create a weather Telegram bot

## Goal

Use Node-RED to retrieve weather data from [https://openweathermap.org/](https://openweathermap.org/), and send it to a Telegram group through a bot.

## Desired API

The bot should accept a bunch of commands beginning with `/`. Each command should return some weather information fetched on OpenWeather.

Some of the commands can be followed by a number, which is the number of hours in the future for which the forecast must be made. Max. number of hours is 120 h aka 5 days. You do the math to know when tomorrow is.

Optionally: The bot should warn you if there is going to be rain that day, given it is not muted.

### Commands (in BotFather required format)
temp - Measured temperature
tempfeel - Human perceived temperature
wind - Wind speed
weather - Weather description -> clear, cloudy, rain, ...
clouds - Percentage of sky covered with clouds
rain - Amount of rain fallen
humidity - Humidity in percents
all - Get all information given by other commands at once.
city - Get all information like with "all" for another city than Denges. City name should be only in lowercase letters.
help - Information about available commands.

To potentially implement someday?
mute - Mute the bot's rain warnings
talk - Unmute the bot's rain warnings

### Help command text

/temp - Measured temperature
/tempfeel - Human perceived temperature
/wind - Wind speed
/weather - Weather description -> clear, cloudy, rain, ...
/clouds - Percentage of sky covered with clouds
/rain - Amount of rain fallen
/humidity - Humidity in percents
/all - Get all information given by other commands at once.
/city - Get all information like with "all" for another city than Denges. City name should be only in lowercase letters.
/help - Information about available commands.

## OpenWeather API

Default wind speed unit is [m/s].

### Current weather

Typical API request for current weather in a given city:

```url
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}&units=metric
```

For instance, the "city name" can be "lausanne". The "units" option allows the temperatures to be returned in Celcius degrees instead of the default Kelvin.

### Forecast

With a free account, we can get a weather forecast for the next 5 days, for time spans of 3 hours. So the response contains 40 forecasts.

```url
https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}&units=metric
```
## Links
- [https://openweathermap.org/](https://openweathermap.org/)
- node red telegram plugin: [https://www.npmjs.com/package/node-red-contrib-telegrambot](https://www.npmjs.com/package/node-red-contrib-telegrambot)