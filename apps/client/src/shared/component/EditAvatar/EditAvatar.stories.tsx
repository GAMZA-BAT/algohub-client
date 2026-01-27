import defaultImg from "@/asset/img/alogohub_icon.png";
import EditAvatar from "@/shared/component/EditAvatar";
import type { Meta, StoryObj } from "@storybook/react";

// Meta 객체 설정
const meta: Meta<typeof EditAvatar> = {
  title: "Common/EditAvatar",
  component: EditAvatar,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=991-33888&t=Lz2HW9m4PJXKHXHc-4",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "프로필 이미지 경로",
    },
    alt: {
      control: "text",
      description: "이미지 설명",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof EditAvatar>;

export default meta;

// 스토리 타입 정의
type Story = StoryObj<typeof meta>;

// Default 스토리
export const Default: Story = {
  args: {
    src: defaultImg, // 기본 이미지 경로
    alt: "프로필 사진 수정",
  },
};
