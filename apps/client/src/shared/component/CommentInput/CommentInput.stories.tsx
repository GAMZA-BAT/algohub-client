import LeeJin from "@/asset/img/img_card_profile.png";
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

export const Default = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <CommentInput
        profileUrl={LeeJin}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
