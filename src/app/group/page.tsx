import { listSectionStyle, titleStyle } from "@/app/group/page.css";
import Sidebar from "@/common/component/Sidebar";
import ProblemList from "@/shared/component/ProblemList";
import type { Problem } from "@/shared/type";
import { tmpGroupData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import ProblemListHeader from "@/view/group/dashboard/ProblemListHeader";

const GroupDashboardPage = () => {
  const data: Problem[] = [
    {
      problemId: 1,
      title: "트리에서의 동적 계획법",
      startDate: "2024-10-10",
      endDate: "2024-11-01",
      level: "silver 1",
      solved: false,
      submitMemberCount: 50,
      memberCount: 200,
      accuracy: 25,
    },
    {
      problemId: 2,
      title: "트리에서의 동적 계획법",
      startDate: "2024-10-10",
      endDate: "2024-10-14",
      level: "diamond 1",
      solved: false,
      submitMemberCount: 50,
      memberCount: 200,
      accuracy: 25,
    },
    {
      problemId: 3,
      title: "트리에서의 동적 계획법",
      startDate: "2024-10-10",
      endDate: "2024-11-01",
      level: "gold 1",
      solved: true,
      submitMemberCount: 50,
      memberCount: 200,
      accuracy: 25,
    },
  ];

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={tmpGroupData} />
      </Sidebar>
      <section className={listSectionStyle}>
        <h2 className={titleStyle}>풀어야 할 문제</h2>
        <div>
          <ProblemListHeader />
          <ProblemList>
            {data.map((item) => (
              <ProblemList.Item key={item.problemId} {...item} />
            ))}
          </ProblemList>
        </div>
      </section>
    </main>
  );
};

export default GroupDashboardPage;
