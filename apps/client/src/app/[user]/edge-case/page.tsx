import EdgeCaseController from "@/app/[user]/edge-case/components/EdgeCaseController";
import EdgeCaseList from "@/app/[user]/edge-case/components/EdgeCaseList";
import { edgeCaseWrapper } from "@/app/[user]/edge-case/components/index.css";
import WrongSolvedList from "@/app/[user]/edge-case/components/WrongSolvedList";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";

const EdgeCasePage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <WrongSolvedList />
      </Sidebar>
      <div className={edgeCaseWrapper}>
        <EdgeCaseController />
        <EdgeCaseList />
      </div>
    </main>
  );
};

export default EdgeCasePage;
