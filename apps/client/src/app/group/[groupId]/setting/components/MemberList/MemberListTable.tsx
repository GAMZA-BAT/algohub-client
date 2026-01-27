"use client";

import { MEMBER_LIST_COLUMNS } from "@/app/group/[groupId]/setting/components/MemberList/constant";
import { useMemberListData } from "@/app/group/[groupId]/setting/components/MemberList/hook";
import { DataTable } from "@/shared/component/Table";
import { tableStyle, theadStyle, trStyle } from "./index.css";

const MemberListTable = () => {
  const data = useMemberListData();
  return (
    <DataTable
      cols={MEMBER_LIST_COLUMNS}
      rows={data}
      tableClassName={tableStyle}
      theadClassName={theadStyle}
      trClassName={trStyle}
    />
  );
};

export default MemberListTable;
