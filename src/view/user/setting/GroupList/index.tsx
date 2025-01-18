"use client";

import { GroupListTableProvider } from "@/view/user/setting/GroupList/GroupListTable/GroupListProvider";
import {
  backPanelStyle,
  headingStyle,
  wrapperStyle,
} from "@/view/user/setting/index.css";
import UserSettingLoading from "@/view/user/setting/loading";
import { Suspense } from "react";
import GroupListTable from "./GroupListTable";

const GroupList = () => {
  return (
    <article className={wrapperStyle({ type: "스터디리스트" })}>
      <h1 className={headingStyle}>스터디 관리</h1>
      <div className={backPanelStyle} />
      <Suspense fallback={<UserSettingLoading />}>
        <GroupListTableProvider>
          <GroupListTable />
        </GroupListTableProvider>
      </Suspense>
    </article>
  );
};

export default GroupList;
