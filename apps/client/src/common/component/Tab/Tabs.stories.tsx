import TabGroup from "@/common/component/Tab";
import Tabs from "@/common/component/Tab/Tabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Common/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=500-25826&t=BZcUqksImvGD8cnl-4",
    },
    darkMode: {},
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
  },

  render: (args) => {
    return (
      <TabGroup.Tabs {...args}>
        <TabGroup.TabList>
          <TabGroup.Tab tabId="1">Tab 1</TabGroup.Tab>
          <TabGroup.Tab tabId="2">Tab 2</TabGroup.Tab>
          <TabGroup.Tab tabId="3">Tab 3</TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanels>
          <div style={{ color: "white" }}>1번째 패널</div>
          <div style={{ color: "white" }}>2번째 패널</div>
          <div style={{ color: "white" }}>3번째 패널</div>
        </TabGroup.TabPanels>
      </TabGroup.Tabs>
    );
  },
};
