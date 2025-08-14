import { getProblemInfo } from "@/app/api/problems";
import ProblemSidebar from "@/app/group/[groupId]/problem-list/components/ProblemSidebar";
import SolvedList from "@/app/group/[groupId]/problem-list/components/SolvedList";
import { contentWrapper } from "@/app/group/[groupId]/problem-list/components/index.css";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";

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
