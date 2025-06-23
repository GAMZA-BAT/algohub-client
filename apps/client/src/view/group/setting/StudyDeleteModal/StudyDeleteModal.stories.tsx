import type { Meta, StoryObj } from "@storybook/react";
import StudyDeleteModal from ".";

const meta: Meta<typeof StudyDeleteModal> = {
  title: "Group/StudyDeleteModal",
  component: StudyDeleteModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StudyDeleteModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
