import { getGroupCode, getGroupInfo } from "@/app/api/groups";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

export const revalidate = 1;

const GroupSettingPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const groupInfo = await getGroupInfo(+groupId);
  const { inviteCode } = await getGroupCode(+groupId);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar info={groupInfo} code={inviteCode} groupId={+groupId} />
      </Sidebar>
      <MemberList groupId={+groupId} />
    </main>
  );
};

export default GroupSettingPage;
