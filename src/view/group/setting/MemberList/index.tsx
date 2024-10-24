"use client";
import type { MemberResponse } from "@/api/group/type";
import { MemberListProvider } from "@/view/group/setting/MemberList/MemberListProvider";
import MemberListTable from "@/view/group/setting/MemberList/MemberListTable";
import {
  labelStyle,
  memberListWrapper,
} from "@/view/group/setting/MemberList/index.css";

const MemberList = ({
  memberListData,
}: { memberListData: MemberResponse[] }) => {
  return (
    <div className={memberListWrapper}>
      <h1 className={labelStyle}>멤버 리스트</h1>
      <MemberListProvider data={memberListData}>
        <MemberListTable />
      </MemberListProvider>
    </div>
  );
};

export default MemberList;
