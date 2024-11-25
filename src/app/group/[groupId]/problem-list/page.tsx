"use client";
import Sidebar from "@/common/component/Sidebar";
import TabGroup from "@/common/component/Tab";
import type { Problem } from "@/shared/type";
import { sidebarWrapper } from "@/styles/shared.css";
import ProgressList from "@/view/group/problem-list";
import PendingList from "@/view/group/problem-list/PendingList";
import PendingListHeader from "@/view/group/problem-list/PendingListHeader";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import { pageStyle, titleStyle } from "@/view/group/problem-list/index.css";

const ProblemListPage = () => {
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
