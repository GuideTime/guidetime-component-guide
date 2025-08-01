

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "staticDirs": ["../src/styles"],
  "docs": {
    "autodocs": true
  }
};
export default config;