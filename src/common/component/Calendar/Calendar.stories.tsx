import type { Meta, StoryObj } from "@storybook/react";
import Calendar from ".";

const meta: Meta<typeof Calendar> = {
  title: "Common/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=991-32459&t=XsvrHzrA7CWMznr8-1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    startDate: { control: { type: "date" } },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
  render: (props) => <Calendar {...props} />,
};

export const WithDefaultValue: Story = {
  args: {
    startDate: new Date("2022-01-01"),
    onChange: () => {},
  },
  render: (props) => <Calendar {...props} />,
};
