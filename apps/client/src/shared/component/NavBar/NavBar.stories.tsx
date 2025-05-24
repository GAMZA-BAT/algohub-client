import type { Meta, StoryObj } from "@storybook/react";
import NavBar from ".";

const meta: Meta<typeof NavBar> = {
  title: "Shared/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <NavBar>
        <NavBar.Item href="/">대시보드</NavBar.Item>
        <NavBar.Item href="/group">문제 리스트</NavBar.Item>
        <NavBar.Item href="/study">스터디 관리</NavBar.Item>
      </NavBar>
    );
  },
};
