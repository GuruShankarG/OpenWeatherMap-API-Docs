# Get Current Weather by Coordinates

:::tip
Latitude and longitude must be valid decimal values.  
Temperature values default to **Kelvin** unless `units` is specified.
:::

:::warning
Latitude must be between **-90 and 90** and longitude between **-180 and 180**.  
Invalid coordinate values will return an error or unexpected results.
:::

## Endpoint URL & Method
- **URL:** https://api.openweathermap.org/data/2.5/weather
- **Method:** GET

## Description
This endpoint returns the current weather for a location using latitude and longitude coordinates. It provides information such as temperature, humidity, wind speed, cloudiness, and weather conditions.

## Required Parameters

| Parameter | Type   | Description                  | Example      |
|-----------|--------|------------------------------|--------------|
| lat       | float  | Latitude of the location     | 51.5085      |
| lon       | float  | Longitude of the location    | -0.1257      |
| appid     | string | Your OpenWeatherMap API key  | YOUR_API_KEY |

## Optional Parameters

| Parameter | Type   | Description                              | Example |
|-----------|--------|------------------------------------------|---------|
| units     | string | Units of measurement (metric/imperial)   | metric  |
| lang      | string | Language of the response                 | en      |

## Example Request
GET https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=-0.1278&appid=YOUR_API_KEY&units=metric&lang=en

**cURL:**
```bash
curl "https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=YOUR_API_KEY&units=metric"

```

**JavaScript (fetch):**
```javascript
const lat = 51.5085;
const lon = -0.1257;
const apiKey = "YOUR_API_KEY";

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });

```

**Python (requests):**
```python

import requests

lat = 51.5085
lon = -0.1257
api_key = "YOUR_API_KEY"

url = "https://api.openweathermap.org/data/2.5/weather"
params = {
    "lat": lat,
    "lon": lon,
    "appid": api_key,
    "units": "metric"
}

response = requests.get(url, params=params)
print(response.json())

```

## Example Response
```json

{
    "coord": { "lon": -0.1278, "lat": 51.5074 },
    "weather": [
        { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }
    ],
    "base": "stations",
    "main": {
        "temp": 5.07,
        "feels_like": 1.93,
        "temp_min": 4.21,
        "temp_max": 5.72,
        "pressure": 1028,
        "humidity": 80,
        "sea_level": 1028,
        "grnd_level": 1024
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.02,
        "deg": 96,
        "gust": 6.71
    },
    "clouds": {
        "all": 100
    },
    "dt": 1766746181,
    "sys": {
        "type": 2,
        "id": 268730,
        "country": "GB",
        "sunrise": 1766736345,
        "sunset": 1766764577
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
```

## Error Codes

| HTTP Code | Meaning               | Example Response                                                |
|-----------|-----------------------|-----------------------------------------------------------------|
| 401       | Invalid API key       | `{ "cod": 401, "message": "Invalid API key." }`                 |
| 400       | Invalid coordinates   | `{ "cod": 400, "message": "wrong latitude" }`                   |
| 429       | Rate limit exceeded   | `{ "cod": 429, "message": "You exceeded the API calls limit" }` |


## Tips & Common Mistakes
- Latitude (lat) must be between -90 and 90.
- Longitude (lon) must be between -180 and 180.  
- Both lat and lon are required together.
- Temperature defaults to Kelvin if units is not specified.
- Coordinate-based queries are the most accurate method.
- Always validate coordinates before sending requests.
- Check the cod field in the response to handle errors properly.
