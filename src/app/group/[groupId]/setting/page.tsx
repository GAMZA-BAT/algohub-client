import { getGroupCode, getGroupInfo } from "@/api/groups";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

const GroupSettingPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const groupInfo = await getGroupInfo(+groupId);
  const { inviteCode } = await getGroupCode(+groupId);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar info={groupInfo} code={inviteCode} />
      </Sidebar>
      <MemberList groupId={+groupId} />
    </main>
  );
};

export default GroupSettingPage;
