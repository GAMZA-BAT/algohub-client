"use client";
import { useMemberListQueryObject } from "@/app/api/groups/query";
import { MemberListProvider } from "@/view/group/setting/MemberList/MemberListProvider";
import MemberListTable from "@/view/group/setting/MemberList/MemberListTable";
import {
  labelStyle,
  memberListWrapper,
} from "@/view/group/setting/MemberList/index.css";
import { useSuspenseQuery } from "@tanstack/react-query";

const MemberList = ({ groupId }: { groupId: number }) => {
  const { data: memberInfo } = useSuspenseQuery(
    useMemberListQueryObject(groupId),
  );

  return (
    <div className={memberListWrapper}>
      <h1 className={labelStyle}>멤버 리스트</h1>
      <MemberListProvider data={memberInfo}>
        <MemberListTable />
      </MemberListProvider>
    </div>
  );
};

export default MemberList;
