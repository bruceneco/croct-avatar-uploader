import type { Meta, StoryObj } from "@storybook/react";
import SlideBar from "./SlideBar";

const meta: Meta<typeof SlideBar> = {
  title: "SlideBar",
  component: SlideBar,
  argTypes: {
    value: {
      type: "number",
      control: {
        type: "range",
      },
    },
  },
  parameters: {
    controls: { exclude: ["onValueUpdate"] },
  },
};

export default meta;
type Story = StoryObj<typeof SlideBar>;

export const Standard: Story = {
  args: {
    value: 30,
  },
};
