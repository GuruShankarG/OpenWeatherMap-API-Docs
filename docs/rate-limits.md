# Rate Limits

- The OpenWeatherMap API enforces rate limits to ensure fair usage and system stability.

- Rate limits define how many API requests you can make within a specific time period.

---

## Free Plan Rate Limits

For the free tier of OpenWeatherMap:

- **60 API calls per minute**
- Limits apply **per API key**
- Exceeding the limit will result in an error response

> Rate limits may change depending on your subscription plan.

---

## What Happens When You Exceed the Limit

If you exceed the allowed number of requests:

- The API returns an **HTTP 429 (Too Many Requests)** status code
- Your request will not be processed
- You must wait before sending new requests

**Example error response:**
```json
{
  "cod": 429,
  "message": "You exceeded the API calls limit"
}
```

## Best Practices to Avoid Rate Limits

To prevent hitting rate limits:

- Cache API responses when possible

- Avoid making repeated requests for the same location

- Add delays between consecutive requests

- Handle HTTP 429 responses gracefully in your application

## Upgrading Your Plan

If your application requires a higher request volume, consider upgrading to a paid plan on OpenWeatherMap.

Paid plans offer:

- Higher rate limits

- Better performance

- Additional API features