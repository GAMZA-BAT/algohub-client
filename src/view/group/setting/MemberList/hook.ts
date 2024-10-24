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
  return context;
};
