"use client";

import { StudyListData } from "@/shared/constant/example";
import { headingStyle } from "../index.css";
import { StudyListTableProvider } from "./StudyListTable/StudyListProvider";
import StudyListTable from "./StudyListTable/StudyListTable";
import { backPanelStyle, wrapperStyle } from "./index.css";

const StudyList = () => {
  return (
    <article className={wrapperStyle}>
      <h1 className={headingStyle}>스터디 관리</h1>
      <div className={backPanelStyle} />
      <StudyListTableProvider data={StudyListData}>
        <StudyListTable />
      </StudyListTableProvider>
    </article>
  );
};

export default StudyList;
