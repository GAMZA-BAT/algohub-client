import LoginAlertModalController from "@/app/[user]/components/GroupCard/LoginAlertModalController";
import ListSection from "@/app/[user]/components/ListSection";
import UserCard from "@/app/[user]/components/UserCard";
import { userCardWrapper } from "@/app/[user]/components/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/app/[user]/components/constant";
import {
  leftSidebarStyle,
  userDashboardWrapper,
  userHomeWrapper,
} from "@/app/[user]/components/index.css";

import type { GroupListResponse, GroupStatus } from "@/app/api/groups/type";
import { getGroupsByUsers } from "@/app/api/users";
import ExtensionAlertModalController from "@/app/components/ExtensionAlertModal";
import { auth } from "@/auth";
import Sidebar from "@/common/component/Sidebar";
import { prefetchQuery } from "@/shared/util/prefetch";
import { sidebarWrapper } from "@/styles/shared.css";

import { HydrationBoundary } from "@tanstack/react-query";

import { HTTPError } from "ky";
import { notFound } from "next/navigation";
import { useRecommendStudyQueryObject } from "../api/users/query";
import UserPageLeftSidebar from "./components/LeftSidebar";
import RecommendStudySection from "./components/RecommendSection";

export const revalidate = 60;

const UserDashboardPage = async ({ params }: { params: { user: string } }) => {
  const userInfo = await auth();
  const { user } = params;
  const nickname = userInfo?.user?.nickname;

  const isMe = nickname === user;
  if (!isMe) {
    let memberData: GroupListResponse;
    try {
      memberData = await getGroupsByUsers(user);
    } catch (error) {
      if (error instanceof HTTPError) {
        return notFound();
      }
      throw error;
    }
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
              groups={memberData[list.status as GroupStatus]}
            />
          ))}
        </div>
        <LoginAlertModalController />
        <ExtensionAlertModalController domain="user" />
      </main>
    );
  }

  // biome-ignore lint/correctness/useHookAtTopLevel: <explanation>
  const recommendGroups = await prefetchQuery(useRecommendStudyQueryObject());

  return (
    <main className={sidebarWrapper}>
      <Sidebar className={leftSidebarStyle}>
        <UserPageLeftSidebar />
      </Sidebar>
      <div className={userHomeWrapper}>
        <HydrationBoundary state={recommendGroups}>
          <RecommendStudySection />
        </HydrationBoundary>
      </div>
      <Sidebar>
        <div>임시로 만드는 우측 패널</div>
      </Sidebar>
    </main>
  );
};

export default UserDashboardPage;
