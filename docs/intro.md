# Introduction
# Welcome to OpenWeatherMap API Documentation

OpenWeatherMap provides weather data for locations all around the world.  
With this API, you can get current weather conditions, forecasts, and historical data.

This documentation focuses specifically on the **Current Weather Data API**, which allows you to retrieve real-time weather information for a given location.

---

## What This Documentation Covers

This documentation helps developers understand how to use the OpenWeatherMap Current Weather API, including:

- How to authenticate using an API key
- How to make requests to get current weather data
- Examples of requests by city name, city ID, coordinates, or ZIP code
- How to read and understand API responses
- Handling error responses
- Tips for avoiding common mistakes

---

## Who This Documentation is For

This documentation is intended for:

- Developers building apps or websites that need weather data
- Technical writers looking for API documentation examples
- Anyone new to OpenWeatherMap or APIs in general

No advanced technical knowledge is required to follow this guide.

---

## Basic API Information

**Base URL:**  
`https://api.openweathermap.org/data/2.5`

**Response format:**  
JSON

**Authentication:**  
All requests require an API key passed as a query parameter.

## How the API Works

The diagram below shows how a client application communicates with the OpenWeatherMap API.

![OpenWeatherMap API Flow](/img/api-flow.png)

1. The client sends an HTTP request with the required parameters and API key.
2. OpenWeatherMap validates the request and processes it.
3. The API returns a JSON response containing weather information.
