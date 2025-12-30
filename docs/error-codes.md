# Error Codes

This section describes the common HTTP error codes returned by the OpenWeatherMap API and how to handle them.

---

## Common Error Responses

The API returns error information in JSON format along with an appropriate HTTP status code.

---

## 400 – Bad Request

**Meaning:**  
The request is malformed or contains invalid parameters.

**Common causes:**
- Missing required query parameters
- Invalid parameter values

**Example response:**
```json
{
  "cod": 400,
  "message": "bad query"
}
```
## 401 – Unauthorized

**Meaning:**  
Authentication failed due to an invalid or missing API key.

**Common causes:**
- Missing `appid` parameter
- Incorrect or expired API key

**Example response:**
```json
{
  "cod": 401,
  "message": "Invalid API key"
}
```

## 404 – Not Found

**Meaning:**  
The requested resource or location could not be found.

**Common causes:**
- Incorrect city name
- Invalid city ID
- Unsupported ZIP code

**Example response:**
```json
{
  "cod": "404",
  "message": "city not found"
}
```

## 429 – Too Many Requests

**Meaning:**  
The rate limit for API requests has been exceeded.

**Common causes:**  
- Sending too many requests in a short period of time.

**Example response:**
```json
{
  "cod": 429,
  "message": "You exceeded the API calls limit"
}
```

## Handling Errors

When integrating the API, always:

- Check the HTTP status code of the response

- Validate the `cod` field in the JSON response

- Display meaningful error messages to users

- Implement retry or fallback logic when appropriate

Proper error handling improves application stability and user experience.