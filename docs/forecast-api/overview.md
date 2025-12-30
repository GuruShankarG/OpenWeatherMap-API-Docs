---
title: Forecast API Overview
---

## What is the Forecast API?

The Forecast API provides weather predictions for the next **5 days**, with data available at **3-hour intervals**.

Use this API when you need:
- Future weather information
- Temperature trends
- Weather planning for upcoming days

---

## Endpoint Information

| Item | Value |
|-----|------|
| Base URL | https://api.openweathermap.org |
| Endpoint | /data/2.5/forecast |
| Method | GET |
| Format | JSON |

---

## How It Works

The API returns an array of forecast objects.  
Each object represents weather data for a **specific 3-hour time slot**.
