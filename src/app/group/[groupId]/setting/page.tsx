import { getGroupInfo, getGroupMemberList } from "@/api/groups";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

const GroupSettingPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const groupData = getGroupInfo(+groupId);
  const memberData = getGroupMemberList(+groupId);

  const [groupInfo, memberInfo] = await Promise.all([groupData, memberData]);

  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar info={groupInfo} />
      </Sidebar>
      <MemberList memberListData={memberInfo} />
    </main>
  );
};

export default GroupSettingPage;
