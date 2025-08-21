import ExtensionAlertModalController from "@/app/[user]/components/ExtensionAlertModal";
import { getGroupInfo, getGroupMemberList } from "@/app/api/groups";
import { getAllRanking, getTopRanking } from "@/app/api/groups/ranking";
import { getSolutionsCurrentStatus } from "@/app/api/solutions";
import GroupSidebar from "@/app/group/[groupId]/components/GroupSidebar";
import NoticeBanner from "@/app/group/[groupId]/components/NoticeBanner";
import Ranking from "@/app/group/[groupId]/components/Ranking";
import SolvedStatusSection from "@/app/group/[groupId]/components/SolvedStatusSection";
import { listSectionStyle } from "@/app/group/[groupId]/page.css";
import Sidebar from "@/common/component/Sidebar";
import { prefetchQuery } from "@/shared/util/prefetch";
import { sidebarWrapper } from "@/styles/shared.css";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

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
  const queryClient = await prefetchQuery({
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
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Ranking rankingData={rankingInfo} />
        </HydrationBoundary>
        <SolvedStatusSection
          solutionsCurrentStatusInfo={[
            ...solutionsCurrentStatusInfo,
            ...solutionsCurrentStatusInfo,
          ]}
        />
      </div>
      <ExtensionAlertModalController domain="group" />
    </main>
  );
};

export default GroupDashboardPage;
