"use client";
import {
  useBookmarkGroupMutation,
  useVisibilityMutation,
} from "@/app/api/groups/mutation";
import { useMyGroupSettingsQueryObject } from "@/app/api/groups/query";
import type { GroupSettingsContent } from "@/app/api/groups/type";
import Modal from "@/common/component/Modal";
import WithdrawDialog from "@/shared/component/WithdrawDialog";
import { useWithdrawMutation } from "@/shared/component/WithdrawDialog/query";
import {
  type UseMutateFunction,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { HTTPError, KyResponse } from "ky";
import type React from "react";
import { createContext, useReducer, useState } from "react";

type TableDataContextType =
  | { processedData: GroupSettingsContent[]; state: State }
  | undefined;
type TableDispatchContextType =
  | {
      dispatch: React.Dispatch<Actions>;
      mutation: UseMutateFunction<
        KyResponse,
        HTTPError,
        {
          groupId: number;
          flag: boolean;
        },
        unknown
      >;
      bookmarkMutation: UseMutateFunction<
        KyResponse,
        HTTPError,
        number,
        unknown
      >;
      withdrawMutate: UseMutateFunction<unknown, Error, number, unknown>;
      withdrawDialogOpen: (id: number) => void;
      withdrawDialogClose: () => void;
      isWithdrawBtnClicked: boolean;
    }
  | undefined;

export const TableDataContext = createContext<TableDataContextType>(undefined);
export const TableDispatchContext =
  createContext<TableDispatchContextType>(undefined);

type SetSortAction = {
  type: "SET_SORT";
  key: keyof GroupSettingsContent;
};

type SetFilterAction = {
  type: "SET_FILTER";
  key: keyof GroupSettingsContent;
  value: string;
};

type Actions = SetSortAction | SetFilterAction;

type SortCriteria = {
  key: keyof GroupSettingsContent;
  order: "asc" | "desc";
};

type State = {
  sortCriteria: SortCriteria[];
  filterKey?: keyof GroupSettingsContent;
  filterValue: string;
};

const groupListTableReducer = (state: State, action: Actions): State => {
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

      return {
        ...state,
        sortCriteria: newSortCriteria.sort((a, b) => {
          if (a.key === "isBookmarked") return -1;
          if (b.key === "isBookmarked") return 1;
          return 0;
        }),
      };
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

type GroupListTableProviderProps = {
  children: React.ReactNode;
};

export const GroupListTableProvider = ({
  children,
}: GroupListTableProviderProps) => {
  const [state, dispatch] = useReducer(groupListTableReducer, {
    sortCriteria: [],
    filterKey: undefined,
    filterValue: "",
  } as State);
  const { data } = useSuspenseQuery(useMyGroupSettingsQueryObject());
  const { mutate: visibilityMutate } = useVisibilityMutation();
  const { mutate: bookmarkMutate } = useBookmarkGroupMutation();
  const { mutate: withdrawMutate } = useWithdrawMutation();

  const [isWithdrawBtnClicked, setIsWithdrawBtnClicked] = useState(false);
  const [withdrawGroupId, setWithdrawGroupId] = useState<number | null>(null);

  const withdrawDialogOpen = (id: number) => {
    setIsWithdrawBtnClicked(true);
    setWithdrawGroupId(id);
  };
  const withdrawDialogClose = () => {
    setIsWithdrawBtnClicked(false);
    setWithdrawGroupId(null);
  };

  const processedData = data
    .filter((item) => {
      if (!state.filterKey) return true;
      return item[state.filterKey] === state.filterValue;
    })
    .toSorted((a, b) => {
      for (const { key, order } of state.sortCriteria) {
        let compareResult = 0;

        if (typeof a[key] === "boolean" && typeof b[key] === "boolean") {
          compareResult = a[key] === b[key] ? 0 : a[key] ? -1 : 1;
        } else if (key === "startDate") {
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
    <TableDispatchContext.Provider
      value={{
        dispatch,
        mutation: visibilityMutate,
        bookmarkMutation: bookmarkMutate,
        withdrawMutate,
        withdrawDialogOpen,
        withdrawDialogClose,
        isWithdrawBtnClicked,
      }}
    >
      <TableDataContext.Provider value={{ state, processedData }}>
        {children}
        <Modal isOpen={isWithdrawBtnClicked} onClose={withdrawDialogClose}>
          <WithdrawDialog
            groupId={withdrawGroupId!}
            onSuccess={withdrawDialogClose}
          />
        </Modal>
      </TableDataContext.Provider>
    </TableDispatchContext.Provider>
  );
};
