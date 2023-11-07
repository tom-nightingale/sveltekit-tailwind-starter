import "../src/lib/styles/app.css";
import viewports from "./viewports";
import type { Preview } from "@storybook/svelte";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: viewports,
      defaultViewport: "lg",
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
