import { getSolutionList } from "@/api/solution";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ProblemSidebar from "@/view/group/index/ProblemSidebar";
import SolvedList from "@/view/group/problem-list/SolvedList";
import { contentWrapper } from "@/view/group/problem-list/index.css";

const SolvedListPage = async ({ params }: { params: { id: string } }) => {
  const data = await getSolutionList({ problemId: +params.id });

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <ProblemSidebar />
      </Sidebar>
      <div className={contentWrapper}>
        <SolvedList content={data.content} problemId={params.id} />
      </div>
    </main>
  );
};

export default SolvedListPage;
