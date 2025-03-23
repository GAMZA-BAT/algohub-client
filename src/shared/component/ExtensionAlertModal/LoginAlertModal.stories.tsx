import type { Meta, StoryObj } from "@storybook/react";
import ExtensionAlertModal from ".";

const meta: Meta<typeof ExtensionAlertModal> = {
  title: "Shared/LoginAlertModal",
  component: ExtensionAlertModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ExtensionAlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
