import type { Meta, StoryObj } from "@storybook/react";
import picture from "../../assets/picture.svg";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  parameters: {
    controls: { exclude: ["startAdornment"] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Standard: Story = {
  args: {
    content: "Standard text",
  },
};

export const WithAdornment: Story = {
  storyName: "With Adornment",
  args: {
    content: "With adornment",
    startAdornment: (
      <img src={picture} alt={"Image of a picture, black and white"} />
    ),
  },
};
