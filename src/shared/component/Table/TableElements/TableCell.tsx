import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableCellStyle } from "./index.css";

type TableCellProps = {
  align?: "left" | "right";
} & ComponentProps<"td">;

const TableCell = ({ className, align, ...props }: TableCellProps) => (
  <td className={clsx(tableCellStyle({ align }), className)} {...props} />
);
export default TableCell;
