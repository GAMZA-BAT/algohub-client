import {
  listStyle,
  sectionStyle,
  titleStyle,
} from "@/app/group/my-solved/page.css";
import Sidebar from "@/common/component/Sidebar";
import type { Solution } from "@/shared/type";
import { tmpGroupData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import Header from "@/view/group/my-solved/Header";
import SolvedItem from "@/view/group/my-solved/SolvedItem";

const GroupDashboardPage = () => {
  const data: Solution[] = [
    {
      solutionId: 1,
      solvedDateTime: "2024-11-01 16:00:00",
      level: "diamond 1",
      title: "트리 동적 계획법",
      memoryUsage: 300,
      executionTime: 400,
      language: "C++",
      result: "incorrect",
      codeLength: 8000,
      commentCount: 0,
    },
    {
      solutionId: 2,
      solvedDateTime: "2024-11-01 18:31:00",
      level: "ruby 1",
      title: "이진의 뇌구조 백트래킹",
      memoryUsage: 300,
      executionTime: 400,
      language: "Python",
      result: "correct",
      codeLength: 8000,
      commentCount: 4,
    },
  ];

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={tmpGroupData} />
      </Sidebar>
      <section className={sectionStyle}>
        <h1 className={titleStyle}>진행중인 문제</h1>
        <Header />
        <ul className={listStyle}>
          {data.map((item) => (
            <SolvedItem key={item.solutionId} {...item} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default GroupDashboardPage;
