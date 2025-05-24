import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=991-32459&t=XsvrHzrA7CWMznr8-1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["medium", "large"],
    },
    isError: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    placeholder: "default",
  },
  render: (props) => <Input {...props} />,
};

export const LargeInput: Story = {
  args: {
    size: "large",
    placeholder: "large",
  },
  render: (props) => <Input {...props} />,
};

export const ErrorInput: Story = {
  args: {
    size: "large",
    isError: true,
    placeholder: "error",
  },
  render: (props) => <Input {...props} />,
};
