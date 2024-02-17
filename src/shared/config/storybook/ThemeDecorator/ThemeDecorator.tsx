/* eslint-disable react/display-name */
import { StoryFn } from "@storybook/react";
import { AppTheme } from "shared/lib/hooks/useTheme/ThemeContext";

export const ThemeDecorator = (theme: AppTheme) => (Story: StoryFn) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
