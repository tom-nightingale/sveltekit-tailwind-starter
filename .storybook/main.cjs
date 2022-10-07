const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "svelteOptions": {
  },
  "features": {
    "storyStoreV7": false
  },
  "env": config => ({
    ...config,
    SSR: true,
  }),
  async viteFinal(config, { configType }) {
    config.resolve.alias = {
      // ./.svelte-kit/runtime/app no longer exists
      ...config.resolve.alias,
      $app: path.resolve("./.storybook/mocks"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/utils": path.resolve(__dirname, "../src/utils"),
    };
    return config;
  },
}