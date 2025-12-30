---
title: Forecast by Coordinates
---

## Get Forecast by Coordinates

Retrieve weather forecast using latitude and longitude.

---

## Query Parameters

| Parameter | Required | Description | Example |
|---------|----------|------------|--------|
| lat | Yes | Latitude | 35 |
| lon | Yes | Longitude | 139 |
| appid | Yes | API key | YOUR_API_KEY |

## Example Request

```bash
curl "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=YOUR_API_KEY"
```
