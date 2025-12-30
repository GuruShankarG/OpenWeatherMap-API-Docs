# Get Current Weather by City Name

:::tip
By default, temperature values are returned in **Kelvin**.  
Use `units=metric` for Celsius and `units=imperial` for Fahrenheit.
:::

:::warning
New API keys may take a few minutes to become active after creation.
:::

## Endpoint URL & Method
- **URL:** https://api.openweathermap.org/data/2.5/weather
- **Method:** GET

## Description
This endpoint returns the current weather for a city by its name.

## Required Parameters

| Parameter | Type   | Description                  | Example      |
|-----------|--------|------------------------------|--------------|
| q         | string | Name of the city             | London       |
| appid     | string | Your OpenWeatherMap API key  | YOUR_API_KEY |

## Optional Parameters

| Parameter | Type   | Description                            | Example |
|-----------|--------|----------------------------------------|---------|
| units     | string | Units of measurement (metric/imperial) | metric  |
| lang      | string | Language of the response               | en      |

## Example Requests
GET https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric&lang=en

**cURL:**
```bash
curl "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric&lang=en"
```

**JavaScript (fetch):**
```javascript
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid={YOUR_API_KEY}&units=metric&lang=en')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Python (requests):**
```python
import requests

api_key = "YOUR_API_KEY"

url = "https://api.openweathermap.org/data/2.5/weather"
params = {
    "q": "London",
    "appid": api_key,
    "units": "metric",
    "lang": "en"
}

response = requests.get(url, params=params)
print(response.json())
```

## Example Response
```json
{
    "coord": { "lon": -0.1257, "lat": 51.5085 },
    "weather": [
        { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }
    ],
    "base": "stations",
    "main": {
        "temp": 4.91,
        "feels_like": 1.41,
        "temp_min": 3.95,
        "temp_max": 5.66,
        "pressure": 1028,
        "humidity": 80,
        "sea_level": 1028,
        "grnd_level": 1024
    },
    "visibility": 10000,
    "wind": { "speed": 4.63, "deg": 40 },
    "clouds": { "all": 100 },
    "dt": 1766744144,
    "sys": { "type": 2, "id": 268730, "country": "GB", "sunrise": 1766736344, "sunset": 1766764576 },
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
| 404       | City not found        | `{ "cod": "404", "message": "city not found" }`                 |
| 429       | Rate limit exceeded   | `{ "cod": 429, "message": "You exceeded the API calls limit" }` |

## Tips & Common Mistakes
- Always include `appid` in requests.  
- Double-check city spelling; API is case-insensitive but spelling must be correct.  
- Units default to Kelvin if `units` is not specified.  
- API key activation may take 10–15 minutes after creation.  
- Handle errors gracefully in code (e.g., check `cod` in JSON response).  