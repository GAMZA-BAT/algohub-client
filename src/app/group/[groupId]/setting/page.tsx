import { getGroupCode, getGroupInfo, getGroupMemberList } from "@/api/groups";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

const GroupSettingPage = async ({
  params,
}: { params: { groupId: string } }) => {
  const groupData = getGroupInfo(+params.groupId);
  const memberData = getGroupMemberList(+params.groupId);

  const [groupInfo, memberInfo] = await Promise.all([groupData, memberData]);
  const { inviteCode } = await getGroupCode(+params.groupId);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar info={groupInfo} code={inviteCode} />
      </Sidebar>
      <MemberList memberListData={memberInfo} />
    </main>
  );
};

export default GroupSettingPage;
