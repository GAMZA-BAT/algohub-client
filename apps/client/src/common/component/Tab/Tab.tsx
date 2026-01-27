"use client";

import Indicator from "@/common/component/Tab/Indicator";
import {
  useTabDispatch,
  useTabState,
} from "@/common/component/Tab/TabProvider";
import {
  iconStyle,
  tabStyle,
  textStyle,
} from "@/common/component/Tab/index.css";
import type { ComponentPropsWithoutRef, ReactElement } from "react";

interface TabProps extends ComponentPropsWithoutRef<"li"> {
  tabId: string | number;
  indicatorId?: string;
  renderedIcon?: (className: string) => ReactElement;
  mode?: "fill" | "stroke";
}

const Tab = ({
  tabId,
  indicatorId,
  renderedIcon,
  mode,
  children,
  ...props
}: TabProps) => {
  const { variant, selectedTabId } = useTabState();
  const dispatch = useTabDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      dispatch({ _TAG: "SetSelectedTab", tabId });
    }
  };

  const isSelected = selectedTabId === tabId;

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="tab"
      id={`tab-${tabId}`}
      tabIndex={-1}
      aria-controls={`tabPanel-${tabId}`}
      aria-selected={isSelected}
      className={tabStyle({ isSelected, variant: variant })}
      onClick={() => dispatch({ _TAG: "SetSelectedTab", tabId })}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {renderedIcon
        ? renderedIcon?.(
            iconStyle({
              variant: isSelected ? mode : (`none${mode}` as TabProps["mode"]),
            }),
          )
        : null}
      <span className={textStyle({ variant })}>{children}</span>
      {isSelected && <Indicator id={indicatorId} />}
    </li>
  );
};

export default Tab;
