import { useContext } from "react";
import { TableDataContext, TableDispatchContext } from "./GroupListProvider";

export const useGroupListData = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useStudyListData must be used within a TableProvider");
  }
  return context.processedData;
};

export const useGroupListState = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useStudyListState must be used within a TableProvider");
  }
  return context.state;
};

export const useGroupListDispatch = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("useStudyListDispatch must be used within a TableProvider");
  }
  return context.dispatch;
};

export const useGroupListMutation = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("useStudyListMutation must be used within a TableProvider");
  }
  return context.mutation;
};

export const useBookmarkGroupMutation = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("useStudyListMutation must be used within a TableProvider");
  }
  return context.bookmarkMutation;
};

export const useWithdrawMutation = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("useWithdrawMutation must be used within a TableProvider");
  }
  return context.withdrawMutate;
};
