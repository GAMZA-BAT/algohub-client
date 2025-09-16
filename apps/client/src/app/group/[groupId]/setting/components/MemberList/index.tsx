"use client";
import { useMemberListQueryObject } from "@/app/api/groups/query";
import { MemberListProvider } from "@/app/group/[groupId]/setting/components/MemberList/MemberListProvider";
import MemberListTable from "@/app/group/[groupId]/setting/components/MemberList/MemberListTable";
import {
  labelStyle,
  memberListWrapper,
} from "@/app/group/[groupId]/setting/components/MemberList/index.css";
import { useSuspenseQuery } from "@tanstack/react-query";

const MemberList = ({ groupId }: { groupId: number }) => {
  const { data: memberInfo } = useSuspenseQuery(
    useMemberListQueryObject(groupId),
  );

  return (
    <div className={memberListWrapper}>
      <h2 className={labelStyle}>멤버 리스트</h2>
      <MemberListProvider data={memberInfo}>
        <MemberListTable />
      </MemberListProvider>
    </div>
  );
};

export default MemberList;
