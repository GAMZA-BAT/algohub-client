import { DataTable } from "@/shared/component/Table";
import { MEMBER_LIST_COLUMNS } from "@/view/group/setting/MemberList/constant";
import { useMemberListData } from "@/view/group/setting/MemberList/hook";
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
