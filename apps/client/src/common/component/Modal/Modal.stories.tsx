import { useBooleanState } from "@/common/hook/useBooleanState";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Common/Modal",
  component: Modal,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=491-32887&t=KVuHhST2nLEGjHN3-4",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "clicked" },
  },
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: (_props) => {
    const { isOpen, open, close } = useBooleanState();
    return (
      <>
        <button onClick={open}>모달 열기</button>
        <Modal isOpen={isOpen} onClose={close}>
          <button onClick={close}>X</button>
          <div>모달 컨텐츠</div>
        </Modal>
      </>
    );
  },
};

export default meta;
