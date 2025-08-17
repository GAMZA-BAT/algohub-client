import ExtensionAlertModalController from "@/app/[user]/components/ExtensionAlertModal";
import {
  getDeadlineReachedProblems,
  getGroupInfo,
  getGroupMemberList,
} from "@/app/api/groups";
import { getAllRanking, getTopRanking } from "@/app/api/groups/ranking";
import GroupSidebar from "@/app/group/[groupId]/components/GroupSidebar";
import NoticeBanner from "@/app/group/[groupId]/components/NoticeBanner";
import Ranking from "@/app/group/[groupId]/components/Ranking";
import { listSectionStyle, titleStyle } from "@/app/group/[groupId]/page.css";
import Sidebar from "@/common/component/Sidebar";
import ProblemList from "@/shared/component/ProblemList";
import { prefetchQuery } from "@/shared/util/prefetch";
import { sidebarWrapper } from "@/styles/shared.css";
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
