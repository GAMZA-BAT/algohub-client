import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";

const ProblemListPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>SideBar</Sidebar>
      {/* children */}
    </main>
  );
};

export default ProblemListPage;
