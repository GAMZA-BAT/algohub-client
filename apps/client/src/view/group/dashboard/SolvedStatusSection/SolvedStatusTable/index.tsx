"use client";

import { DataTable } from "@/shared/component/Table";
import { useSolvedStatusTable } from "./provider";
import { tableStyle, wrapperStyle } from "./index.css";

const SolvedStatusTable = () => {
  const { col, row } = useSolvedStatusTable();

  return (
    <DataTable
      rows={row}
      cols={col}
      wrapperClassName={wrapperStyle}
      tableClassName={tableStyle}
      />
  );
};

export default SolvedStatusTable;
