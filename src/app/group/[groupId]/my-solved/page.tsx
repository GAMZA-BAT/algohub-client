import type { SolutionContent } from "@/api/solutions/type";
import Sidebar from "@/common/component/Sidebar";
import { tmpGroupData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import MySolvedSection from "@/view/group/my-solved/Section";

const MySolvedPage = () => {
  const data: SolutionContent[] = [
    {
      solutionId: 1,
      problemTitle: "막대기",
      problemLevel: 6,
      accuracy: 100,
      submitMemberCount: 3,
      totalMemberCount: 8,
      nickname: "rladmstn",
      profileImage:
        "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
      solvedDateTime: "2024.10.31 05:23:00",
      content: "solution1",
      result: "맞았습니다!!",
      memoryUsage: 256,
      executionTime: 120,
      language: "Java",
      codeLength: 345,
      commentCount: 3,
    },
    {
      solutionId: 1,
      problemTitle: "막대기",
      problemLevel: 6,
      accuracy: 100,
      submitMemberCount: 3,
      totalMemberCount: 8,
      nickname: "rladmstn",
      profileImage:
        "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
      solvedDateTime: "2024.10.31 05:23:00",
      content: "solution1",
      result: "맞았습니다!!",
      memoryUsage: 256,
      executionTime: 120,
      language: "Java",
      codeLength: 345,
      commentCount: 3,
    },
    {
      solutionId: 1,
      problemTitle: "막대기",
      problemLevel: 6,
      accuracy: 100,
      submitMemberCount: 3,
      totalMemberCount: 8,
      nickname: "rladmstn",
      profileImage:
        "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
      solvedDateTime: "2024.10.31 05:23:00",
      content: "solution1",
      result: "맞았습니다!!",
      memoryUsage: 256,
      executionTime: 120,
      language: "Java",
      codeLength: 345,
      commentCount: 3,
    },
    {
      solutionId: 1,
      problemTitle: "막대기",
      problemLevel: 6,
      accuracy: 100,
      submitMemberCount: 3,
      totalMemberCount: 8,
      nickname: "rladmstn",
      profileImage:
        "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
      solvedDateTime: "2024.10.31 05:23:00",
      content: "solution1",
      result: "맞았습니다!!",
      memoryUsage: 256,
      executionTime: 120,
      language: "Java",
      codeLength: 345,
      commentCount: 3,
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
