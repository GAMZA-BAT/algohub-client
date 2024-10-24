"use client";
import type { MemberResponse } from "@/api/group/type";
import { createContext, useReducer } from "react";

type TableDataContextType =
  | {
      processedData: MemberResponse[];
      state: State[];
    }
  | undefined;
type TableDispatchContextType = React.Dispatch<Actions> | undefined;

export const TableDataContext = createContext<TableDataContextType>(undefined);
export const TableDispatchContext =
  createContext<TableDispatchContextType>(undefined);

type Actions = {
  type: "SET_SORT";
  key: keyof MemberResponse;
};

type State = {
  key: keyof MemberResponse;
  order: "asc" | "desc";
};

const memberListTableReducer = (state: State[], action: Actions): State[] => {
  const { key } = action;
  const existingCriteriaIndex = state.findIndex(
    (criteria) => criteria.key === key,
  );

  let newSortCriteria = [...state];

  if (existingCriteriaIndex >= 0) {
    const currentOrder = newSortCriteria[existingCriteriaIndex].order;

    if (currentOrder === "asc") {
      newSortCriteria[existingCriteriaIndex] = {
        key,
        order: "desc",
      };
    } else if (currentOrder === "desc") {
      newSortCriteria.splice(existingCriteriaIndex, 1);
    }
  } else {
    newSortCriteria = [{ key, order: "asc" }, ...newSortCriteria];
  }

  return newSortCriteria;
};

type MemberListProviderProps = {
  children: React.ReactNode;
  data: MemberResponse[];
};

export const MemberListProvider = ({
  children,
  data,
}: MemberListProviderProps) => {
  const [state, dispatch] = useReducer(memberListTableReducer, [] as State[]);
  const processedData = data.toSorted((a, b) => {
    for (const { key, order } of state) {
      let compareResult = 0;

      if (key === "achivement" && key === "achivement") {
        compareResult = +a[key].replace("%", "") - +b[key].replace("%", "");
      } else if (key === "joinDate" && key === "joinDate") {
        compareResult = new Date(a[key]).getTime() - new Date(b[key]).getTime();
      }

      if (compareResult !== 0) {
        return order === "asc" ? compareResult : -compareResult;
      }
    }
    return 0;
  });

  return (
    <TableDispatchContext.Provider value={dispatch}>
      <TableDataContext.Provider value={{ state, processedData }}>
        {children}
      </TableDataContext.Provider>
    </TableDispatchContext.Provider>
  );
};
