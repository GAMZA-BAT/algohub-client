import { getGroupCode, getGroupInfo, getRoleByGroupId } from "@/app/api/groups";
import {
  useJoinRequestsQueryObject,
  useMemberListQueryObject,
} from "@/app/api/groups/query";
import MemberList from "@/app/group/[groupId]/setting/components/MemberList";
import SettingSidebar from "@/app/group/[groupId]/setting/components/SettingSidebar";
import Sidebar from "@/common/component/Sidebar";
import { prefetchQuery } from "@/shared/util/prefetch";
import { sidebarWrapper } from "@/styles/shared.css";
import { HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import JoinRequestList from "./components/JoinRequestList";
import { sectionWrapper } from "./components/index.css";

const GroupSettingPage = async ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const numberGroupId = +groupId;
  const role = await getRoleByGroupId(numberGroupId);
  if (role === "PARTICIPANT") notFound();

  const [groupInfo, { inviteCode }, joinRequestState, memberListState] =
    await Promise.all([
      getGroupInfo(numberGroupId),
      getGroupCode(numberGroupId),
      prefetchQuery(useJoinRequestsQueryObject(numberGroupId)),
      prefetchQuery(useMemberListQueryObject(numberGroupId)),
    ]);

  return (
    <section className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar info={groupInfo} code={inviteCode} />
      </Sidebar>
      <div className={sectionWrapper}>
        <HydrationBoundary state={joinRequestState}>
          <JoinRequestList groupName={groupInfo.name} groupId={numberGroupId} />
        </HydrationBoundary>
        <HydrationBoundary state={memberListState}>
          <MemberList groupId={numberGroupId} />
        </HydrationBoundary>
      </div>
    </section>
  );
};

export default GroupSettingPage;
