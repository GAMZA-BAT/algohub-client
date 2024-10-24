import { useContext } from "react";
import { TableDataContext, TableDispatchContext } from "./StudyListProvider";

export const useStudyListData = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useStudyListData must be used within a TableProvider");
  }
  return context.processedData;
};

export const useStudyListState = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useStudyListState must be used within a TableProvider");
  }
  return context.state;
};

export const useStudyListDispatch = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error("useStudyListDispatch must be used within a TableProvider");
  }
  return context;
};
