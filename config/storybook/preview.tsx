import "../../src/app/styles/index.css";
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => RouteDecorator()(Story),
    (Story) => ThemeDecorator("light")(Story),
  ],
};

export default preview;
