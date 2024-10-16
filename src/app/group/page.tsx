import Sidebar from "@/common/component/Sidebar";
import { tmpGroupData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";
import Ranking from "@/view/group/dashboard/Ranking";
import { groupDashboardWrapper } from "@/view/group/dashboard/index.css";

const GroupDashboardPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={tmpGroupData} />
      </Sidebar>
      <div className={groupDashboardWrapper}>
        <Ranking />
      </div>
    </main>
  );
};

export default GroupDashboardPage;
