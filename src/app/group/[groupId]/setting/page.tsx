import { getGroupCode, getGroupInfo, getRoleByGroupId } from "@/app/api/groups";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";
import { notFound } from "next/navigation";

const GroupSettingPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const role = await getRoleByGroupId(+groupId);
  if (role === "PARTICIPANT") notFound();

  const groupInfoData = getGroupInfo(+groupId);
  const inviteCodeData = getGroupCode(+groupId);

  const [groupInfo, { inviteCode }] = await Promise.all([
    groupInfoData,
    inviteCodeData,
  ]);

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
