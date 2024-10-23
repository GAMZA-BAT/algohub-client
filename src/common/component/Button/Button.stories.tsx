import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=500-25826&t=BZcUqksImvGD8cnl-4",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "select" },
      options: ["purple", "gray", "lg"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "small",
    color: "purple",
    children: "Default Button",
  },
  render: (props) => <Button {...props} />,
};

export const ActivePurpleButton: Story = {
  args: {
    size: "medium",
    color: "purple",
    isActive: true,
    children: "Active Purple Button",
  },
  render: (props) => <Button {...props} />,
};
export const MediumGrayButton: Story = {
  args: {
    size: "medium",
    color: "gray",
    children: "Medium Gray Button",
  },
  render: (props) => <Button {...props} />,
};

export const LargeLgButton: Story = {
  args: {
    size: "large",
    color: "lg",
    children: "Large LG Button",
  },
  render: (props) => <Button {...props} />,
};
