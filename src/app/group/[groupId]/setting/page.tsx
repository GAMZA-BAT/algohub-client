import { getGroupCode } from "@/api/group";
import Sidebar from "@/common/component/Sidebar";
import { tmpMemberListData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

const GroupSettingPage = async ({
  params,
}: { params: { groupId: string } }) => {
  const { inviteCode } = await getGroupCode(+params.groupId);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar code={inviteCode} />
      </Sidebar>
      <MemberList memberListData={tmpMemberListData} />
    </main>
  );
};

export default GroupSettingPage;
