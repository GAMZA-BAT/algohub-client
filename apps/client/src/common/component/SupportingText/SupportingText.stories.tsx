import type { Meta, StoryObj } from "@storybook/react";
import SupportingText from ".";

const meta: Meta<typeof SupportingText> = {
  title: "Common/SupportingText",
  component: SupportingText,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=991-32459&t=XsvrHzrA7CWMznr8-1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isError: {
      control: { type: "boolean" },
    },
    hasErrorIcon: {
      control: { type: "boolean" },
    },
    message: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof SupportingText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "SupportingText",
  },
  render: (props) => <SupportingText {...props} />,
};

export const SupportingTextWithErrorIcon: Story = {
  args: {
    isError: true,
    hasErrorIcon: true,
    message: "SupportingTextWithErrorIcon",
  },
  render: (props) => <SupportingText {...props} />,
};

export const SupportingTextWithErrorMessage: Story = {
  args: {
    isError: true,
    message: "SupportingTextWithErrorMessage",
  },
  render: (props) => <SupportingText {...props} />,
};
