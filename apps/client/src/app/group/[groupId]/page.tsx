import { getGroupInfo, getGroupMemberList } from "@/app/api/groups";
import { getAllRanking, getTopRanking } from "@/app/api/groups/ranking";
import { getSolutionsCurrentStatus } from "@/app/api/solutions";
import { listSectionStyle } from "@/app/group/[groupId]/page.css";
import Sidebar from "@/common/component/Sidebar";
import { prefetchQuery } from "@/shared/util/prefetch";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import NoticeBanner from "@/view/group/dashboard/NoticeBanner";
import Ranking from "@/view/group/dashboard/Ranking";
import SolvedStatusSection from "@/view/group/dashboard/SolvedStatusSection";
import ExtensionAlertModalController from "@/view/user/index/ExtensionAlertModal";
import { HydrationBoundary } from "@tanstack/react-query";

const GroupDashboardPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
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

  const firstPage = 1;
  const dehydratedState = await prefetchQuery({
    queryKey: ["ranking", +groupId, firstPage],
    queryFn: () => getAllRanking(+groupId, 0),
  });

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={groupInfo} memberList={memberInfo} />
      </Sidebar>
      <div className={listSectionStyle}>
        <NoticeBanner />
        <HydrationBoundary state={dehydratedState}>
          <Ranking rankingData={rankingInfo} />
        </HydrationBoundary>
        <SolvedStatusSection
          solutionsCurrentStatusInfo={solutionsCurrentStatusInfo}
        />
      </div>
      <ExtensionAlertModalController domain="group" />
    </main>
  );
};

export default GroupDashboardPage;
