import { getGroupInfo, getGroupMemberList } from "@/app/api/groups";
import { getAllRanking, getTopRanking } from "@/app/api/groups/ranking";
import { getSolutionsCurrentStatus } from "@/app/api/solutions";
import ExtensionAlertModalController from "@/app/components/ExtensionAlertModal";
import { JoinRequestAlertModalController } from "@/app/components/JoinRequestAlertModal";
import GroupSidebar from "@/app/group/[groupId]/components/GroupSidebar";
import NoticeBanner from "@/app/group/[groupId]/components/NoticeBanner";
import Ranking from "@/app/group/[groupId]/components/Ranking";
import SolvedStatusSection from "@/app/group/[groupId]/components/SolvedStatusSection";
import { listSectionStyle } from "@/app/group/[groupId]/page.css";
import Sidebar from "@/common/component/Sidebar";
import { prefetchQuery } from "@/shared/util/prefetch";
import { sidebarWrapper } from "@/styles/shared.css";
import { HydrationBoundary } from "@tanstack/react-query";

const GroupDashboardPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const numberGroupId = +groupId;
  const groupInfoData = getGroupInfo(numberGroupId);
  const rankingData = getTopRanking(numberGroupId);
  const memberData = getGroupMemberList(numberGroupId);
  const solutionsCurrentStatusData = getSolutionsCurrentStatus(numberGroupId);
  const firstPage = 1;
  const allRankingData = prefetchQuery({
    queryKey: ["ranking", numberGroupId, firstPage],
    queryFn: () => getAllRanking(numberGroupId, 0),
  });

  const [
    groupInfo,
    rankingInfo,
    memberInfo,
    solutionsCurrentStatusInfo,
    allRankingInfo,
  ] = await Promise.all([
    groupInfoData,
    rankingData,
    memberData,
    solutionsCurrentStatusData,
    allRankingData,
  ]);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={groupInfo} memberList={memberInfo} />
      </Sidebar>
      <div className={listSectionStyle}>
        <NoticeBanner />
        <HydrationBoundary state={allRankingInfo}>
          <Ranking rankingData={rankingInfo} />
        </HydrationBoundary>
        <SolvedStatusSection
          solutionsCurrentStatusInfo={solutionsCurrentStatusInfo}
        />
      </div>
      <ExtensionAlertModalController domain="group" />
      <JoinRequestAlertModalController
        groupName={groupInfo.name}
        groupId={numberGroupId}
      />
    </main>
  );
};

export default GroupDashboardPage;
