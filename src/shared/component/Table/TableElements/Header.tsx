import { headWrapper } from "@/shared/component/Table/index.css";
import type { TableDataType } from "@/shared/type/table";
import clsx from "clsx";
import { memo } from "react";
import TableHead from "./TableHead";
import { tableHeaderStyle } from "./index.css";

type HeaderProps<T> = {
  columns: TableDataType<T>[];
  theadClassName?: string;
  thClassName?: string;
};

const Header = <T,>({
  columns,
  theadClassName,
  thClassName,
}: HeaderProps<T>) => {
  return (
    <thead className={clsx(theadClassName, tableHeaderStyle)}>
      <tr>
        {columns.map(({ key, Header, width, align }) => (
          <TableHead
            key={key?.toString()}
            className={thClassName}
            width={width}
          >
            <div className={headWrapper({ align })}>
              <Header />
            </div>
          </TableHead>
        ))}
      </tr>
    </thead>
  );
};

export default memo(Header) as typeof Header;
