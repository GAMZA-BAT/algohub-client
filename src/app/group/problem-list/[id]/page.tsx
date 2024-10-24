"use client";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ProblemSidebar from "@/view/group/index/ProblemSidebar";
import SolvedList from "@/view/group/problem-list/SolvedList";
import {} from "@/view/group/problem-list/index.css";
import { contentWrapper } from "@/view/group/problem-list/index.css";
import { useParams } from "next/navigation";

const SolvedListPage = () => {
  const params = useParams();
  const problemId = params.id;

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <ProblemSidebar />
      </Sidebar>
      <div className={contentWrapper}>
        <SolvedList problemId={problemId as string} />
      </div>
    </main>
  );
};

export default SolvedListPage;
