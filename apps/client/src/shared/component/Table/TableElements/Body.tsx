import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
import type { Attributes } from "react";
import TableCell from "./TableCell";
import {
  tableCellTextStyle,
  tableRowHoveredStyle,
  tableRowStyle,
} from "./index.css";

type BodyProps<T> = {
  rows: T[];
  cols: TableDataType<T>[];
  trClassName?: string;
  tdClassName?: string;
  hoveredRowIndex?: number | null;
  onRowHoverChange?: (rowIndex: number | null) => void;
};

const Body = <T,>({
  rows,
  cols,
  trClassName,
  tdClassName,
  hoveredRowIndex,
  onRowHoverChange,
}: BodyProps<T>) => {
  return (
    <tbody>
      {rows.map((row, idx) => (
        // TODO: api 연결 후, raw data에 고유 id값 추가 등의 방안으로 key 교체하기
        <tr
          key={idx}
          className={clsx(
            trClassName,
            tableRowStyle,
            hoveredRowIndex === idx && tableRowHoveredStyle,
          )}
          onMouseEnter={() => onRowHoverChange?.(idx)}
          onMouseLeave={() => onRowHoverChange?.(null)}
        >
          {cols.map(({ key, align, Cell }) => (
            <TableCell
              key={key?.toString()}
              align={align}
              className={clsx(tableCellTextStyle, tdClassName)}
            >
              <Cell {...(row as Attributes & T)} />
            </TableCell>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
