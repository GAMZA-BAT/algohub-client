"use client";

import SOLVED_STATUS_BASE_COLUMNS from "@/app/group/[groupId]/components/SolvedStatusSection/SolvedStatusTable/constant";
import { useSolvedStatusTable } from "@/app/group/[groupId]/components/SolvedStatusSection/SolvedStatusTable/provider";
import { DataTable } from "@/shared/component/Table";
import { useState } from "react";
import {
  table1Style,
  table2Style,
  tableWrapper,
  theadStyle,
  wrapper1Style,
  wrapper2Style,
} from "./index.css";

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
