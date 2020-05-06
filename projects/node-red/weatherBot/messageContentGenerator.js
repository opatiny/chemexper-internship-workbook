'use strict';

function handleWeatherData(msg) {
  let content = '';

  switch (msg.command) {
    case '/temp':
      content = `Current temperature in Denges is ${msg.payload.main.temp}°C.`;
      break;
    case '/tempfeel':
      content = `Current perceived temperature in Denges is ${msg.payload.main.feels_like}°C.`;
      break;
    case '/humidity':
      content = `Current humidity in Denges is ${msg.payload.main.humidity}%.`;
      break;
    case '/wind':
      content = `Current wind speed in Denges is ${msg.payload.wind.speed}m/s.`;
      break;
    case '/weather':
      content = `Current weather in Denges is ${msg.payload.weather[0].description}°C.`;
      break;
    case '/clouds':
      content = `Current amount of sky cloudy in Denges is ${msg.payload.clouds.all}%.`;
      break;
    case '/rain':
      content = `Amount of rain fallen during last hour in Denges is ${msg.payload.rain['1h']}mm.`;
      break;
    default:
      msg.errors.push('Error: Unknown command for current weather in bot v1!');
      break;
  }

  msg.content = content;

  return msg;
}

content += `${msg.payload.list[i].main.temp.toFixed(2)}°C ${main.payload.list[i].main.feels_like.toFixed(2)}°C    ${msg.payload.list[i].weather[0].description}\n`


msg.payload = [{temp: msg.payload.main.temp, tempFeel: msg.payload.main.feels_like, humidity: msg.payload.main.humidity, wind: msg.payload.wind.speed, rain: msg.payload.rain['1h'], weather: msg.payload.weather[0].description},{}];