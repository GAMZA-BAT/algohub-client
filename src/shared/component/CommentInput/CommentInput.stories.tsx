import LeeJin from "@/asset/img/leejin.png";
import CommentInput from "@/shared/component/CommentInput";
import type { Meta } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof CommentInput> = {
  title: "Shared/CommentInput",
  component: CommentInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "32rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CommentInput>;
export default meta;

export const NoticeInput = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <CommentInput
        variant="notice"
        profileUrl={LeeJin}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const DetailInput = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <CommentInput
        variant="detail"
        profileUrl={LeeJin}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
