"use client";

import { DataTable } from "@/shared/component/Table";
import SOLVED_STATUS_BASE_COLUMNS from "@/view/group/dashboard/SolvedStatusSection/SolvedStatusTable/constant";
import {
  table1Style,
  table2Style,
  tableWrapper,
  theadStyle,
  wrapper1Style,
  wrapper2Style,
} from "./index.css";
import { useSolvedStatusTable } from "./provider";
import { useState } from "react";

const SolvedStatusTable = () => {
  const { col, row } = useSolvedStatusTable();
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  return (
    <div className={tableWrapper}>
      <DataTable
        rows={row}
        cols={SOLVED_STATUS_BASE_COLUMNS}
        wrapperClassName={wrapper1Style}
        theadClassName={theadStyle}
        tableClassName={table1Style}
        hoveredRowIndex={hoveredRowIndex}
        onRowHoverChange={setHoveredRowIndex}
      />
      <DataTable
        rows={row}
        cols={col}
        wrapperClassName={wrapper2Style}
        theadClassName={theadStyle}
        tableClassName={table2Style}
        hoveredRowIndex={hoveredRowIndex}
        onRowHoverChange={setHoveredRowIndex}
      />
    </div>
  );
};

export default SolvedStatusTable;
