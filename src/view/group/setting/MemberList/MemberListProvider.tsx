"use client";
import type { MemberResponse, MemberRoleRequest } from "@/app/api/groups/type";
import {
  useDeleteMemberMutation,
  usePatchMemberRoleMutation,
} from "@/app/group/[groupId]/setting/query";
import { useBooleanState } from "@/common/hook/useBooleanState";
import PromptModal from "@/shared/component/PromptModal";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import type { UseMutateFunction } from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { createContext, useReducer, useState } from "react";

type TableDataContextType =
  | {
      processedData: MemberResponse[];
      state: State;
    }
  | undefined;
type TableDispatchContextType =
  | {
      dispatch: React.Dispatch<Actions>;
      patchMemberRoleMutation: UseMutateFunction<
        void,
        HTTPError<unknown>,
        MemberRoleRequest,
        unknown
      >;
      handleDeleteClick: (memberId: number) => void;
      handleChangeClick: (id: number, nickname: string) => void;
    }
  | undefined;

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
  const groupId = useGetGroupId();
  const { mutate: patchMemberRoleMutate } = usePatchMemberRoleMutation(
    +groupId,
  );
  const [changeMember, setChangeMember] = useState({ id: 0, nickname: "" });
  const {
    isOpen: isChangeMemberOpen,
    open: openChangeMember,
    close: closeChangeMember,
  } = useBooleanState();
  const handleChangeClick = (id: number, nickname: string) => {
    setChangeMember({ id, nickname });
    openChangeMember();
  };
  const handleChangeConfirm = () => {
    patchMemberRoleMutate({ memberId: changeMember.id, role: "OWNER" });
  };

  const { mutate: deleteMemberMutate } = useDeleteMemberMutation(+groupId);
  const {
    isOpen: isDeleteMemberOpen,
    open: openDeleteMember,
    close: closeDeleteMember,
  } = useBooleanState();
  const [deleteMemberId, setDeleteMemberId] = useState(0);
  const handleDeleteClick = (memberId: number) => {
    setDeleteMemberId(memberId);
    openDeleteMember();
  };

  const handleDeleteConfirm = () => {
    deleteMemberMutate(
      { memberId: deleteMemberId },
      {
        onSuccess: () => {
          closeDeleteMember();
        },
      },
    );
  };

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
    <TableDispatchContext.Provider
      value={{
        dispatch,
        patchMemberRoleMutation: patchMemberRoleMutate,
        handleDeleteClick,
        handleChangeClick,
      }}
    >
      <TableDataContext.Provider value={{ state, processedData }}>
        {children}
        <PromptModal
          isOpen={isDeleteMemberOpen}
          onClose={closeDeleteMember}
          title="멤버를 삭제하시겠습니까?"
          prompt={
            "멤버를 삭제해도 해당 멤버의 활동 기록은 지워지지 않습니다.\n멤버를 삭제해도 초대 링크를 통해 다시 초대할 수 있습니다.\n다시 초대할 경우 기존의 활동 데이터와 연동되지 않습니다.\n"
          }
          confirmText="삭제하기"
          onConfirm={handleDeleteConfirm}
        />
        <PromptModal
          isOpen={isChangeMemberOpen}
          onClose={closeChangeMember}
          title={`${changeMember.nickname}님에게 스터디장을 위임하시겠습니까?`}
          prompt={`하나의 스터디에 스터디장은 한 명만 존재합니다.\n${changeMember.nickname}님을 스터디장으로 위임할 경우, 기존 스터디장은 스터디원이 됩니다.\n그래도 위임하시겠습니까?`}
          confirmText="위임하기"
          onConfirm={handleChangeConfirm}
        />
      </TableDataContext.Provider>
    </TableDispatchContext.Provider>
  );
};
