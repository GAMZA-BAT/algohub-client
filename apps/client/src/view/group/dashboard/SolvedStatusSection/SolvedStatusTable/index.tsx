"use client";

import { DataTable } from "@/shared/component/Table";
import { useSolvedStatusTable } from "./provider";
import { tableStyle, tableWrapper, wrapperStyle } from "./index.css";
import SOLVED_STATUS_BASE_COLUMNS from "@/view/group/dashboard/SolvedStatusSection/SolvedStatusTable/constant";

const SolvedStatusTable = () => {
  const { col, row } = useSolvedStatusTable();

  return (
    <div className={tableWrapper}>
      <DataTable
        rows={row}
        cols={SOLVED_STATUS_BASE_COLUMNS}
        wrapperClassName={wrapperStyle}
        tableClassName={tableStyle}
      />
      <DataTable
        rows={row}
        cols={col}
        wrapperClassName={wrapperStyle}
        tableClassName={tableStyle}
      />
    </div>
  );
};

export default SolvedStatusTable;
