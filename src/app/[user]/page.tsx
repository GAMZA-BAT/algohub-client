"use client";

import { useMyGroupsQuery, useUserGroupsQuery } from "@/app/[user]/query";
import type { GroupStatus } from "@/app/api/groups/type";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ListSection from "@/view/user/index/ListSection/ListSection";
import UserCard from "@/view/user/index/UserCard";
import { userCardWrapper } from "@/view/user/index/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/view/user/index/constant";
import { userDashboardWrapper } from "@/view/user/index/index.css";
import { useSession } from "next-auth/react";

const UserDashboardPage = async ({
  params: { user },
}: { params: { user: string } }) => {
  const nickname = useSession().data?.user?.nickname;

  const { data: groupList } = useUserGroupsQuery(user);
  const { data: myGroupList } = useMyGroupsQuery();

  const listData = nickname === user ? myGroupList : groupList;

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <div className={userCardWrapper}>
          <UserCard userNickname={user} />
        </div>
      </Sidebar>
      <div className={userDashboardWrapper}>
        {GROUP_STATUS_MAPPING.map((list) => (
          <ListSection
            key={list.status}
            status={list.status as GroupStatus}
            groups={listData[list.status as GroupStatus]}
          />
        ))}
      </div>
    </main>
  );
};

export default UserDashboardPage;
