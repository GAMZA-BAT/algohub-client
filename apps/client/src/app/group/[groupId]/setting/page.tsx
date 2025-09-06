import { getGroupCode, getGroupInfo, getRoleByGroupId } from "@/app/api/groups";
import MemberList from "@/app/group/[groupId]/setting/components/MemberList";
import SettingSidebar from "@/app/group/[groupId]/setting/components/SettingSidebar";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import { notFound } from "next/navigation";
import JoinRequestList from "./components/JoinRequestList";
import { sectionWrapper } from "./components/index.css";

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
    <section className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar info={groupInfo} code={inviteCode} />
      </Sidebar>
      <div className={sectionWrapper}>
        <JoinRequestList />
        <MemberList groupId={+groupId} />
      </div>
    </section>
  );
};

export default GroupSettingPage;
