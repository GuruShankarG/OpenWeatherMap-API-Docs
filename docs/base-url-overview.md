# Base URL and API Overview

## Base URL

All OpenWeatherMap API requests use the following base URL:

https://api.openweathermap.org/data/2.5


Every endpoint is appended to this base URL.

---

## API Overview

The OpenWeatherMap API provides access to current weather data for locations worldwide.  
Developers can retrieve weather information using different identifiers such as:

- City name
- City ID
- Geographic coordinates (latitude and longitude)
- ZIP / postal code

The API returns responses in **JSON format**, making it easy to integrate with web, mobile, and backend applications.

---

## Request Flow

1. The client application sends an HTTP request to the OpenWeatherMap API.
2. The request includes required parameters such as location information and an API key.
3. OpenWeatherMap processes the request.
4. A JSON response containing weather data is returned.

---

## Authentication Requirement

All API requests **must include** an API key using the `appid` query parameter.

Example:

https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY


Requests without a valid API key will return an error.

---

## Response Format

The API responds with structured JSON data that typically includes:

- Weather conditions
- Temperature and humidity
- Wind speed and direction
- Location details

Each endpoint may return slightly different fields depending on the request parameters.
