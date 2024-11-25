import { getProblemInfo } from "@/api/problems";
import { getSolutionList } from "@/api/solutions";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ProblemSidebar from "@/view/group/index/ProblemSidebar";
import SolvedList from "@/view/group/problem-list/SolvedList";
import { contentWrapper } from "@/view/group/problem-list/index.css";

const SolvedListPage = async ({
  params,
}: { params: { groupId: string; id: string } }) => {
  const solutionListData = getSolutionList({ problemId: +params.id });
  const problemData = getProblemInfo(+params.id);

  const [solutionList, problemInfo] = await Promise.all([
    solutionListData,
    problemData,
  ]);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <ProblemSidebar />
      </Sidebar>
      <div className={contentWrapper}>
        <SolvedList
          problemInfo={problemInfo}
          content={solutionList.content}
          groupId={params.groupId}
        />
      </div>
    </main>
  );
};

export default SolvedListPage;
