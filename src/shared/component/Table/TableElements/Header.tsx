import { headWrapper } from "@/shared/component/Table/index.css";
import type { TableDataType, TableType } from "@/shared/type/table";
import { memo } from "react";
import TableHead from "./TableHead";
import { tableHeaderStyle } from "./index.css";

type HeaderProps<T> = {
  columns: TableDataType<T>[];
  type: TableType;
};

const Header = <T,>({ columns, type }: HeaderProps<T>) => {
  return (
    <thead className={tableHeaderStyle({ type })}>
      <tr>
        {columns.map(({ key, Header, width, align, props }) => (
          <TableHead key={key?.toString()} {...props} width={width}>
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
