import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ResponsiveGridBoxes } from "../src/components/renshu/ResponsiveFlexboxBoxes";

const meta = {
  title: "Renshu/ResponsiveFlexboxBoxes",
  component: ResponsiveGridBoxes,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ResponsiveGridBoxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "90dvw",
    height: "90dvh",
  },
};
