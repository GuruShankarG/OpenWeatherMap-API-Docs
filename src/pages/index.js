import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="OpenWeatherMap API Documentation"
      description="Developer documentation for the OpenWeatherMap API">
      <main style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>OpenWeatherMap API Documentation</h1>

        <p>
          This documentation provides clear and practical guidance for using
          the OpenWeatherMap API. It includes authentication details,
          endpoint references, request examples, response formats,
          error handling, and best practices.
        </p>

        <p>
          This project is created as a personal documentation initiative
          to demonstrate professional API and developer documentation skills.
        </p>

        <h2>What you’ll find here</h2>
        <ul>
          <li>How to authenticate using an API key</li>
          <li>Current Weather API endpoints</li>
          <li>Query parameters and usage examples</li>
          <li>Sample JSON responses</li>
          <li>Error codes and rate limit guidance</li>
        </ul>

        <p>
        Use the navigation menu to start with{' '}
        <Link to="/docs/intro"><strong>Introduction</strong></Link>
        {' '}or explore the{' '}
        <Link to="/docs/current-weather-api-overview">
        <strong>Current Weather API</strong>
        </Link>{' '}
        endpoints.
</p>
      </main>
    </Layout>
  );
}
