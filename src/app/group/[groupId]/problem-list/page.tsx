"use client";
import type { ProblemContent } from "@/api/problems/type";
import Sidebar from "@/common/component/Sidebar";
import TabGroup from "@/common/component/Tab";
import { sidebarWrapper } from "@/styles/shared.css";
import ProgressList from "@/view/group/problem-list";
import PendingList from "@/view/group/problem-list/PendingList";
import PendingListHeader from "@/view/group/problem-list/PendingListHeader";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import { pageStyle, titleStyle } from "@/view/group/problem-list/index.css";

const ProblemListPage = () => {
  const data: ProblemContent[] = [
    {
      title: "막대기",
      problemId: 4,
      link: "https://www.acmicpc.net/problem/1094",
      startDate: "2024.03.19",
      endDate: "2024.12.31",
      level: 6,
      solved: true,
      submitMemberCount: 3,
      memberCount: 7,
      accuracy: 100,
      inProgress: true,
    },
    {
      title: "요리 강좌",
      problemId: 6,
      link: "https://www.acmicpc.net/problem/14869",
      startDate: "2024.08.10",
      endDate: "2024.12.12",
      level: 22,
      solved: false,
      submitMemberCount: 0,
      memberCount: 7,
      accuracy: 0,
      inProgress: true,
    },
    {
      title: "양 한마리... 양 두마리...",
      problemId: 9,
      link: "https://www.acmicpc.net/problem/11123",
      startDate: "2024.12.20",
      endDate: "2024.12.31",
      level: 9,
      solved: false,
      submitMemberCount: 0,
      memberCount: 7,
      accuracy: 0,
      inProgress: true,
    },
    {
      title: "기타줄",
      problemId: 10,
      link: "https://www.acmicpc.net/problem/1049",
      startDate: "2024.12.31",
      endDate: "2025.01.20",
      level: 7,
      solved: false,
      submitMemberCount: 0,
      memberCount: 7,
      accuracy: 0,
      inProgress: true,
    },
    {
      title: "A+B",
      problemId: 13,
      link: "https://www.acmicpc.net/problem/1000",
      startDate: "2024.11.20",
      endDate: "2024.11.28",
      level: 1,
      solved: false,
      submitMemberCount: 0,
      memberCount: 7,
      accuracy: 0,
      inProgress: true,
    },
  ];
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <ProblemSidebar />
      </Sidebar>
      <div className={pageStyle}>
        <TabGroup.Tabs variant="secondary">
          <TabGroup.TabList>
            <TabGroup.Tab tabId="1" indicatorId="problemlist">
              진행중인 문제·만료된 문제
            </TabGroup.Tab>
            <TabGroup.Tab tabId="2" indicatorId="problemlist">
              대기중인 문제
            </TabGroup.Tab>
          </TabGroup.TabList>
          <TabGroup.TabPanels>
            <section>
              <ProgressList data={data} />
              <ProgressList variant="expired" data={data} />
            </section>
            <section>
              <div style={{ width: "100%", margin: "1.6rem 0" }}>
                <h2 className={titleStyle}>대기중인 문제</h2>
                <PendingListHeader />
                <PendingList data={data} />
              </div>
            </section>
          </TabGroup.TabPanels>
        </TabGroup.Tabs>
      </div>
    </main>
  );
};

export default ProblemListPage;
