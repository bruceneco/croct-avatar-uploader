import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  argTypes: {
    dotted: {
      description: "Add dots on the border of card.",
      type: "boolean",
    },
  },
  parameters: {
    controls: { include: ["dotted"] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Standard: Story = {};

export const Dotted: Story = {
  args: {
    dotted: true,
  },
};
