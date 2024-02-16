import { StoryFn } from "@storybook/react";
import { AppTheme } from "shared/lib/hooks/useTheme/ThemeContext";

export const ThemeDecorator = (theme: AppTheme) => {
  return (Story: StoryFn) => {
    return (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
  };
};
