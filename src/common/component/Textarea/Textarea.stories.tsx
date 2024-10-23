import type { Meta, StoryObj } from "@storybook/react";
import Textarea from ".";

const meta: Meta<typeof Textarea> = {
  title: "Common/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=500-25942&t=XsvrHzrA7CWMznr8-1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isError: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "default",
  },
  render: (props) => <Textarea {...props} />,
};

export const ErrorInput: Story = {
  args: {
    isError: true,
    placeholder: "error",
  },
  render: (props) => <Textarea {...props} />,
};
