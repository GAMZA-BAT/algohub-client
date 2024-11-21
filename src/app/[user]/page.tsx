import { getGroupList } from "@/api/groups";
import type { GroupStatus } from "@/api/groups/type";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ListSection from "@/view/user/index/ListSection/ListSection";
import UserCard from "@/view/user/index/UserCard";
import { userCardWrapper } from "@/view/user/index/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/view/user/index/constant";
import { userDashboardWrapper } from "@/view/user/index/index.css";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const UserDashboardPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["group", "list", "user"], // TODO: user는 현재 user명으로 수정
    queryFn: getGroupList,
  });

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <div className={userCardWrapper}>
          <UserCard />
        </div>
      </Sidebar>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className={userDashboardWrapper}>
          {GROUP_STATUS_MAPPING.map((list) => (
            <ListSection
              key={list.status}
              status={list.status as GroupStatus}
            />
          ))}
        </div>
      </HydrationBoundary>
    </main>
  );
};

export default UserDashboardPage;
