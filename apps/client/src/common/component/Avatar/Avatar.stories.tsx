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
        <Avatar size="large" {...args} alt="large" />
      </li>
      <li>
        <Avatar size="medium" {...args} alt="medium" />
      </li>
      <li>
        <Avatar size="small" {...args} alt="small" />
      </li>
      <li>
        <Avatar size="xSmall" {...args} alt="xSmall" />
      </li>
      <li>
        <Avatar size="mini" {...args} alt="mini" />
      </li>
    </ul>
  ),
};
