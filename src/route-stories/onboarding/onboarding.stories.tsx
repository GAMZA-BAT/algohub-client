import OnboardingPage from "@/app/page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OnboardingPage> = {
  title: "page/onboarding",
  component: OnboardingPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=491-26604&t=BZcUqksImvGD8cnl-4",
    },
  },
};

type Story = StoryObj<typeof OnboardingPage>;

export const Onboarding: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/onboarding",
      },
    },
  },
};

export default meta;
