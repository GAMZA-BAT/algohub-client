import Sidebar from "@/common/component/Sidebar";
import { tmpMemberListData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

const GroupSettingPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar />
      </Sidebar>
      <MemberList memberListData={tmpMemberListData} />
    </main>
  );
};

export default GroupSettingPage;
