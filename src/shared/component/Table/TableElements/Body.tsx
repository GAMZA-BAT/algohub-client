import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
import TableCell from "./TableCell";
import { tableCellTextStyle, tableRowStyle } from "./index.css";

type BodyProps<T> = {
  rows: T[];
  cols: TableDataType<T>[];
  trClassName?: string;
  tdClassName?: string;
};

const Body = <T,>({ rows, cols, trClassName, tdClassName }: BodyProps<T>) => {
  return (
    <tbody>
      {rows.map((row, idx) => (
        // TODO: api 연결 후, raw data에 고유 id값 추가 등의 방안으로 key 교체하기
        <tr key={idx} className={clsx(trClassName, tableRowStyle)}>
          {cols.map(({ key, align, Cell }) => (
            <TableCell
              key={key?.toString()}
              align={align}
              className={clsx(tableCellTextStyle, tdClassName)}
            >
              {Cell(row)}
            </TableCell>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
