"use client";

import type { SolutionsCurrentStatusResponse } from "@/app/api/type";
import {
  problemTdWrapper,
  tdStyle,
} from "@/app/group/[groupId]/components/SolvedStatusSection/SolvedStatusTable/index.css";
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

export const SolvedStatusTableProvider = ({
  children,
  value,
}: SolvedStatusTableProviderProps) => {
  const problemColumns: TableDataType<SolutionsCurrentStatusResponse>[] =
    value[0].problems.map((_, index) => ({
      key: `problem${index + 1}`,
      Header: () => `문제${index + 1}`,
      Cell: (data) => (
        <div className={problemTdWrapper}>
          {data.problems[index].submissionCount === 0 ? (
            <p className={tdStyle({ column: "unsolvedProblem" })}>0/--</p>
          ) : (
            <p className={tdStyle({ column: "solvedProblem" })}>
              {data.problems[index].submissionCount}/
              {data.problems[index].firstCorrectDuration}
            </p>
          )}
        </div>
      ),
      width: 84,
    }));

  return (
    <SolvedStatusTableContext.Provider
      value={{ col: problemColumns, row: value }}
    >
      {children}
    </SolvedStatusTableContext.Provider>
  );
};
