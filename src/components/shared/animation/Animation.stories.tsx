import { arrow, exitGroup, requireLogin } from "@/assets/lottie";
import type { Meta, StoryObj } from "@storybook/react";
import Animation from "./Animation";

const meta: Meta<typeof Animation> = {
	title: "Shared/Animation",
	component: Animation,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: { control: "text" },
		loop: { control: "boolean" },
	},
} satisfies Meta<typeof Animation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "100px",
		animationJson: arrow,
		loop: true,
	},
	render: (args) => <Animation {...args} />,
};

export const NoLoop: Story = {
	args: {
		size: "100px",
		animationJson: arrow,
		loop: false,
	},
};

export const ExitGroup: Story = {
	args: {
		size: "100px",
		animationJson: exitGroup,
	},
};

export const RequireLogin: Story = {
	args: {
		size: "100px",
		animationJson: requireLogin,
	},
};