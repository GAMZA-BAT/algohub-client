"use client";

import { useTabState } from "@/common/component/Tab/TabProvider";
import {
  Children,
  type PropsWithChildren,
  type ReactElement,
  cloneElement,
} from "react";

type TabPanelsProps = PropsWithChildren;

const TabPanels = ({ children }: TabPanelsProps) => {
  const { selectedTabId } = useTabState();

  return (
    <>
      {Children.toArray(children).map((panel, idx) => {
        if (idx + 1 === +selectedTabId) {
          return cloneElement(panel as ReactElement, {
            key: idx + 1,
            role: "tabpanel",
            id: `tabpanel-${idx + 1}`,
            "aria-labelledby": `tab-${idx + 1}`,
          });
        }
      })}
    </>
  );
};

export default TabPanels;
