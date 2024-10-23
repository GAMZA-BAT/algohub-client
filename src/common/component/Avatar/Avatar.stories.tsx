import img from "@/asset/img/alogohub_icon.png";
import Avatar from "@/common/component/Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Common/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
    },
    hasShadow: {
      control: {
        type: "radio",
      },
    },
  },
  args: {
    hasShadow: false,
    src: img,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Shadow: Story = {
  args: {
    hasShadow: true,
  },
};

export const Sizes: Story = {
  args: {
    hasShadow: false,
  },
  render: (args) => (
    <ul>
      <li>
        <Avatar size="large" {...args} />
      </li>
      <li>
        <Avatar size="medium" {...args} />
      </li>
      <li>
        <Avatar size="small" {...args} />
      </li>
      <li>
        <Avatar size="mini" {...args} />
      </li>
    </ul>
  ),
};
