import { getGroupInfo, getGroupMemberList } from "@/app/api/groups";
import { getTopRanking } from "@/app/api/groups/ranking";
import { listSectionStyle } from "@/app/group/[groupId]/page.css";
import { getSolutionsCurrentStatus } from "@/app/api/solutions";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import type { ReactNode } from "react";
import GroupSidebar from "../components/GroupSidebar";
import NoticeBanner from "../components/NoticeBanner";
import Ranking from "../components/Ranking";
import SolvedStatusSection from "@/app/group/[groupId]/components/SolvedStatusSection";

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
