"use client";

import { GroupListTableProvider } from "@/app/[user]/setting/components/GroupList/GroupListTable/GroupListProvider";
import {
  backPanelStyle,
  headingStyle,
  wrapperStyle,
} from "@/app/[user]/setting/components/index.css";
import UserSettingLoading from "@/app/[user]/setting/components/loading";
import { usePvEvent } from "@/shared/hook/usePvEvent";
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
