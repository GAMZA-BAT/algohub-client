import { arrow, exitGroup, requireLogin } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Animation> = {
  title: "Common/Animation",
  component: Animation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "text" },
    loop: { control: "boolean" },
    animationJson: { control: "object", description: "Lottie JSON" },
  },
} satisfies Meta<typeof Animation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "100px",
    animationJson: arrow,
  },
  render: (props) => <Animation {...props} />,
};

export const NoLoop: Story = {
  args: {
    size: "100px",
    animationJson: arrow,
    loop: false,
  },
  render: (props) => <Animation {...props} />,
};

export const ExitGroup: Story = {
  args: {
    size: "100px",
    animationJson: exitGroup,
  },
  render: (props) => <Animation {...props} />,
};

export const RequireLogin: Story = {
  args: {
    size: "100px",
    animationJson: requireLogin,
  },
  render: (props) => <Animation {...props} />,
};
