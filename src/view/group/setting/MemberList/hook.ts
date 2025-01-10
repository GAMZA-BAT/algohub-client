import {
  TableDataContext,
  TableDispatchContext,
} from "@/view/group/setting/MemberList/MemberListProvider";
import { useContext } from "react";

export const useMemberListData = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("TableProvider가 필요합니다");
  }
  return context.processedData;
};

export const useMemberListState = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("TableProvider가 필요합니다");
  }
  return context.state;
};

export const useMemberListDispatch = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("TableProvider가 필요합니다");
  }
  return context.dispatch;
};

export const usePatchMemberRoleMutation = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error(
      "useDeleteMemberMutation must be used within a TableProvider",
    );
  }
  return context.patchMemberRoleMutation;
};

export const useChangeOwner = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("useChangeOwner must be used within a TableProvider");
  }
  return context.handleChangeClick;
};

export const useDeleteClick = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("useOpenDeleteModal must be used within a TableProvider");
  }
  return context.handleDeleteClick;
};
