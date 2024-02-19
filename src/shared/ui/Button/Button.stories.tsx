import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    children: "Text",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "accent",
  },
};
export const PrimaryDark: Story = {
  args: {
    variant: "accent",
  },
  decorators: ThemeDecorator("dark"),
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};
export const OutlinedDark: Story = {
  args: {
    variant: "outlined",
  },
  decorators: ThemeDecorator("dark"),
};
export const Clear: Story = {
  args: {
    variant: "clear",
  },
};
export const ClearDark: Story = {
  args: {
    variant: "clear",
  },
  decorators: ThemeDecorator("dark"),
};
