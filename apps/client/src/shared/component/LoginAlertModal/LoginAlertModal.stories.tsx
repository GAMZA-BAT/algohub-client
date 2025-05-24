import type { Meta, StoryObj } from "@storybook/react";
import LoginAlertModal from ".";

const meta: Meta<typeof LoginAlertModal> = {
  title: "Shared/LoginAlertModal",
  component: LoginAlertModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoginAlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
