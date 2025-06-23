import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableHeadStyle } from "./index.css";

type TableHeadProps = {
  align?: "left" | "right";
  width?: number;
} & ComponentProps<"th">;

const TableHead = ({ className, align, width, ...props }: TableHeadProps) => {
  return (
    <th
      className={clsx(tableHeadStyle({ align }), className)}
      style={{ width: `${width}px` }}
      {...props}
    />
  );
};

export default TableHead;
