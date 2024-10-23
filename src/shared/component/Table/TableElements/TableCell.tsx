import type { TableType } from "@/shared/type/table";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableCellStyle } from "./index.css";

type TableCellProps = {
  align?: "left" | "right";
  type: TableType;
} & ComponentProps<"td">;

const TableCell = ({ className, align, type, ...props }: TableCellProps) => (
  <td className={clsx(tableCellStyle({ align, type }), className)} {...props} />
);
export default TableCell;
