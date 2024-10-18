"use client";

import { StudyListData } from "@/shared/constant/example";
import { backPanelStyle, headingStyle, wrapperStyle } from "../index.css";
import { StudyListTableProvider } from "./StudyListTable/StudyListProvider";
import StudyListTable from "./StudyListTable/StudyListTable";

const StudyList = () => {
  return (
    <article className={wrapperStyle({ type: "스터디리스트" })}>
      <h1 className={headingStyle}>스터디 관리</h1>
      <div className={backPanelStyle} />
      <StudyListTableProvider data={StudyListData}>
        <StudyListTable />
      </StudyListTableProvider>
    </article>
  );
};

export default StudyList;
