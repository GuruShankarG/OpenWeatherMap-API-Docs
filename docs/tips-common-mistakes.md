# Tips and Common Mistakes

## Tips

- Always include your `appid` (API key) in every request.
- By default, temperature values are returned in **Kelvin**.
  Use `units=metric` for Celsius or `units=imperial` for Fahrenheit.
- Cache API responses whenever possible to reduce API calls.
- Use correct parameter names (`q`, `id`, `lat`, `lon`, `zip`) based on the request type.
- Check the API response status code before processing data.

---

## Common Mistakes

- Forgetting to include the API key (`appid`) in the request.
- Making too many requests in a short time, causing rate limit errors.
- Passing incorrect city names or IDs.
- Using invalid coordinates (latitude must be between -90 and 90, longitude between -180 and 180).
- Not handling error responses like `401`, `404`, or `429` in the application code.

