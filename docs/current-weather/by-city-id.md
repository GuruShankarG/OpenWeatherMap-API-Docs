# Get Current Weather by City ID

:::tip
By default, temperature values are returned in **Kelvin**.  
Use `units=metric` for Celsius.
:::

:::warning
City IDs are fixed numeric values.  
Using an incorrect or outdated city ID will result in a **404 city not found** error.
:::

## Endpoint URL & Method
- **URL:** https://api.openweathermap.org/data/2.5/weather
- **Method:** GET

## Description
This endpoint returns the current weather for a city using its unique city ID. It provides information such as temperature, humidity, wind speed, cloudiness, and weather conditions.

## Required Parameters

| Parameter | Type    | Description                  | Example      |
|-----------|---------|------------------------------|--------------|
| id        | integer | Unique city ID               | 2643743      |
| appid     | string  | Your OpenWeatherMap API key  | YOUR_API_KEY |

## Optional Parameters

| Parameter | Type   | Description                              | Example |
|-----------|--------|------------------------------------------|---------|
| units     | string | Units of measurement (metric/imperial)   | metric  |
| lang      | string | Language of the response                 | en      |

## Example Request
GET https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=YOUR_API_KEY&units=metric&lang=en


**cURL:**
```bash
curl "https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=YOUR_API_KEY&units=metric"
```

**JavaScript (fetch):**
```javascript
const cityId = 2643743; // London
const api_key = "YOUR_API_KEY";

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${api_key}&units=metric`)
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

city_id = 2643743  # London
api_key = "YOUR_API_KEY"

url = "https://api.openweathermap.org/data/2.5/weather"
params = {
    "id": city_id,
    "appid": api_key,
    "units": "metric"
}

response = requests.get(url, params=params)
print(response.json())

```

## Example Response

```json
{
    "coord": {
        "lon": -0.1257, "lat": 51.5085 },
    "weather": [
        {
            "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }
    ],
    "base": "stations",
    "main": {
        "temp": 5.03,
        "feels_like": 2.14,
        "temp_min": 4.2,
        "temp_max": 6.21,
        "pressure": 1029,
        "humidity": 80,
        "sea_level": 1029,
        "grnd_level": 1024
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.6,
        "deg": 60
    },
    "clouds": {
        "all": 100
    },
    "dt": 1766745459,
    "sys": {
        "type": 2,
        "id": 268730,
        "country": "GB",
        "sunrise": 1766736344,
        "sunset": 1766764576
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
| 404       | City not found        | `{ "cod": "404", "message": "city not found" }`                 |
| 429       | Rate limit exceeded   | `{ "cod": 429, "message": "You exceeded the API calls limit" }` |


## Tips & Common Mistakes
- Always include the appid parameter in every request.  
- Ensure the city ID is valid; incorrect IDs return 404.  
- Temperature values default to Kelvin if units is not specified. 
- API keys may take 10–15 minutes to activate after creation.
- Handle errors in your application by checking the cod field in the response. 
- Use city IDs when you want precise results (city names can be ambiguous).
