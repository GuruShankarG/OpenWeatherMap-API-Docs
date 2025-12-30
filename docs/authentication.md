# Authentication

## What is an API Key?
An API key is a secret code that allows you to access the OpenWeatherMap API.  
Think of it like a password for your app to get weather data.

## How to Get an API Key
1. Go to [OpenWeatherMap](https://openweathermap.org/).  
2. Sign up for a free account.  
3. After logging in, go to **API keys** in your dashboard.  
4. Copy your default API key or create a new one.

## How to Use Your API Key
Include your API key as a query parameter called `appid` in your requests.  
Example:  

```http
# Get weather by city name
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY

# Get weather by coordinates
https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=YOUR_API_KEY
