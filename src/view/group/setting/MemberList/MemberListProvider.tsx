"use client";
import type { MemberResponse } from "@/app/api/groups/type";
import { createContext, useReducer } from "react";

type TableDataContextType =
  | {
      processedData: MemberResponse[];
      state: State;
    }
  | undefined;
type TableDispatchContextType = React.Dispatch<Actions> | undefined;

export const TableDataContext = createContext<TableDataContextType>(undefined);
export const TableDispatchContext =
  createContext<TableDispatchContextType>(undefined);

type SetSortAction = {
  type: "SET_SORT";
  key: keyof MemberResponse;
};

type SetFilterAction = {
  type: "SET_FILTER";
  key: keyof MemberResponse;
  value: string;
};
type Actions = SetSortAction | SetFilterAction;

type SortCriteria = {
  key: keyof MemberResponse;
  order: "asc" | "desc";
};

type State = {
  sortCriteria: SortCriteria[];
  filterKey?: keyof MemberResponse;
  filterValue: string;
};

const memberListTableReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "SET_SORT": {
      const { key } = action;
      const existingCriteriaIndex = state.sortCriteria.findIndex(
        (criteria) => criteria.key === key,
      );

      let newSortCriteria = [...state.sortCriteria];

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

      return { ...state, sortCriteria: newSortCriteria };
    }
    case "SET_FILTER": {
      const { key, value } = action;

      const isSameFilter =
        state.filterKey === key && state.filterValue === value;

      return {
        ...state,
        filterKey: isSameFilter ? undefined : key,
        filterValue: isSameFilter ? "" : value,
      };
    }
    default:
      return state;
  }
};

type MemberListProviderProps = {
  children: React.ReactNode;
  data: MemberResponse[];
};

export const MemberListProvider = ({
  children,
  data,
}: MemberListProviderProps) => {
  const [state, dispatch] = useReducer(memberListTableReducer, {
    sortCriteria: [],
    filterKey: undefined,
    filterValue: "",
  } as State);

  const processedData = data
    .filter((item) => {
      // 필터가 적용되지 않은 경우 전체 데이터 반환
      if (!state.filterKey) return true;

      // 필터 조건에 맞는 항목만 반환
      return item[state.filterKey] === state.filterValue;
    })
    .toSorted((a, b) => {
      for (const { key, order } of state.sortCriteria) {
        let compareResult = 0;

        if (key === "achievement" && key === "achievement") {
          compareResult = +a[key].replace("%", "") - +b[key].replace("%", "");
        } else if (key === "joinDate" && key === "joinDate") {
          compareResult =
            new Date(a[key]).getTime() - new Date(b[key]).getTime();
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
