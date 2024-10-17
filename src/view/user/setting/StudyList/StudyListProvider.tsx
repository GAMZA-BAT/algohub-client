import type { StudyListType } from "@/shared/type/table";
import type React from "react";
import { createContext, useReducer } from "react";

type TableDataContextType =
  | { processedData: StudyListType[]; state: State }
  | undefined;
type TableDispatchContextType = React.Dispatch<Actions> | undefined;

export const TableDataContext = createContext<TableDataContextType>(undefined);
export const TableDispatchContext =
  createContext<TableDispatchContextType>(undefined);

type SetSortAction = {
  type: "SET_SORT";
  key: keyof StudyListType;
};

type SetFilterAction = {
  type: "SET_FILTER";
  key: keyof StudyListType;
  value: string;
};

type Actions = SetSortAction | SetFilterAction;

type SortCriteria = {
  key: keyof StudyListType;
  order: "asc" | "desc";
};

type State = {
  sortCriteria: SortCriteria[];
  filterKey?: keyof StudyListType;
  filterValue: string;
};

const studyListTableReducer = (state: State, action: Actions): State => {
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
          // asc -> desc
          newSortCriteria[existingCriteriaIndex] = {
            key,
            order: "desc",
          };
        } else if (currentOrder === "desc") {
          // desc -> 정렬 제거
          newSortCriteria.splice(existingCriteriaIndex, 1);
        }
      } else {
        // 새로운 key인 경우, asc로 추가
        newSortCriteria = [{ key, order: "asc" }, ...newSortCriteria];
      }

      return {
        ...state,
        sortCriteria: newSortCriteria.sort((a, b) => {
          // boolean 타입인 isBookmarked를 맨 뒤로
          if (a.key === "isBookmarked") return -1;
          if (b.key === "isBookmarked") return 1;
          return 0;
        }),
      };
    }

    case "SET_FILTER": {
      const { key, value } = action;

      const isSameFilter = state.filterKey === key;

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

// Provider 컴포넌트
type StudyListTableProviderProps = {
  children: React.ReactNode;
  data: StudyListType[];
};

export const StudyListTableProvider = ({
  children,
  data,
}: StudyListTableProviderProps) => {
  const [state, dispatch] = useReducer(studyListTableReducer, {
    sortCriteria: [],
    filterKey: undefined,
    filterValue: "",
  } as State);

  // 데이터 전처리 (정렬, 필터링)
  const processedData = data.toSorted((a, b) => {
    // 순차적으로 sortCriteria를 확인하며 정렬
    for (const { key, order } of state.sortCriteria) {
      let compareResult = 0;

      // 키 값이 boolean인 경우
      if (typeof a[key] === "boolean" && typeof b[key] === "boolean") {
        compareResult = a[key] === b[key] ? 0 : a[key] ? -1 : 1;
      }

      // 키 값이 날짜(Date 객체)인 경우
      else if (a[key] instanceof Date && b[key] instanceof Date) {
        compareResult = a[key].getTime() - b[key].getTime();
      }

      // 오름차순/내림차순 적용
      if (compareResult !== 0) {
        return order === "asc" ? compareResult : -compareResult;
      }
    }

    // 모든 조건이 동일한 경우
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
