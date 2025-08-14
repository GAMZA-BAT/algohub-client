import { useGroupListData } from "@/app/[user]/setting/components/GroupList/GroupListTable/hook";
import { DataTable } from "@/shared/component/Table";
import { STUDY_LIST_COLUMNS } from "./constant";
import { tableCaptionStyle, tableStyle, theadStyle } from "./index.css";

const GroupListTable = () => {
  const data = useGroupListData();

  return (
    <DataTable
      title="스터디 리스트"
      rows={data}
      cols={STUDY_LIST_COLUMNS}
      tableClassName={tableStyle}
      captionClassName={tableCaptionStyle}
      theadClassName={theadStyle}
    />
  );
};

export default GroupListTable;
