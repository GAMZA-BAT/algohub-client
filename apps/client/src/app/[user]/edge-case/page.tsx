import EdgeCaseContent from "@/app/[user]/edge-case/components/EdgeCaseContent";
import WrongSolvedList from "@/app/[user]/edge-case/components/WrongSolvedList";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";

const EdgeCasePage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <WrongSolvedList />
      </Sidebar>
      <EdgeCaseContent />
    </main>
  );
};

export default EdgeCasePage;
