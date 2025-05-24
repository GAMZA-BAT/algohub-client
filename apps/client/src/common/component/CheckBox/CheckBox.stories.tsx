import CheckBox from "@/common/component/CheckBox";
import type { Meta } from "@storybook/react";
import { useState } from "react";
const meta: Meta<typeof CheckBox> = {
  title: "Common/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBox>;
export default meta;

export const Default = {
  args: {
    checked: false,
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const Playground = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <CheckBox
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
    );
  },
};
