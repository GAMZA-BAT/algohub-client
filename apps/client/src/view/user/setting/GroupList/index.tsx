"use client";

import { usePvEvent } from "@/shared/hook/usePvEvent";
import { GroupListTableProvider } from "@/view/user/setting/GroupList/GroupListTable/GroupListProvider";
import {
  backPanelStyle,
  headingStyle,
  wrapperStyle,
} from "@/view/user/setting/index.css";
import UserSettingLoading from "@/view/user/setting/loading";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import GroupListTable from "./GroupListTable";

const GroupList = () => {
  const params = useParams();
  const userId = Array.isArray(params.user) ? params.user[0] : params.user;

  usePvEvent("user_setting_group_list_page_view", {
    user_id: userId ?? "",
  });

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
