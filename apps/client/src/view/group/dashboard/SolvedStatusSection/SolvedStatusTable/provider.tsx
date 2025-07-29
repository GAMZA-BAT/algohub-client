"use client";

import type { SolutionsCurrentStatusResponse } from "@/app/api/type";
import type { TableDataType } from "@/shared/type/table";
import { type ReactNode, createContext, useContext } from "react";

type SolvedStatusTableContextValue = {
  row: SolutionsCurrentStatusResponse[];
  col: TableDataType<SolutionsCurrentStatusResponse>[];
};

const SolvedStatusTableContext =
  createContext<SolvedStatusTableContextValue | null>(null);

export const useSolvedStatusTable = () => {
  const context = useContext(SolvedStatusTableContext);

  if (!context) {
    throw new Error(
      "useSolvedStatusTable must be used within SolvedStatusTableProvider",
    );
  }

  return context;
};

type SolvedStatusTableProviderProps = {
  children: ReactNode;
  value: SolutionsCurrentStatusResponse[];
};

const baseColumns: TableDataType<SolutionsCurrentStatusResponse>[] = [
  {
    key: "rank",
    Header: () => "랭킹",
    Cell: (data) => data.rank,
    width: 75,
  },
  {
    key: "total",
    Header: () => "총점",
    Cell: (data) => `${data.totalSubmissionCount}/${data.totalPassedTime}`,
    width: 200,
  },
  {
    key: "id",
    Header: () => "아이디",
    Cell: (data) => data.nickname,
    width: 75,
  },
];

export const SolvedStatusTableProvider = ({
  children,
  value,
}: SolvedStatusTableProviderProps) => {
  const problemColumns: TableDataType<SolutionsCurrentStatusResponse>[] =
    value[0].problems.map((_, index) => ({
      key: `problem${index + 1}`,
      Header: () => `문제${index + 1}`,
      Cell: (data) =>
        `${data.problems[index].submissionCount}/${data.problems[index].firstCorrectDuration}`,
      width: 100,
    }));

  const col = [...baseColumns, ...problemColumns];

  return (
    <SolvedStatusTableContext.Provider value={{ col, row: value }}>
      {children}
    </SolvedStatusTableContext.Provider>
  );
};
