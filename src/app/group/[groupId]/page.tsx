import {
  getGroupInfo,
  getGroupMemberList,
  getRoleByGroupId,
} from "@/api/groups";
import { getTopRanking } from "@/api/groups/ranking";
import { getDeadlineReachedProblems } from "@/api/problems";
import { listSectionStyle, titleStyle } from "@/app/group/[groupId]/page.css";
import Sidebar from "@/common/component/Sidebar";
import ProblemList from "@/shared/component/ProblemList";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import NoticeBanner from "@/view/group/dashboard/NoticeBanner";
import Ranking from "@/view/group/dashboard/Ranking";

const GroupDashboardPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const groupInfoData = getGroupInfo(+groupId);
  const rankingData = getTopRanking(+groupId);
  const memberData = getGroupMemberList(+groupId);
  const deadlineReachedData = getDeadlineReachedProblems(+groupId);
  const roleData = getRoleByGroupId(+groupId);

  const [groupInfo, rankingInfo, memberInfo, deadlineReachedInfo, role] =
    await Promise.all([
      groupInfoData,
      rankingData,
      memberData,
      deadlineReachedData,
      roleData,
    ]);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={groupInfo} memberList={memberInfo} role={role} />
      </Sidebar>
      <div className={listSectionStyle}>
        <NoticeBanner />
        <Ranking rankingData={rankingInfo} />
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
    </main>
  );
};

export default GroupDashboardPage;
