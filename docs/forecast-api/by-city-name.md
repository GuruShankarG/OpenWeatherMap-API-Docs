---
title: Forecast by City Name
---

## Get Forecast by City Name

Retrieve 5-day weather forecast data using a city name.

## Endpoint

GET /data/2.5/forecast

## Query Parameters

| Parameter | Required | Description | Example |
|----------|----------|-------------|---------|
| q | Yes | City name | London |
| appid | Yes | API key | YOUR_API_KEY |
| units | No | Units of measurement | metric |
| lang | No | Language | en |

## Example Request

GET https://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY&units=metric

**cURL:**
```bash
curl "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY&units=metric"
```
**JavaScript (fetch):**
```javascript
fetch("https://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY&units=metric")
  .then(res => res.json())
  .then(data => console.log(data));
```

## Example Response
```json
{
  "list": [
    {
      "dt": 1710000000,
      "dt_txt": "2024-03-10 12:00:00",
      "main": {
        "temp": 18.5
      },
      "weather": [
        {
          "description": "clear sky"
        }
      ]
    }
  ]
}
```

## Response Explanation

The API returns a list of forecast objects. Each object represents weather data for a specific time interval.

- list: Array of forecast data
- dt: Unix timestamp
- dt_txt: Forecast date and time
- main.temp: Temperature
- weather.description: Weather condition

