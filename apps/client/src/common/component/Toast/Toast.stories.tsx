import Toast from "@/common/component/Toast/Toast";
import { useToast } from "@/common/hook/useToast";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  title: "Common/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { showToast } = useToast();

    return (
      <>
        <button onClick={() => showToast("성공하셨습니다.", "success")}>
          Create a Success Toast
        </button>
        <button onClick={() => showToast("실패하셨습니다..", "error")}>
          Create a Error Toast
        </button>
        <button onClick={() => showToast("토스트 기본값입니다.")}>
          Create a Default Toast
        </button>
      </>
    );
  },
};
