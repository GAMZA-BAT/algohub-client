import { getGroupList } from "@/api/groups";
import type { GroupStatus } from "@/api/groups/type";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ListSection from "@/view/user/index/ListSection/ListSection";
import UserCard from "@/view/user/index/UserCard";
import { userCardWrapper } from "@/view/user/index/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/view/user/index/constant";
import { userDashboardWrapper } from "@/view/user/index/index.css";

const UserDashboardPage = async ({
  params: { user: _user },
}: { params: { user: string } }) => {
  const data = await getGroupList();

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <div className={userCardWrapper}>
          <UserCard />
        </div>
      </Sidebar>
      <div className={userDashboardWrapper}>
        {GROUP_STATUS_MAPPING.map((list) => (
          <ListSection
            key={list.status}
            status={list.status as GroupStatus}
            groups={data[list.status as GroupStatus]}
          />
        ))}
      </div>
    </main>
  );
};

export default UserDashboardPage;
