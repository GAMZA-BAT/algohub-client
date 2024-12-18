import { useBooleanState } from "@/common/hook/useBooleanState";
import type { Meta } from "@storybook/react";
import type { ComponentProps } from "react";
import Pagination from ".";
import PromptModal from ".";

const meta: Meta<typeof PromptModal> = {
  title: "Shared/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "number" },
    },
    onClose: {
      control: { type: "object" },
    },
    title: {
      control: { type: "text" },
    },
    prompt: {
      control: { type: "text" },
    },
    confirmText: {
      control: { type: "text" },
    },
    onConfirm: {
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof PromptModal>;
export default meta;

export const Default = {
  args: {
    totalPages: 10,
    currentPage: 1,
  },
  render: (args: ComponentProps<typeof PromptModal>) => {
    const { isOpen, open, close } = useBooleanState();
    return (
      <>
        <button onClick={open}>모달 열기</button>
        <PromptModal
          isOpen={isOpen}
          onClose={close}
          title={args.title}
          prompt={args.prompt}
          confirmText="삭제하기"
          onConfirm={args.onConfirm}
        />
      </>
    );
  },
};
