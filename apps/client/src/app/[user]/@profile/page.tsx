import ExtensionAlertModalController from "@/app/[user]/components/ExtensionAlertModal";
import LoginAlertModalController from "@/app/[user]/components/GroupCard/LoginAlertModalController";
import ListSection from "@/app/[user]/components/ListSection";
import UserCard from "@/app/[user]/components/UserCard";
import { userCardWrapper } from "@/app/[user]/components/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/app/[user]/components/constant";
import { userDashboardWrapper } from "@/app/[user]/components/index.css";
import type { GroupListResponse, GroupStatus } from "@/app/api/groups/type";
import { getGroupsByUsers } from "@/app/api/users";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import { HTTPError } from "ky";
import { notFound } from "next/navigation";

const OtherUserPage = async ({ params }: { params: { user: string } }) => {
  const { user } = params;
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
};

export default OtherUserPage;
