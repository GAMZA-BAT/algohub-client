"use client";

import { cloneElement, isValidElement, useId, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import * as styles from "./index.css";

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
  content: ReactNode;
  placement?: TooltipPosition;
}

const Tooltip = ({
  children,
  content,
  placement = "bottom-left",
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipId = useId();

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  if (!isValidElement<HTMLAttributes<HTMLElement>>(children)) {
    return <>{children}</>;
  }

  const trigger = cloneElement(children, {
    "aria-describedby": isOpen ? tooltipId : undefined,
    // TODO(@j-nary): 규한선배한테 코리받고 aria 추가하기
  });

  return (
    <div
      className={styles.triggerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}
      {isOpen && (
        <details className={styles.tooltipWrapper({ placement })}>
          <summary className={styles.tooltipContentWrapper}>
            <div className={styles.tooltipArrow({ placement })} />
            {content}
          </summary>
        </details>
      )}
    </div>
  );
};

export default Tooltip;
