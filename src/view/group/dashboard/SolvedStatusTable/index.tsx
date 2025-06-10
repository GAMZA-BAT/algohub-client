"use client";

import { DataTable } from "@/shared/component/Table";
import type { SolutionsCurrentStatusResponse } from "@/app/api/type";
import { SolvedStatusTableProvider, useSolvedStatusTable } from "./provider";
import { tableWrapper, wrapperStyle } from "./index.css";

type SolvedStatusTableProps = {
  data: SolutionsCurrentStatusResponse[];
};

const SolvedStatusTable = ({ data }: SolvedStatusTableProps) => {
  const { col, row } = useSolvedStatusTable();

  return (
    <SolvedStatusTableProvider value={data}>
      <div className={tableWrapper}>
        <DataTable
          rows={row}
          cols={col}
          wrapperClassName={wrapperStyle}
          tableClassName={tableWrapper}
        />
      </div>
    </SolvedStatusTableProvider>
  );
};

export default SolvedStatusTable;
