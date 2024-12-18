import { getProblemInfo } from "@/app/api/problems";
import { getSolutionList } from "@/app/api/solutions";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import SolvedList from "@/view/group/problem-list/SolvedList";
import { contentWrapper } from "@/view/group/problem-list/index.css";

const SolvedListPage = async ({
  params: { groupId, id },
}: { params: { groupId: string; id: string } }) => {
  const solutionListData = getSolutionList({ problemId: +id });
  const problemData = getProblemInfo(+id);

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
          groupId={groupId}
        />
      </div>
    </main>
  );
};

export default SolvedListPage;
