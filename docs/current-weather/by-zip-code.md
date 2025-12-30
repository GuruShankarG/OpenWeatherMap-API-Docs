# Get Current Weather by ZIP Code

:::tip
ZIP codes must include the country code (e.g., `94040,us`).  
Temperature values default to **Kelvin**.
:::

:::warning
ZIP code requests must include a **country code** (for example: `94040,us`).  
Requests without a country code may return incorrect or no results.
:::

## Endpoint URL & Method
- **URL:** https://api.openweathermap.org/data/2.5/weather
- **Method:** GET

## Description
This endpoint returns the current weather for a location using the ZIP code. It provides information such as temperature, humidity, wind speed, cloudiness, and weather conditions.

## Required Parameters

| Parameter | Type   | Description                      | Example      |
|-----------|--------|----------------------------------|--------------|
| zip       | string | ZIP code (with country code)     | 94040,us     |
| appid     | string | Your OpenWeatherMap API key      | YOUR_API_KEY |

## Optional Parameters

| Parameter | Type   | Description                              | Example |
|-----------|--------|------------------------------------------|---------|
| units     | string | Units of measurement (metric/imperial)   | metric  |
| lang      | string | Language of the response                 | en      |

## Example Request
GET https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=YOUR_API_KEY&units=metric&lang=en


**cURL:**
```bash
curl "https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=YOUR_API_KEY&units=metric"
```

**JavaScript (fetch):**
```javascript
const zipCode = "94040,us"; // ZIP code with country code
const apiKey = "YOUR_API_KEY";

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`)
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

zip_code = "94040,us"  # ZIP code and country code
api_key = "YOUR_API_KEY"

url = "https://api.openweathermap.org/data/2.5/weather"
params = {
    "zip": zip_code,
    "appid": api_key,
    "units": "metric"
}

response = requests.get(url, params=params)
print(response.json())
```

## Example Response
```json

{
    "coord": { "lon": -122.088, "lat": 37.3855 },
    "weather": [
        { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }
    ],
    "base": "stations",
    "main": {
        "temp": 10.83,
        "feels_like": 10.27,
        "temp_min": 9.84,
        "temp_max": 12.44,
        "pressure": 1013,
        "humidity": 88,
        "sea_level": 1013,
        "grnd_level": 992
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.66,
        "deg": 90
    },
    "clouds": {
        "all": 100
    },
    "dt": 1766746344,
    "sys": {
        "type": 2,
        "id": 2105119,
        "country": "US",
        "sunrise": 1766762475,
        "sunset": 1766797007
    },
    "timezone": -28800,
    "id": 0,
    "name": "Mountain View",
    "cod": 200
}
```
## Error Codes

| HTTP Code | Meaning               | Example Response                                                |
|-----------|-----------------------|-----------------------------------------------------------------|
| 400       | Invalid ZIP format    | `{ "cod": 400, "message": "bad zip code" }    `                 |
| 401       | Invalid API key       | `{ "cod": 401, "message": "Invalid API key." }`                 |
| 404       | ZIP code not found    | `{ "cod": "404", "message": "city not found" }`                 |
| 429       | Rate limit exceeded   | `{ "cod": 429, "message": "You exceeded the API calls limit" }` |

## Tips & Common Mistakes
- Always include the country code with the ZIP (e.g., 94040,us).  
- ZIP codes alone may return errors for international locations.
- Double-check ZIP code format before sending the request.
- Temperature defaults to Kelvin if units is not specified. 
- API key activation may take 10–15 minutes after creation.  
- Check the cod field in the response to handle errors properly.  
- ZIP-based queries are best for country-specific searches.

