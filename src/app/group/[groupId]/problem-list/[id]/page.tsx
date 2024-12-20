import { getProblemInfo } from "@/app/api/problems";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import SolvedList from "@/view/group/problem-list/SolvedList";
import { contentWrapper } from "@/view/group/problem-list/index.css";

const SolvedListPage = async ({
  params: { groupId, id },
}: { params: { groupId: string; id: string } }) => {
  const problemInfo = await getProblemInfo(+id);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <ProblemSidebar />
      </Sidebar>
      <div className={contentWrapper}>
        <SolvedList
          problemInfo={problemInfo}
          problemId={+id}
          groupId={groupId}
        />
      </div>
    </main>
  );
};

export default SolvedListPage;
