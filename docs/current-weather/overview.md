# Current Weather API Overview

The Current Weather API allows you to retrieve **real-time weather data** for any location in the world.

This API provides information such as:
- Current temperature
- Weather conditions (rain, clouds, clear sky, etc.)
- Humidity and pressure
- Wind speed and direction

All responses are returned in **JSON format**.

---

## Available Request Types

You can access current weather data using different location identifiers:

- **City Name** – Example: London, Chennai
- **City ID** – Unique numeric identifier for a city
- **Geographic Coordinates** – Latitude and longitude
- **ZIP Code** – Postal code with country code

Each method uses the same endpoint but accepts different query parameters.

---

## Endpoint Information

- **Base URL:** `https://api.openweathermap.org/data/2.5`
- **Endpoint:** `/weather`
- **HTTP Method:** `GET`

---

## Authentication

All requests to the Current Weather API require an **API key**.

The API key must be passed as a query parameter using `appid`.

Example:

/weather?q=London&appid=YOUR_API_KEY


Requests without a valid API key will return an authentication error.

---

## Units of Measurement

By default, temperature values are returned in **Kelvin**.

You can change units using the `units` parameter:

- `standard` – Kelvin (default)
- `metric` – Celsius
- `imperial` – Fahrenheit

Example:

/weather?q=London&units=metric&appid=YOUR_API_KEY


---

## Response Structure (High Level)

A typical response includes the following sections:

- `weather` – Weather conditions
- `main` – Temperature, pressure, humidity
- `wind` – Wind speed and direction
- `clouds` – Cloud coverage
- `sys` – Country, sunrise, and sunset details

Detailed response examples are provided in each endpoint-specific page.
