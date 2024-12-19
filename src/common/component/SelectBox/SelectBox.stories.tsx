import type { SolutionLanguage } from "@/app/api/solutions/type";
import SelectBox from "@/common/component/SelectBox";
import { SOLVED_LANGUAGE } from "@/shared/constant/solvedFilterKey";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof SelectBox> = {
  title: "Common/SelectBox",
  component: SelectBox,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=491-32268&m=dev",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    align: {
      control: {
        type: "radio",
        options: ["left", "center", "right"],
      },
    },
  },
} as Meta<typeof SelectBox>;

type Story = StoryObj<typeof meta>;

// 기본 SelectBox 스토리
export const Default: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: (_props) => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
      <SelectBox
        label="모든 언어"
        options={SOLVED_LANGUAGE}
        value={selectedOption}
        onChange={(option: string) => setSelectedOption(option)}
      />
    );
  },
};

// 왼쪽 정렬된 SelectBox 스토리
export const LeftAligned: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: (_props) => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
      <SelectBox
        label="모든 언어"
        options={SOLVED_LANGUAGE}
        align="left"
        value={selectedOption}
        onChange={(option: string) => setSelectedOption(option)}
      />
    );
  },
};

// 미리 선택된 값이 있는 SelectBox 스토리
export const Preselected: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: (_props) => {
    const [selectedOption, setSelectedOption] = useState(SOLVED_LANGUAGE[0]);

    return (
      <SelectBox
        label="모든 언어"
        options={SOLVED_LANGUAGE}
        value={selectedOption}
        onChange={(option: string) =>
          setSelectedOption(option as SolutionLanguage)
        }
      />
    );
  },
};

export default meta;
