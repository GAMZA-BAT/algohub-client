import { getGroupInfo, getGroupMemberList } from "@/app/api/groups";
import { getAllRanking, getTopRanking } from "@/app/api/groups/ranking";
import { getDeadlineReachedProblems } from "@/app/api/problems";
import { listSectionStyle, titleStyle } from "@/app/group/[groupId]/page.css";
import Sidebar from "@/common/component/Sidebar";
import ProblemList from "@/shared/component/ProblemList";
import { prefetchQuery } from "@/shared/util/prefetch";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import NoticeBanner from "@/view/group/dashboard/NoticeBanner";
import Ranking from "@/view/group/dashboard/Ranking";
import ExtensionAlertModalController from "@/view/user/index/ExtensionAlertModal";
import { HydrationBoundary } from "@tanstack/react-query";

const GroupDashboardPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const groupInfoData = getGroupInfo(+groupId);
  const rankingData = getTopRanking(+groupId);
  const memberData = getGroupMemberList(+groupId);
  const deadlineReachedData = getDeadlineReachedProblems(+groupId);

  const [groupInfo, rankingInfo, memberInfo, deadlineReachedInfo] =
    await Promise.all([
      groupInfoData,
      rankingData,
      memberData,
      deadlineReachedData,
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
        <h2 className={titleStyle}>풀어야 할 문제</h2>
        <section>
          <ProblemList.Header />
          <ProblemList>
            {deadlineReachedInfo.map((item) => (
              <ProblemList.Item key={item.problemId} {...item} />
            ))}
          </ProblemList>
        </section>
      </div>
      <ExtensionAlertModalController domain="group" />
    </main>
  );
};

export default GroupDashboardPage;
