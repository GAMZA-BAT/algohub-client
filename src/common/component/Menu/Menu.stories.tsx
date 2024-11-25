import { IcnBtnArrowDown, IcnNotification } from "@/asset/svg";
import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";
import type { ComponentProps } from "react";
import Dropdown from "../Dropdown";
import Menu from "./Menu";
import { storyButtonStyle, storyDivStyle } from "./Menu.css";

const meta: Meta<typeof Menu> = {
  title: "Common/Menu",
  component: Menu,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=661-24238&t=tbiDTxMfb2kXOkUW-4",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic", // auto | dynamic | code
      },
    },
  },
  render: () => {
    // 버튼의 className은 항상 clsx로 결합(Menu 컴포넌트가 기본 스타일 className을 주입해줌)
    const TriggerButton = ({
      className,
      ...props
    }: ComponentProps<"button">) => {
      return (
        <button className={clsx(storyButtonStyle, className)} {...props}>
          <IcnNotification width="2.5rem" height="2.5rem" />
        </button>
      );
    };
    return (
      <Menu
        label="default"
        renderTriggerButton={<TriggerButton />}
        renderList={
          <Dropdown>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </Dropdown>
        }
      />
    );
  },
};

export const LanguageWithDivTrigger: Story = {
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
  render: () => {
    // 버튼의 className은 항상 clsx로 결합(Menu 컴포넌트가 기본 스타일 className을 주입해줌)
    const TriggerButton = ({ className, ...props }: ComponentProps<"div">) => {
      return (
        // <button> 외의 것을 사용할 경우 role="button"을 넣어주세요
        <div
          className={clsx(storyDivStyle, className)}
          role="button"
          {...props}
        >
          <span>모든 언어</span>{" "}
          <IcnBtnArrowDown width={"2rem"} height={"2rem"} />
        </div>
      );
    };
    return (
      <Menu
        label="language"
        renderTriggerButton={<TriggerButton />}
        renderList={
          <Dropdown>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Rust</li>
          </Dropdown>
        }
      />
    );
  },
};

export default meta;
