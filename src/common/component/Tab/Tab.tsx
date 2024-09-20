import Indicator from "@/common/component/Tab/Indicator";
import {
  useTabDispatch,
  useTabState,
} from "@/common/component/Tab/TabProvider";
import { tabStyle } from "@/common/component/Tab/index.css";
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  SVGProps,
} from "react";

interface TabProps extends ComponentPropsWithoutRef<"li"> {
  tabId: string | number;
  icon?: FunctionComponent<SVGProps<SVGElement>>;
}

const Tab = ({ tabId, icon, children, ...props }: TabProps) => {
  const { variant, selectedTabId } = useTabState();
  const dispatch = useTabDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      dispatch({ _TAG: "SetSelectedTab", tabId });
    }
  };

  const isSelected = selectedTabId === tabId;

  const IconElement = icon!;

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="tab"
      tabIndex={0}
      aria-label={`Tab ${tabId} `}
      className={tabStyle({ isSelected, variant: variant })}
      onClick={() => dispatch({ _TAG: "SetSelectedTab", tabId })}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {icon && <IconElement />}
      <span>{children}</span>
      {isSelected && <Indicator />}
    </li>
  );
};

export default Tab;