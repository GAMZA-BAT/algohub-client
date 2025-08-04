"use client";

import { useId } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import * as styles from "./index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";

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
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  content: ReactNode;
  placement?: TooltipPosition;
}

const Tooltip = ({
  open = false,
  onOpenChange,
  children,
  content,
  placement = "bottom-left",
}: TooltipProps) => {
  const tooltipId = useId();
  const { onFocus } = useA11yHoverHandler();

  const handleMouseEnter = () => {
    onOpenChange?.(true);
  };
  const handleMouseLeave = () => {
    onOpenChange?.(false);
  };

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.triggerWrapper}
        aria-describedby={tooltipId}
        role="tooltip"
        onFocus={onFocus}
      >
        {children}
      </button>
      {open && (
        <div className={styles.tooltipContainer({ placement })}>
          <div className={styles.tooltipArrow({ placement })} />
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
