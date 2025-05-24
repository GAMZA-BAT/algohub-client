import { IcnList } from "@/asset/svg";
import type { ComponentProps } from "react";
import {
  ellipsisStyle,
  iconSizeStyle,
  paginationButtonStyle,
  paginationContentStyle,
  paginationItemStyle,
} from "./index.css";

export const PaginationContent = ({ ...props }: ComponentProps<"ul">) => (
  <ul className={paginationContentStyle({ type: "wrapper" })} {...props} />
);

type PaginationItemProps = {
  isActive?: boolean;
} & ComponentProps<"button">;

export const PaginationItem = ({
  onClick,
  isActive,
  disabled,
  ...props
}: PaginationItemProps) => (
  <li className={paginationItemStyle}>
    <button
      onClick={onClick}
      disabled={disabled}
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled ? "true" : undefined}
      className={paginationButtonStyle({ isActive })}
      {...props}
    />
  </li>
);

export const PaginationEllipsis = ({ ...props }: ComponentProps<"span">) => (
  <li className={paginationItemStyle}>
    <span aria-hidden className={ellipsisStyle} {...props}>
      <IcnList className={iconSizeStyle} />
    </span>
  </li>
);
