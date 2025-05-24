"use client";

import { useTabState } from "@/common/component/Tab/TabProvider";
import { tabListStyle } from "@/common/component/Tab/index.css";
import type { ComponentPropsWithoutRef } from "react";

interface TabsProps extends ComponentPropsWithoutRef<"ul"> {}

const TabList = ({ children }: TabsProps) => {
  const { variant } = useTabState();

  return (
    <ul role="tablist" className={tabListStyle({ variant })}>
      {children}
    </ul>
  );
};

export default TabList;
