"use client";

import { DataTable } from "@/shared/component/Table";
import SOLVED_STATUS_BASE_COLUMNS from "@/view/group/dashboard/SolvedStatusSection/SolvedStatusTable/constant";
import {
  table1Style,
  table2Style,
  tableWrapper,
  wrapper1Style,
  wrapper2Style,
} from "./index.css";
import { useSolvedStatusTable } from "./provider";

const SolvedStatusTable = () => {
  const { col, row } = useSolvedStatusTable();

  return (
    <div className={tableWrapper}>
      <DataTable
        rows={row}
        cols={SOLVED_STATUS_BASE_COLUMNS}
        wrapperClassName={wrapper1Style}
        tableClassName={table1Style}
      />
      <DataTable
        rows={row}
        cols={col}
        wrapperClassName={wrapper2Style}
        tableClassName={table2Style}
      />
    </div>
  );
};

export default SolvedStatusTable;
