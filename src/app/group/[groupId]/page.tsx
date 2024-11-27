import { getGroupInfo, getGroupMemberList } from "@/api/groups";
import { getAllRanking } from "@/api/groups/ranking";
import type { ProblemContent } from "@/api/problems/type";
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
  const rankingData = getAllRanking(+groupId);
  const memberData = getGroupMemberList(+groupId);

  const [groupInfo, rankingInfo, memberInfo] = await Promise.all([
    groupInfoData,
    rankingData,
    memberData,
  ]);

  const data: ProblemContent[] = [
    {
      problemId: 1,
      link: "",
      title: "트리에서의 동적 계획법",
      startDate: "2024-10-10",
      endDate: "2024-11-01",
      level: 2,
      solved: false,
      submitMemberCount: 50,
      memberCount: 200,
      accuracy: 25,
    },
    {
      problemId: 2,
      link: "",
      title: "트리에서의 동적 계획법",
      startDate: "2024-10-10",
      endDate: "2024-10-14",
      level: 2,
      solved: false,
      submitMemberCount: 50,
      memberCount: 200,
      accuracy: 25,
    },
    {
      problemId: 3,
      link: "",
      title: "트리에서의 동적 계획법",
      startDate: "2024-10-10",
      endDate: "2024-11-01",
      level: 2,
      solved: true,
      submitMemberCount: 50,
      memberCount: 200,
      accuracy: 25,
    },
  ];

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={groupInfo} memberList={memberInfo} />
      </Sidebar>
      <div className={listSectionStyle}>
        <NoticeBanner />
        <Ranking rankingData={rankingInfo.content} />
        <h2 className={titleStyle}>풀어야 할 문제</h2>
        <section>
          <ProblemList.Header />
          <ProblemList>
            {data.map((item) => (
              <ProblemList.Item key={item.problemId} {...item} />
            ))}
          </ProblemList>
        </section>
      </div>
    </main>
  );
};

export default GroupDashboardPage;
