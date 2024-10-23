import SignupPage from "@/app/signup/page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignupPage> = {
  title: "page/SignupPage",
  component: SignupPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=491-26932&t=5sYtgK4iiARkvjFd-4",
    },
  },
};

type Story = StoryObj<typeof SignupPage>;

export const Signup: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/signup",
      },
    },
  },
};

export default meta;
