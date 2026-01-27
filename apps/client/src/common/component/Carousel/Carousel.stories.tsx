import type { Meta, StoryObj } from "@storybook/react";
import { type default as Button, default as Carousel } from ".";

const meta: Meta<typeof Carousel> = {
  title: "Common/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "90vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const Card = ({ num }: { num: number }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "30rem",
        borderRadius: "8px",
        fontSize: "40px",
        backgroundColor: "#222734",
        color: "white",
      }}
    >
      {num}
    </div>
  );
};

export const Default: Story = {
  args: {
    children: "Default Carousel",
  },
  render: () => {
    const arr = Array.from({ length: 16 }).map((_, i) => i);
    return (
      <Carousel length={15}>
        {arr.map((num) => (
          <Carousel.Item key={num} index={num}>
            <Card num={num} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  },
};
