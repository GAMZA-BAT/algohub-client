import { getGroupInfo, getGroupMemberList } from "@/app/api/groups";
import { getTopRanking } from "@/app/api/groups/ranking";
import { getSolutionsCurrentStatus } from "@/app/api/solutions";
import { listSectionStyle } from "@/app/group/[groupId]/page.css";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import NoticeBanner from "@/view/group/dashboard/NoticeBanner";
import Ranking from "@/view/group/dashboard/Ranking";
import SolvedStatusSection from "@/view/group/dashboard/SolvedStatusSection";
import type { ReactNode } from "react";

const GroupDashboardLayout = async ({
  params: { groupId },
  children,
}: { params: { groupId: string }; children: ReactNode }) => {
  const groupInfoData = getGroupInfo(+groupId);
  const rankingData = getTopRanking(+groupId);
  const memberData = getGroupMemberList(+groupId);
  const solutionsCurrentStatusData = getSolutionsCurrentStatus(+groupId);

  const [groupInfo, rankingInfo, memberInfo, solutionsCurrentStatusInfo] =
    await Promise.all([
      groupInfoData,
      rankingData,
      memberData,
      solutionsCurrentStatusData,
    ]);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={groupInfo} memberList={memberInfo} />
      </Sidebar>
      <div className={listSectionStyle}>
        <NoticeBanner />
        <Ranking rankingData={rankingInfo} />
        <SolvedStatusSection
          solutionsCurrentStatusInfo={solutionsCurrentStatusInfo}
        />
      </div>
      {children}
    </main>
  );
};

export default GroupDashboardLayout;
