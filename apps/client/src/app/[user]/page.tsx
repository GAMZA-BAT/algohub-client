import ExtensionAlertModalController from "@/app/[user]/components/ExtensionAlertModal";
import LoginAlertModalController from "@/app/[user]/components/GroupCard/LoginAlertModalController";
import ListSection from "@/app/[user]/components/ListSection";
import UserCard from "@/app/[user]/components/UserCard";
import { userCardWrapper } from "@/app/[user]/components/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/app/[user]/components/constant";
import {
  userDashboardWrapper,
  userHomeWrapper,
} from "@/app/[user]/components/index.css";
import type { GroupListResponse, GroupStatus } from "@/app/api/groups/type";
import { getGroupsByUsers } from "@/app/api/users";
import { auth } from "@/auth";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import { HTTPError } from "ky";
import { notFound } from "next/navigation";

export const revalidate = 60;

const UserDashboardPage = async ({ params }: { params: { user: string } }) => {
  const userInfo = await auth();
  const { user } = params;
  const nickname = userInfo?.user?.nickname;

  const isMe = nickname === user;

  let memberData: GroupListResponse;
  try {
    memberData = await getGroupsByUsers(user);
  } catch (error) {
    if (error instanceof HTTPError) {
      return notFound();
    }
    throw error;
  }

  if (!isMe) {
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

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <div>임시로 만드는 좌측 사이드바</div>
      </Sidebar>
      <div className={userHomeWrapper}>
        <div>임시로 만드는 중앙 피드공간</div>
      </div>
      <Sidebar>
        <div>임시로 만드는 우측 패널</div>
      </Sidebar>
    </main>
  );
};

export default UserDashboardPage;
