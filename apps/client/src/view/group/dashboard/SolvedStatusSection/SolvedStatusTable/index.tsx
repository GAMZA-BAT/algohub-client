"use client";

import { DataTable } from "@/shared/component/Table";
import { useSolvedStatusTable } from "./provider";
import { tableWrapper, wrapperStyle } from "./index.css";

const SolvedStatusTable = () => {
  const { col, row } = useSolvedStatusTable();

  return (
    <div className={tableWrapper}>
      <DataTable
        rows={row}
        cols={col}
        wrapperClassName={wrapperStyle}
        tableClassName={tableWrapper}
      />
    </div>
  );
};

export default SolvedStatusTable;
