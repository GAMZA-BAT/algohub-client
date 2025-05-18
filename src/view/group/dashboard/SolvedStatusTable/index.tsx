"use client";

import type { SolutionsCurrentStatusResponse } from "@/app/api/type";
import SolvedStatusTableContent from "./SolvedStatusTableContent";
import { SolvedStatusTableProvider } from "./provider";

type SolvedStatusTableProps = {
  data: SolutionsCurrentStatusResponse[];
};

const SolvedStatusTable = ({ data }: SolvedStatusTableProps) => {
  console.log({ data });
  return (
    <SolvedStatusTableProvider value={data}>
      <SolvedStatusTableContent />
    </SolvedStatusTableProvider>
  );
};

export default SolvedStatusTable;
