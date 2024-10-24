import Sidebar from "@/common/component/Sidebar";
import type { Solution } from "@/shared/type";
import { tmpGroupData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import MySolvedSection from "@/view/group/my-solved/Section";

const MySolvedPage = () => {
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
    {
      solutionId: 3,
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
      <section style={{ width: "80%", marginTop: "4.8rem" }}>
        <MySolvedSection data={data} title="진행중인 문제" />
        <MySolvedSection data={data} title="만료된 문제" />
      </section>
    </main>
  );
};

export default MySolvedPage;
