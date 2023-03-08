const path = require('path');

module.exports = {
  stories: [
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',

    /**
     * THIS IS NOT AMUSING STORYBOOK! ಠ_ಠ
     * 
     * I should not have to opt out of data harvesting.
     */
    disableTelemetry: true
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../app/")
    };

    return config;
  }
}