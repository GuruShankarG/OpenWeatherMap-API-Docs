// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'authentication',
        'base-url-overview',
      ],
    },

    {
      type: 'category',
      label: 'Current Weather API',
      collapsed: false,
      items: [
        'current-weather/overview',
        'current-weather/by-city-name',
        'current-weather/by-city-id',
        'current-weather/by-coordinates',
        'current-weather/by-zip-code',
      ],
    },

    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'error-codes',
        'rate-limits',
        'tips-common-mistakes',
      ],
    },
  ],
};

export default sidebars;
