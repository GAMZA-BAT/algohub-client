"use client";

import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { useId } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { tooltipWrapper, triggerWrapper, tooltipContainer, tooltipArrow } from "./index.css";

type TooltipPosition =
  | "top-center"
  | "top-left"
  | "top-right"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "left-center"
  | "left-top"
  | "left-bottom"
  | "right-center"
  | "right-top"
  | "right-bottom";

interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: ReactNode;
  placement?: TooltipPosition;
}

const Tooltip = ({
  open,
  onOpenChange,
  children,
  content,
  placement = "bottom-left",
}: TooltipProps) => {
  const tooltipId = useId();
  const { onFocus, onBlur } = useA11yHoverHandler();

  const handleMouseEnter = () => {
    onOpenChange(true);
  };
  const handleMouseLeave = () => {
    onOpenChange(false);
  };

  return (
    <div className={tooltipWrapper}>
      <div
        className={triggerWrapper}
        tabIndex={0}
        role="button"
        aria-describedby={`${tooltipId}-tooltip`}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {open && (
        <div
          className={tooltipContainer({ placement })}
          role="tooltip"
          id={`${tooltipId}-tooltip`}
        >
          <div className={tooltipArrow({ placement })} />
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
