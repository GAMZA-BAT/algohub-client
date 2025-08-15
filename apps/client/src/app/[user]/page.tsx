import type { GroupListResponse, GroupStatus } from "@/app/api/groups/type";
import { getGroupsByUsers } from "@/app/api/users";
import { auth } from "@/auth";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ExtensionAlertModalController from "@/view/user/index/ExtensionAlertModal";
import LoginAlertModalController from "@/view/user/index/GroupCard/LoginAlertModalController";
import ListSection from "@/view/user/index/ListSection";
import RecommendStudySection from "@/view/user/index/RecommendSection";
import UserCard from "@/view/user/index/UserCard";
import { userCardWrapper } from "@/view/user/index/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/view/user/index/constant";
import {
  userDashboardWrapper,
  userHomeWrapper,
} from "@/view/user/index/index.css";
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
        <RecommendStudySection />
      </div>
      <Sidebar>
        <div>임시로 만드는 우측 패널</div>
      </Sidebar>
    </main>
  );
};

export default UserDashboardPage;
